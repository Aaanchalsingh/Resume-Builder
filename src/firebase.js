import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDs0lBRul2MTfBk1p0MbJoVeZck5wKQeqE",
    authDomain: "resume-builder-daf05.firebaseapp.com",
    databaseURL: "https://resume-builder-daf05-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "resume-builder-daf05",
    storageBucket: "resume-builder-daf05.appspot.com",
    messagingSenderId: "1241345610",
    appId: "1:1241345610:web:b498a525dd57a9bd6840b3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, provider, firestore };

