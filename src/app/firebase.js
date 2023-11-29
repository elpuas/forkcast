import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhPMHFCLeeHNdNQw9TZj3R7JKFq-At5t4",
    authDomain: "forkcast-a222d.firebaseapp.com",
    projectId: "forkcast-a222d",
    storageBucket: "forkcast-a222d.appspot.com",
    messagingSenderId: "616886915399",
    appId: "1:616886915399:web:dccbb0af6c9eeb34f63c62",
    measurementId: "G-410277SG87"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { auth };
export { firestore };
