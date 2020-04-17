import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDz3y38kVZJdlJj57pluQInqQJH_89vCIs",
    authDomain: "catch-of-the-day-will-stone.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-will-stone.firebaseio.com",
    // projectId: "catch-of-the-day-will-stone",
    // storageBucket: "catch-of-the-day-will-stone.appspot.com",
    // messagingSenderId: "324887585267",
    // appId: "1:324887585267:web:ce9ab62e9050e062757286",
    // measurementId: "G-R2VSP3CGBY"
});

// our rebase binding
const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;