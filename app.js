window.onload = () => {
  let seconds = 00;
  let tens = 00;
  let appendTens = document.getElementById("tens");
  let appendSeconds = document.getElementById("seconds");
  let buttonStart = document.getElementById("button-start");
  let buttonStop = document.getElementById("button-stop");
  let buttonReset = document.getElementById("button-reset");
  let Interval;

  buttonStart.onclick = () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = () => {
    clearInterval(Interval);
  };

  buttonReset.onclick = () => {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
  };

  function startTimer() {
    tens++;
    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }
    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + tens;
    }
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
};
