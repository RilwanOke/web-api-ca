
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: "movie-app-d6739",
    storageBucket: "movie-app-d6739.firebasestorage.app",
    messagingSenderId: "321805033362",
    appId: "1:321805033362:web:5e4091785f217b2db7eb4b",
    measurementId: "G-YCXC0LX1E7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);

export default firebaseApp;
export { auth };
