import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

/**
 * Listen for changes in the authentication state.
 * @param {Object} auth - The Firebase auth object.
 * @param {Function} callback - The callback function to be executed when the authentication state changes.
 * @returns {void}
 */
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        console.log("User signed in: ", user);
    // You can now use the 'user' object for user-specific operations
    } else {
        // User is signed out
        console.log("User signed out.");
    }
});