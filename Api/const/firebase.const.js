const firebase = require("firebase");

const config = {
    apiKey: "AIzaSyBQ37hlEpHqSLX9OHapV1Y8qvre9nmW65Y",
    authDomain: "erestaurant-application.firebaseapp.com",
    projectId: "erestaurant-application",
    storageBucket: "erestaurant-application.appspot.com",
    messagingSenderId: "616383722038",
    appId: "1:616383722038:web:ee4b888a895ab7ecc8de97",
    measurementId: "G-Q3QQFQ59E4"
}

const app = firebase.initializeApp(config);

if (!process.firebase) {
    process.firebase = app;
} else {
    console.log('Firebase connection already established!');
}

module.exports = app;