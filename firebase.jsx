import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
<-- Note: below configuration is provided by firebase while creating you project
so insert that configuration here insted of these -->
  
  // apiKey: "write your api key",
  // authDomain: "write your auth domain",
  // projectId: "Write your firebase project id",
  // storageBucket: "Write link for storage bucket",
  // messagingSenderId: "write message sending id",
  // appId: "write api id",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const db = getFirestore(app);
const auth = getAuth(app);
const database = getDatabase(app);

export { db, auth, database, storage };
