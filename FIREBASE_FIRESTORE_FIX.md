# Firebase Firestore Download Counter - Fix Guide

## Issues Fixed

✅ Removed all localStorage/sessionStorage usage - using pure Firestore
✅ Improved real-time listener setup with better error handling
✅ Fixed initialization logic - only sets DEFAULT_COUNT for display, not override
✅ Enhanced debugging logs - see detailed Firestore operations in console
✅ Better error handling for permission and connection issues

---

## Critical Step: Fix Firestore Security Rules

Your Firestore security rules might be blocking reads/writes. 

### Temporary Fix (Development Only)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Navigate to **Build** → **Firestore Database** → **Rules**
3. Replace everything with:

```firestore
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

4. Click **Publish**

### Permanent Security Rules (Production)

```firestore
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /stats/downloads {
      // Allow anyone to read
      allow read: if true;
      // Only allow increments (no overwrites)
      allow update: if request.resource.data.keys() == ['count'] &&
                       request.resource.data.count == resource.data.count + 1;
      // Allow creation with default count
      allow create: if request.resource.data.keys() == ['count'] &&
                       request.resource.data.count == 9422;
    }
  }
}
```

---

## Verify Your Setup

### 1. Check Firebase Environment Variables

Verify `.env.local` has real credentials (not demo values):

```bash
# Should NOT be demo values like:
# VITE_FIREBASE_API_KEY=AIzaSyDemoKey123456789

# Should be your actual Firebase project:
VITE_FIREBASE_API_KEY=AIzaSy...
VITE_FIREBASE_PROJECT_ID=aiadmk-election-2026
```

### 2. Verify Firestore Collection Setup

In Firebase Console → Firestore Database:

- **Collection:** `stats`
- **Document ID:** `downloads`
- **Field:** `count` (number type)
- **Value:** `9422` (or current count)

### 3. Check Browser Console Logs

Open browser DevTools (F12) → Console tab

You should see logs like:
```
🔄 Setting up Firestore listener for downloads counter...
✅ Firestore listener: count = 9422
```

If you see errors like:
```
permission-denied
unauthenticated
No document
```

Then the Firestore connection is working but there's a configuration issue.

---

## Debugging Commands

### Test Firestore Connection in Console

```javascript
// Check if Firebase is initialized
console.log("Database:", window.db);

// Manually read the counter
import { doc, getDoc } from "firebase/firestore";
const docRef = doc(db, "stats", "downloads");
getDoc(docRef).then(snap => console.log(snap.data()));
```

---

## Expected Behavior After Fix

✅ Count syncs across all tabs instantly
✅ Count increments when you download PDF
✅ Refresh page → count stays the same
✅ Open in new tab → count stays synchronized
✅ Same count shown to all users globally

---

## If Problems Persist

### Problem: Count always shows 9422

**Cause:** Firestore is not returning actual data

**Solution:**
1. Check Firestore rules (must allow read)
2. Verify document exists in Firebase Console
3. Check browser console for permission-denied errors

### Problem: Count doesn't increment

**Cause:** Update operation failed

**Solution:**
1. Check Firestore rules (must allow update)
2. Verify increment operation syntax is correct
3. Check for "permission-denied" errors in console

### Problem: Different counts in different tabs

**Cause:** Real-time listener not set up properly

**Solution:**
1. Refresh all tabs
2. Check browser console for connection errors
3. Verify Firestore database is not in read-only mode

---

## What Changed in the Code

1. **Removed sessionStorage** - now purely Firestore
2. **Improved listener** - better error tracking
3. **Better initialization** - doesn't force DEFAULT_COUNT
4. **More debugging** - console logs show what's happening
5. **Error handling** - specific error codes tell you what's wrong
6. **Graceful degradation** - displays DEFAULT_COUNT only if Firestore fails

The hook now returns:
- `count`: Display count (uses DEFAULT_COUNT as fallback)
- `actualCount`: Real Firestore count (null if not loaded)
- Other status fields for debugging
