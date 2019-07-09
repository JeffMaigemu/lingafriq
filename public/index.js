$(document).ready(function(){
    list = ["Kswahili","Hausa","Igbo","Yoruba","khosa","Berom","Tiv","Ngas","Igala","Ibibio","Taroh","African Languages"];
    index = 0;
    intr = setInterval(yourfun, 100);
   
    function yourfun()
    { 
       $("#languagesList").html(list[index++]);
       if(index == 12) clearInterval(intr);
    }
   });

var email = document.getElementById("email");
var submitBtn = document.getElementById("submitBtn");

function submitClick (){

    console.log("hi there, I was clicked");

    let firebaseRef = this.database().ref();

    firebaseRef.child("email").set("Some Value");
}

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

glowPulse("#languagesList", 0, 5, 100, 255, 255, 255);