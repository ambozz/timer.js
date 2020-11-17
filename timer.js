var timer = {

pattern: "%h:%m:%s",
alwaysTwoDigits: true,
textID: "id",
defaultTimeText: "00:00:00",
seconds: 0,
minutes: 0,
hours: 0,
secondsSTRING: "",
minutesSTRING: "",
hoursSTRING: "",
running: false,
interval: null,
start: function(patternSET, textIDSET, twoDigits, defaultTimeTextSET) {
timer.reset();
timer.pattern = patternSET;
timer.alwaysTwoDigits = twoDigits;
timer.textID = textIDSET;
if(defaultTimeTextSET){
    timer.defaultTimeText = defaultTimeTextSET;
}
timer.running = true;
console.log("Timer: Starting");
timer.tick();
timer.interval = setInterval(function(){
    if(timer.running){
        timer.tick(); 
    }
}, 1000);
},
pause: function() {
console.log("Timer: Paused");
timer.running = false;
},
resume: function() {
console.log("Timer: Resumed");
timer.running = true;
},
stop: function() {
console.log("Timer: Stopped");
timer.running = false;
timer.reset();
},
reset: function() {
console.log("Timer: Reset");
document.getElementById(timer.textID).innerHTML = timer.defaultTimeText;
timer.defaultTimeText= "00:00:00";
timer.pattern= "%h:%m:%s";
timer.alwaysTwoDigits= true;
timer.textID= "id";
timer.seconds= 0;
timer.minutes= 0;
timer.hours= 0;
timer.secondsSTRING= "";
timer.minutesSTRING= "";
timer.hoursSTRING= "";
timer.running= false;
clearInterval(timer.interval);
},
tick: function() {
console.log("Timer: Tick");
if(timer.alwaysTwoDigits){
    if(timer.seconds < 10){
        timer.secondsSTRING = "0" + timer.seconds.toString();
    }else{
        timer.secondsSTRING = timer.seconds.toString();
    }
    if(timer.minutes < 10){
        timer.minutesSTRING = "0" + timer.minutes.toString();
    }else{
        timer.minutesSTRING = timer.minutes.toString();
    }
    if(timer.hours < 10){
        timer.hoursSTRING = "0" + timer.hours.toString();
    }else{
        timer.hoursSTRING = timer.hours.toString();
    }
}


let _timer = timer.pattern.replace("%h", timer.hoursSTRING).replace("%m", timer.minutesSTRING).replace("%s", timer.secondsSTRING);

document.getElementById(timer.textID).innerHTML = _timer;

timer.seconds++;
if(timer.seconds == 60){
    timer.seconds = 0;
    timer.minutes++;
}
if(timer.minutes == 60){
    timer.minutes = 0;
    timer.hours++;
}
}

};