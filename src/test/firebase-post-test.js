import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../app/firebase'; // Adjust the import path as needed

/**
 * Adds a new author to Firestore.
 * 
 * @returns {Promise<void>} A promise that resolves when the author is successfully added.
 */
export const testAddAuthor = async () => {
    try {
        const authorData = {
            bio: "This is a Test Bio",
            name: "Alfredo Navas",
            profilePicture: "https://www.wewritebios.com/wp-content/uploads/2021/05/chef-bio-example-bio-writers.jpg"
        };

        // Reference to the collection where the document will be added
        const authorsCollectionRef = collection(firestore, 'author'); // The collection name should be 'author' based on your screenshot

        // Add a new document to Firestore
        const docRef = await addDoc(authorsCollectionRef, authorData);

        console.log('New author added with ID:', docRef.id);
    } catch (error) {
        console.error('Error adding author to Firestore:', error);
    }
};
