import firebase from 'firebase'


  const config ={
        apiKey: "AIzaSyBjardRdsa_OUKiy89bfkx0TOOd_vYlpng",
        authDomain: "hotel-casino-authenticate.firebaseapp.com",
        projectId: "hotel-casino-authenticate",
        storageBucket: "hotel-casino-authenticate.appspot.com",
        messagingSenderId: "327445041233",
        appId: "1:327445041233:web:f6a9459b947d42d5442870",
        measurementId: "G-FTQ07TVJTN"

  }

    // Initialize Firebase
    const fire = firebase.initializeApp(config);
    export default fire 
