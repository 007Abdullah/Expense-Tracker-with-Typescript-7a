import firebase from "firebase";

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
var messaging = firebase.messaging();

export function InitNotification() {
    Notification.requestPermission().then((permission) => {
        console.log('Permission :', permission);
        if (permission === 'granted') {
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log('Token Coming :', currentToken);
                }
                else {
                    console.log("No registration token available. Request permission to generate one.");
                }
            }).catch((error) => {
                console.log('An error occurred while retrieving token. ', error);
            })
        }
    })

}