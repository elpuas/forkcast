import { collection, query, getDocs, limit } from 'firebase/firestore';
import { firestore } from '../app/firebase'; 


/**
 * Reads authors from Firestore and logs the result.
 * @returns {Promise<void>} A promise that resolves when the operation is complete.
 */
export const testReadAuthors = async () => {
    try {
        // Create a query against the collection.
        const authorsQuery = query(collection(firestore, 'author'), limit(1));
        const querySnapshot = await getDocs(authorsQuery);
    
        if (!querySnapshot.empty) {
          // If there's at least one document in the authors collection
            const authorData = querySnapshot.docs[0].data();
            console.log('Successfully read from Firestore. Author data:', authorData);
        } else {
          // The authors collection is empty
            console.log('Successfully connected to Firestore, but no author data was found.');
        }
    } catch (error) {
        console.error('Error reading from Firestore:', error);
    }
};
