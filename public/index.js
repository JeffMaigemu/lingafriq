
var submitBtn = document.getElementById("submitBtn");

$(document).ready(function(){

    list = ["Kswahili","Hausa","Igbo","Yoruba","khosa","Berom","Tiv","Ngas","Igala","Ibibio","Taroh",
    "Kswahili", "Kikuyu",  "Kamba",
    "Wolof", "Balanta-Ganja",
    "Akuapem Twi", "Asante Twi", "Fante",
    "Oromo", "Amharic", "Tigrinya",
    "Zulu", "Xhosa", "Afrikaans",  
    "African Languages"];
    index = 0;
    intr = setInterval(fancyIterateAndGlow, 100);
   
    function fancyIterateAndGlow()
    { 
       $("#languagesList").html(list[index++]);
       if(index == 26) clearInterval(intr);
    }

    glowPulse("#languagesList", 0, 5, 100, 255, 255, 255);
   });



var db = firebase.firestore();

function submitClick (){

    
  
console.log("hi there, I was clicked");

var email = document.getElementById("email").value;

function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
  

if(emailIsValid == false){

    alert("Email not valid, sorry. PLease check again")

    submitBtn = "false";

}
    else{

        var documente = {
                user: email,
                message: 'Hello friends!',
                posted: firebase.firestore.FieldValue.serverTimestamp()
            };

            var doc = db.collection('chat').doc('documente');

            db.collection('chat').add(documente).then(function(doc) {
                console.log('New chat message was given id: ', doc.id);
            }).catch(function(error) {
                console.error('Error adding chat message: ', error);
            });


    }


    

}

/*function submitClick (){

    console.log("hi there, I was clicked");

    var document = {
        user: 'jason',
        message: 'Hello friends!',
        posted: firebase.firestore.FieldValue.serverTimestamp()
    };

    db.collection('chat').add(document).then(function(docRef) {
        console.log('New chat message was given id: ', docRef.id);
    }).catch(function(error) {
        console.error('Error adding chat message: ', error);
    });


   
} */

function glowPulse(selector, min_radius, max_radius, speed, r, g, b, inc, radius){
    
    inc = inc == null ? 1 : inc;
    radius = radius == null ? min_radius : radius;
    
    if(radius <= min_radius)
        inc = 1;
    else if(radius >= max_radius)
        inc = -1;
    
    $(selector).css("text-shadow", "0px 0px "+radius+"px rgb("+r+","+g+","+b+")");
    setTimeout("glowPulse('"+selector+"',"+[min_radius, max_radius, speed, r, g, b, inc, radius+inc].join(',')+")", speed);

}


