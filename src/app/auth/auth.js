import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

// Function to sign up a new user with email and password
export const signUpWithEmailPassword = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User created: ", userCredential.user);
    } catch (error) {
        console.error("Error signing up: ", error.message);
    }
};