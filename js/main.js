//var ctype = navigator.connection.effectiveType;
//console.log(ctype);
//document.querySelector("#notch").innerText = ctype;



var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
var ctype = connection.type;
console.log(ctype);
document.querySelector("#notch").innerText = ctype;
function updateConnectionStatus() {
  console.log("Connection type changed from " + ctype + " to " + connection.type);
}

connection.addEventListener('change', updateConnectionStatus);


navigator.getBattery().then(function(battery) {
       
    

    console.log(battery.level);
});

var d = new Date(); // for now
console.log(d.getHours()); // => 9
console.log(d.getMinutes()); // =>  30
d.getSeconds(); // => 51