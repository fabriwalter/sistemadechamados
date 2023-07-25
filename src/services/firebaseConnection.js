import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyB3PEAcDfeTquTTaAPU2ZCpDYJoCLG_QYw",
    authDomain: "tickets-a879b.firebaseapp.com",
    projectId: "tickets-a879b",
    storageBucket: "tickets-a879b.appspot.com",
    messagingSenderId: "692562106377",
    appId: "1:692562106377:web:51c774ccb924dc43d8c0d8",
    measurementId: "G-6ZNDP4Q48B"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };