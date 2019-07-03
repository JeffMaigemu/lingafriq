var email = document.getElementById("email");
var submitBtn = document.getElementById("submitBtn");

function submitClick (){

    var firebaseRef = firebase.database().ref();

    firebaseRef.child("email").set("Some Value");
}