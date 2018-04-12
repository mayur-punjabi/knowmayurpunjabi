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


