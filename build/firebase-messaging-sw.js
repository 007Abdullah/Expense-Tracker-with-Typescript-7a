importScripts("https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyC8CbnEy2Vb50Htv9wvDcrRkse0cGa09yI",
    authDomain: "expense-tracker-e0eb7.firebaseapp.com",
    projectId: "expense-tracker-e0eb7",
    storageBucket: "expense-tracker-e0eb7.appspot.com",
    messagingSenderId: "814257852279",
    appId: "1:814257852279:web:40940b2717b6f14417db72",
    measurementId: "G-7YBP5Q5JKX"
};
firebase.initializeApp(firebaseConfig);
firebase.messaging();