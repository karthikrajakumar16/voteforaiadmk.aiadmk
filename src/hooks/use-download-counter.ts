import { useState, useEffect } from "react";
import {
  doc,
  onSnapshot,
  updateDoc,
  increment,
  setDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

const STATS_DOC = "downloads";
const STATS_COLLECTION = "stats";
const DEFAULT_COUNT = 9422;

export const useDownloadCounter = () => {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFirebaseReady, setIsFirebaseReady] = useState(false);

  // Subscribe to real-time updates
  useEffect(() => {
    let unsubscribe: (() => void) | null = null;

    const setupListener = async () => {
      try {
        // Check if Firebase is initialized
        if (!db) {
          throw new Error("Firebase Firestore not initialized");
        }

        console.log("🔄 Setting up Firestore listener for downloads counter...");
        const docRef = doc(db, STATS_COLLECTION, STATS_DOC);

        // Set up real-time listener
        unsubscribe = onSnapshot(
          docRef,
          (snapshot) => {
            if (snapshot.exists()) {
              const data = snapshot.data();
              const firestoreCount = data?.count;
              
              if (typeof firestoreCount === "number") {
                console.log("✅ Firestore listener: count =", firestoreCount);
                setCount(firestoreCount);
                setError(null);
                setIsFirebaseReady(true);
              } else {
                console.warn("⚠️  Firestore document exists but count is invalid:", data);
                setError("Invalid data in Firestore");
              }
            } else {
              // Document doesn't exist, create it
              console.log("📝 Document does not exist. Creating it with default count:", DEFAULT_COUNT);
              initializeCounter();
              setIsFirebaseReady(true);
            }
            setLoading(false);
          },
          (err) => {
            console.error("❌ Firestore error:", err.code, err.message);
            setError(`Firestore error: ${err.message}`);
            setLoading(false);
            setIsFirebaseReady(false);
            
            // Only set default count on critical errors
            if (err.code === "permission-denied") {
              console.error("🚨 Permission denied! Check Firestore security rules");
            } else if (err.code === "unauthenticated") {
              console.error("🚨 Authentication required");
            }
          }
        );
      } catch (err) {
        console.error("❌ Setup error:", err);
        setError(err instanceof Error ? err.message : "Failed to setup listener");
        setLoading(false);
        setIsFirebaseReady(false);
      }
    };

    setupListener();

    return () => {
      if (unsubscribe) {
        console.log("🔌 Unsubscribing from Firestore listener");
        unsubscribe();
      }
    };
  }, []);

  // Initialize counter if document doesn't exist
  const initializeCounter = async () => {
    try {
      console.log("📝 Initializing Firestore document with count:", DEFAULT_COUNT);
      const docRef = doc(db, STATS_COLLECTION, STATS_DOC);
      await setDoc(docRef, { count: DEFAULT_COUNT });
      console.log("✅ Firestore document created successfully");
      setCount(DEFAULT_COUNT);
    } catch (err) {
      console.error("❌ Error initializing counter:", err);
      setError(err instanceof Error ? err.message : "Failed to initialize counter");
    }
  };

  // Increment counter
  const incrementCount = async () => {
    try {
      if (!isFirebaseReady) {
        console.warn("⚠️  Firestore not ready, retrying...");
        // Wait a moment for Firestore to be ready
        await new Promise((resolve) => setTimeout(resolve, 500));
      }

      console.log("📤 Incrementing counter in Firestore...");
      const docRef = doc(db, STATS_COLLECTION, STATS_DOC);
      
      await updateDoc(docRef, {
        count: increment(1),
      });
      
      console.log("✅ Counter incremented successfully");
      return true;
    } catch (err) {
      console.error("❌ Error incrementing count:", err);
      
      if (err instanceof Error) {
        if (err.message.includes("No document")) {
          console.log("📝 Document not found, creating it...");
          await initializeCounter();
        }
        setError(`Increment failed: ${err.message}`);
      } else {
        setError("Failed to increment counter");
      }
      
      return false;
    }
  };

  return {
    count: count ?? DEFAULT_COUNT, // Use default only for initial display
    actualCount: count, // Raw count from Firestore
    loading,
    error,
    incrementCount,
    isFirebaseReady,
  };
};
