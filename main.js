// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB6YczbG7eRhXG4mtsUwNIAQ2LiQ9WBwsQ",
  authDomain: "authentication-app-4acfd.firebaseapp.com",
  databaseURL: "https://authentication-app-4acfd-default-rtdb.firebaseio.com",
  projectId: "authentication-app-4acfd",
  storageBucket: "authentication-app-4acfd.appspot.com",
  messagingSenderId: "275429946438",
  appId: "1:275429946438:web:3ac955300d59b62d8e4647"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            firebase.auth().onAuthStateChanged(user =>{
                if(user){
                    window.location ='http://localhost:3000';
                }
            })
            // Signed in 
            //Window.location='redirect/index1.html';
          // document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}