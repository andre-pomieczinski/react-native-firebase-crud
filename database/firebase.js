import firebase from 'firebase';

import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDGLeRbJ9sIw6N1d8NZw0v-WKMtcVjdYiA",
    authDomain: "react-native-fb-crud.firebaseapp.com",
    projectId: "react-native-fb-crud",
    storageBucket: "react-native-fb-crud.appspot.com",
    messagingSenderId: "987058175080",
    appId: "1:987058175080:web:ffda6415c6df7e69f84fdd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
    firebase,
    db,
}