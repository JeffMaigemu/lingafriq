var email = document.getElementById("email");
var submitBtn = document.getElementById("submitBtn");

function submitClick (){

    console.log("hi there, I was clicked");

    let firebaseRef = this.database().ref();

    firebaseRef.child("email").set("Some Value");
}