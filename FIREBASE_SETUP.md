# Firebase Firestore Setup Guide

This project uses Firebase Firestore to track PDF download counts in real-time.

## Setup Instructions

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter a project name (e.g., "aiadmk-manifesto")
4. Follow the setup wizard

### 2. Enable Firestore Database

1. In Firebase Console, go to **Build** > **Firestore Database**
2. Click **Create Database**
3. Select **Start in test mode** (for development)
4. Choose your preferred location
5. Click **Enable**

### 3. Create Firestore Collection & Document

1. In Firestore, create a new collection named `stats`
2. Add a document with ID `downloads`
3. Add the following field:
   ```
   count: 9422
   ```

### 4. Get Firebase Credentials

1. In Firebase Console, go to **Project Settings** (gear icon)
2. Copy your Firebase config (API Key, Project ID, etc.)
3. Create a `.env.local` file in the project root
4. Add your Firebase credentials:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 5. Install Firebase SDK

```bash
npm install firebase
```

or with Bun:

```bash
bun install firebase
```

## How It Works

### Real-Time Download Counter

- **Location**: `src/hooks/use-download-counter.ts`
- **Usage**: Import `useDownloadCounter` hook in any component
- Automatically listens for updates in Firestore
- Updates UI instantly when count changes

### Download Handler

- **Location**: `src/components/Navbar.tsx`
- Opens PDF in new browser tab
- Increments Firestore counter atomically
- Shows loading state during operation
- Prevents spam clicks

## Firestore Security Rules (Test Mode)

For development, test mode allows all reads/writes. **Before production**, set proper rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /stats/{document=**} {
      // Only allow incrementing the count
      allow read: if true;
      allow update: if request.resource.data.count == resource.data.count + 1;
    }
  }
}
```

## Component Integration

The navbar automatically uses the Firebase counter:

```tsx
const { count, loading, error, incrementCount } = useDownloadCounter();
```

- `count`: Current download count
- `loading`: Loading state during operations
- `error`: Error message if any
- `incrementCount()`: Async function to increment

## Features

✅ Real-time updates across all browser tabs/devices
✅ Atomic increments (no race conditions)
✅ Automatic fallback to default value (9422) on error
✅ Loading states and error handling
✅ Spam prevention (button disabled during download)
✅ No localStorage dependency
✅ Works across all devices instantly

## Troubleshooting

### "Firebase app not initialized"
- Ensure `.env.local` has correct Firebase credentials
- Verify `VITE_FIREBASE_PROJECT_ID` is set

### Count not updating
- Check if Firestore document `stats/downloads` exists
- Verify security rules allow document updates
- Check browser console for errors

### Connection fails
- Check internet connection
- Verify Firebase project is active
- Check if Firestore database is enabled

## Optional: Firebase Emulator (Development)

To use local Firebase emulator:

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run: `firebase emulators:start`
3. Set in `.env.local`: `VITE_USE_FIREBASE_EMULATOR=true`

This allows offline development without using real Firebase resources.
