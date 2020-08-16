import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAq57ZZLv-R8QW0ZjkoBll_vXndMC8vBgw",
    authDomain: "ig-reels-clone-2da6a.firebaseapp.com",
    databaseURL: "https://ig-reels-clone-2da6a.firebaseio.com",
    projectId: "ig-reels-clone-2da6a",
    storageBucket: "ig-reels-clone-2da6a.appspot.com",
    messagingSenderId: "926512702544",
    appId: "1:926512702544:web:1c21b1b3db078defc29d55",
    measurementId: "G-10CHZBVE42"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;