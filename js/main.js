var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
var ctype = connection.effectiveType;
console.log(ctype);
var notch = document.querySelector("#notch");

if(ctype == "wifi"){
    document.querySelector(".fa-wifi").style.visibility="visible";
}
if(ctype == "bluetooth"){
    document.querySelector(".fa-bluetooth-b").style.visibility="visible";
}

navigator.getBattery().then(function(battery) {
    document.querySelector("#battery").innerHTML = battery.level * 100 + " %";
});

var d = new Date();
document.querySelector("#date").innerHTML = d.getHours() + " : " + d.getMinutes();
