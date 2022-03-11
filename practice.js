var firebaseConfig = {
    apiKey: "AIzaSyC1uZhS_xFewPk-AbFftvuIHn0q7aifOfQ",
    authDomain: "kwitter-cda0a.firebaseapp.com",
    databaseURL: "https://kwitter-cda0a-default-rtdb.firebaseio.com",
    projectId: "kwitter-cda0a",
    storageBucket: "kwitter-cda0a.appspot.com",
    messagingSenderId: "256949763451",
    appId: "1:256949763451:web:7028154c44684a79bb11de"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser(){
    user_name=document.getElementById("user_name").value;
    console.log(user_name);
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding_user"
    });
}