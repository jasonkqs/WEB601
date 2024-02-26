function currentTime() {
  var d = new Date();
  var hr = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  var ampm;

  if (sec < 10) {
    sec = "0" + sec;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (hr == 12) {
    ampm = "PM";
  } else if (hr > 12) {
    hr -= "12";
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  var time = hr + ":" + min + ":" + sec + " " + ampm;
  document.getElementById("clock").innerText = time;
  var utchr = d.getUTCHours();
  var timeDiff = hr - utchr;
  var adjTimeDiff = timeDiff < 0 ? -timeDiff : timeDiff;
  var timeZone;
  if (timeDiff == 0) {
    timeZone = "GMT";
  } else if (timeDiff < 0) {
    timeZone = "GMT+" + adjTimeDiff;
  } else {
    timeZone = "GMT-" + adjTimeDiff;
  }
  time += " " + timeZone;

  document.getElementById("clock").innerText = time;
  setTimeout(currentTime, 1000);
}
currentTime();
