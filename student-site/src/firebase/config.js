// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, GoogleauthProvider } from "firebase/auth"
// import { getFirestore } from "firebase/firestore"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC1fxMX7--PfWCoOim4nQNgwrZvH4sqWEg",
//   authDomain: "bord-app-6d30a.firebaseapp.com",
//   projectId: "bord-app-6d30a",
//   storageBucket: "bord-app-6d30a.firebasestorage.app",
//   messagingSenderId: "772160419281",
//   appId: "1:772160419281:web:bde590c83785649c7c9cf0",
//   measurementId: "G-DXVMBTDQY7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const provider = new GoogleauthProvider();
// const db = getFirestore(app);
// const auth = getAuth(app);

// export { auth, provider, db };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1fxMX7--PfWCoOim4nQNgwrZvH4sqWEg",
  authDomain: "bord-app-6d30a.firebaseapp.com",
  projectId: "bord-app-6d30a",
  storageBucket: "bord-app-6d30a.firebasestorage.app",
  messagingSenderId: "772160419281",
  appId: "1:772160419281:web:bde590c83785649c7c9cf0",
  measurementId: "G-DXVMBTDQY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db};
