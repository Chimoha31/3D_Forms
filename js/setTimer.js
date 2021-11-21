"use strict";

var start;
var timer_id;

document.getElementById("start_stop").addEventListener("click", function () {
  if (this.innerHTML === "START") {
    start = new Date();

    timer_id = setInterval(goTimer, 10);

    this.innerHTML = "STOP";
  } else {
   clearInterval(timer_id);

    this.innerHTML = 'START';
  }
});

const addZero = function (value) {
  if (value < 10) {
    value = "0" + value;
  }

  return value;
};

var goTimer = function () {
  var now = new Date();

  var milli = now.getTime() - start.getTime();
  var seconds = Math.floor(milli / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);

  seconds = seconds - minutes * 60;
  minutes = minutes - hours * 60;

  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);

  document.getElementById("timer").innerHTML =
    hours + ":" + minutes + ":" + seconds;
};