let firebaseConfig = {
    apiKey: "AIzaSyBxyrFhypAH8-D1KZLxLCkJCPTLgTpuESA",
  authDomain: "blog-firebase-577d5.firebaseapp.com",
  projectId: "blog-firebase-577d5",
  storageBucket: "blog-firebase-577d5.appspot.com",
  messagingSenderId: "687552434973",
  appId: "1:687552434973:web:6d408bf754d8a28aa1c7f4"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();