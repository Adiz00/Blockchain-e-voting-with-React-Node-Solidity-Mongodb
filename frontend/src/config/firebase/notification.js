

import firebase from './firebase'

const resgisterNotifications = () => {
    // try {
    //     if ("serviceWorker" in navigator) {
    //         navigator.serviceWorker
    //             .register("../../firebase-messaging-sw.js")
    //             .then((registration) => {
    //                 console.log("Service Worker Registered");

    //                 let messaging = firebase.messaging();
    //                 messaging.getToken({ serviceWorkerRegistration: registration })
    //                     .then((token) => {
    //                         console.log("Token: ", token);
    //                         localStorage.setItem("FirebaseToken", token);
    //                     })
    //                     .catch((err) => console.log(err));

    //                 Notification.requestPermission()
    //                     .then(res => console.log(res))
    //                     .catch((err) => console.log(err));

    //                 firebase.messaging().onMessage((payload) => {
    //                     console.log("notification body: ", payload)
    //                     new Notification(payload?.notification?.title, {
    //                         body: payload?.notification?.body,
    //                         icon: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    //                     })
    //                 })
    //             });
    //     }
    // }
    // catch (err) {
    //     console.log("firebase error", err);
    // }
}

export default {
     resgisterNotifications 
    };

    