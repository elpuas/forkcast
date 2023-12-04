import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

// Initialize Firestore
const db = getFirestore();


export const signUpWithEmailPassword = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User created: ", userCredential.user);

        // Create an author document
        const authorRef = doc(db, "authors", userCredential.user.uid);
        await setDoc(authorRef, {
            password: password,
            email: userCredential.user.email,
            createdAt: new Date(),
        });

        console.log("Author document created for: ", userCredential.user.uid);
    } catch (error) {
        console.error("Error signing up: ", error.message);
    }
};
