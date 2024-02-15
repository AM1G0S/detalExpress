import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_API_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_API_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_API_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_API_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_API_APP_ID,
};

// @ts-ignore
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const addRequest = async (requestData: any) => {
    try {
        const docRef = await addDoc(collection(db, "requests"), requestData);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};