var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
var ctype = connection.effectiveType;
var notch = document.querySelector("#notch");

if(ctype == "wifi"){
    document.querySelector(".fa-wifi").style.visibility="visible";
}
if(ctype == "bluetooth"){
    document.querySelector(".fa-bluetooth-b").style.visibility="visible";
}

var myVar = setInterval(myTimer, 1000);
function myTimer() {
    navigator.getBattery().then(function(battery) {
        document.querySelector("#battery").innerHTML = Math.floor(battery.level * 100) + "%";
    });

    var d = new Date();
    if(d.getMinutes() < 10){
        document.querySelector("#date").innerHTML = d.getHours() + " : 0" + d.getMinutes();
    }
    else{
        document.querySelector("#date").innerHTML = d.getHours() + " : " + d.getMinutes();
    }
}


