import { useState, useEffect } from "react";
import { doc, onSnapshot, updateDoc, increment } from "firebase/firestore";
import { db } from "@/lib/firebase";

const STATS_DOC = "downloads";
const STATS_COLLECTION = "stats";

export const useDownloadCounter = () => {
  const [count, setCount] = useState<number | null>(null); // no default
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFirebaseReady, setIsFirebaseReady] = useState(false);

  useEffect(() => {
    const docRef = doc(db, STATS_COLLECTION, STATS_DOC);

    const unsubscribe = onSnapshot(
      docRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          const firestoreCount = data?.count;

          if (typeof firestoreCount === "number") {
            setCount(firestoreCount);
            setError(null);
            setIsFirebaseReady(true);
          } else {
            setError("Invalid data in Firestore");
          }
        } else {
          setError("Document not found");
        }

        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
        setIsFirebaseReady(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const incrementCount = async () => {
    try {
      const docRef = doc(db, STATS_COLLECTION, STATS_DOC);
      await updateDoc(docRef, { count: increment(1) });
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to increment");
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