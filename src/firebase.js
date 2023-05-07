import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCZF2yh2Ws-hVDRq9TB96RA4eys2IMqfWc",
    authDomain: "bloomhub-9ff85.firebaseapp.com",
    projectId: "bloomhub-9ff85",
    storageBucket: "bloomhub-9ff85.appspot.com",
    messagingSenderId: "864016773326",
    appId: "1:864016773326:web:30baed8f7c86e11827609f",
    measurementId: "G-WTWTDE58DD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;