//First the you get the elements and put them in an variable.
var Img = document.getElementById("Image");
var TimeandDate = document.getElementById("TimeAndDate")

//function that get's the current time.
function GetTime(){   
    //Getting the current time
    var newDate = new Date();
    var Time = newDate.toLocaleTimeString();
    var currentTime = newDate.getHours();

    //Displaying time
    TimeandDate.innerHTML = Time;

    //With these if statemnts the time is checked to see wich picture will
    //be displayed. I need to come back to this to code it better.
    if(currentTime >= "8" && currentTime < "9") {
        Img.src="img/coffee.png";
    }

    else if(currentTime >= "9" && currentTime < "12") {
        Img.src="img/graduation-hat.png";
    }

    else if(currentTime >= "12" && currentTime < "13") {
        Img.src="img/take-away.png";
    }

    else if(currentTime >= "13" && currentTime < "16") {
        Img.src="img/graduation-hat.png";
    }

    else if(currentTime >= "16" && currentTime < "18") {
        Img.src="img/study.png";
    }

    else if(currentTime >= "18" && currentTime < "19") {
        Img.src="img/eat.png";
    }

    else if(currentTime >= "19" && currentTime < "23") {
        Img.src="img/joystick.png";
    }

    else {
        Img.src="img/moon.png";
    }
}
//refresh time every second.
setInterval(GetTime, 1000);