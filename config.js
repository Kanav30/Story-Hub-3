import firebase from 'firebase';
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyDMh_vFvIYoU5D1KC5JA2DS9FS_hAS2meU",
    authDomain: "storyhub-6d2f4.firebaseapp.com",
    databaseURL: "https://storyhub-6d2f4.firebaseio.com",
    projectId: "storyhub-6d2f4",
    storageBucket: "storyhub-6d2f4.appspot.com",
    messagingSenderId: "442691411632",
    appId: "1:442691411632:web:f71f0f9b0d1e7b1cb1a575"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();