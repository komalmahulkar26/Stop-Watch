console.log('working');
window.onload = function () {
  let second = 00;
  tens = 00;
  let appendTens = document.getElementById('tens');
  let appendSecond = document.getElementById('second');
  let buttonstart = document.getElementById('start--btn');
  let buttonStop = document.getElementById('stop--btn');
  let buttonReset = document.getElementById('reset--btn');
  let interval;
  buttonstart.onclick = function () {
    clearInterval(interval);
    interval = setInterval(starttimer, 10);
  };
  buttonStop.onclick = function () {
    clearInterval(interval);
  };
  buttonReset.onclick = function () {
    clearInterval(interval);
    tens = '00';
    second = '00';
    appendTens.innerHTML = tens;
    appendSecond.innerHTML = second;
  };
  function starttimer() {
    tens++;
    if (tens <= 9) {
      appendTens.innerHTML = tens;
    }
    if (tens > 9) {
      appendTens.innerhtml = tens;
    }
    if (tens > 99) {
      console.log('second');
      second++;
      appendSecond.innerHTML = '0' + second;
      tens = 0;
      appendTens.innerHTML = '0' + 0;
    }
    if (second > 9) {
      appendSecond.innerHTML = second;
    }
  }
};
