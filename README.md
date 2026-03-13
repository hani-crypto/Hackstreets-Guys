inserting in head tag
<script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore-compat.js"></script>

 const firebaseConfig = {
  apiKey: "AIzaSyD84XFjt4MawIZvR5-N9PBT1ihvtsMydA",
  authDomain: "finquest1.firebaseapp.com",
  projectId: "finquest1",
  storageBucket: "finquest1.firebasestorage.app",
  messagingSenderId: "390666239301",
  appId: "1:390666239301:web:1e190b2c3789f98f82522c",
  measurementId: "G-DTCQLEHFM5"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
