import { useState, useEffect } from "react";
import {
  doc,
  onSnapshot,
  updateDoc,
  increment,
  setDoc,
  getDocs,
  collection,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

const STATS_DOC = "downloads";
const STATS_COLLECTION = "stats";
const DEFAULT_COUNT = 9422;

export const useDownloadCounter = () => {
  const [count, setCount] = useState(DEFAULT_COUNT);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFirebaseReady, setIsFirebaseReady] = useState(false);

  // Subscribe to real-time updates
  useEffect(() => {
    let unsubscribe: (() => void) | null = null;
    let retryTimeout: NodeJS.Timeout | null = null;

    const setupListener = async () => {
      try {
        const docRef = doc(db, STATS_COLLECTION, STATS_DOC);

        // First, try to verify Firestore connection
        try {
          const snapshot = await getDocs(collection(db, STATS_COLLECTION));
          console.log("✅ Firestore connected successfully");
          setIsFirebaseReady(true);
        } catch (testErr) {
          console.warn("⚠️ Firestore connection test failed - using local fallback", testErr);
          setIsFirebaseReady(false);
        }

        // Set up real-time listener
        unsubscribe = onSnapshot(
          docRef,
          (snapshot) => {
            if (snapshot.exists()) {
              const data = snapshot.data();
              const newCount = data.count || DEFAULT_COUNT;
              console.log("📊 Download count from Firestore:", newCount);
              setCount(newCount);
              setIsFirebaseReady(true);
            } else {
              // Document doesn't exist, create it with default count
              console.log("📝 Creating new Firestore document with default count");
              initializeCounter();
              setIsFirebaseReady(true);
            }
            setLoading(false);
          },
          (err) => {
            console.error("❌ Error listening to downloads:", err);
            setError("Unable to connect to server. Using local counter.");
            setLoading(false);
            setIsFirebaseReady(false);
            // Use session storage as fallback
            const localCount = sessionStorage.getItem("downloadCount");
            if (localCount) {
              setCount(parseInt(localCount, 10));
            }
          }
        );
      } catch (err) {
        console.error("Firebase error:", err);
        setError("Firebase not configured. Check your .env.local file.");
        setLoading(false);
        setIsFirebaseReady(false);
        setCount(DEFAULT_COUNT);
      }
    };

    setupListener();

    return () => {
      if (unsubscribe) unsubscribe();
      if (retryTimeout) clearTimeout(retryTimeout);
    };
  }, []);

  // Initialize counter if document doesn't exist
  const initializeCounter = async () => {
    try {
      const docRef = doc(db, STATS_COLLECTION, STATS_DOC);
      await setDoc(docRef, { count: DEFAULT_COUNT }, { merge: true });
      console.log("✅ Counter initialized in Firestore");
    } catch (err) {
      console.error("Error initializing counter:", err);
    }
  };

  // Increment counter
  const incrementCount = async () => {
    try {
      const docRef = doc(db, STATS_COLLECTION, STATS_DOC);
      await updateDoc(docRef, {
        count: increment(1),
      });
      console.log("✅ Counter incremented in Firestore");
      return true;
    } catch (err) {
      console.error("Error incrementing count:", err);
      setError("Failed to update counter");
      
      // Fallback: increment locally
      const newCount = count + 1;
      setCount(newCount);
      sessionStorage.setItem("downloadCount", newCount.toString());
      
      return false;
    }
  };

  return {
    count,
    loading,
    error,
    incrementCount,
    isFirebaseReady,
  };
};
