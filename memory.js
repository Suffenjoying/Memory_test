const countdown = document.getElementById("countdown");
const ready = document.getElementById("ready");

var timeleft = 20;
var downloadTimer = setInterval(function () {
  if (timeleft <= 0) {
    clearInterval(downloadTimer);
    countdown.innerHTML = "Press I'm ready!";
    ready.classList.add("blink");
  } else {
    countdown.innerHTML = timeleft + "s";
  }
  timeleft -= 1;
}, 1000);
