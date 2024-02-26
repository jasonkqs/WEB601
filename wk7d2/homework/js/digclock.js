function currentTime() {
  var d = new Date();
  var hr = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  var ampm;

  if (sec < 10) {
    sec = "0" + sec;
  }
  if (min < "10") {
    min = "0" + min;
  }
  if (hr == 12) {
    ampm = "PM";
  } else if (hr > 12) {
    hr -= 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }
  var time = hr + ":" + min + ":" + sec + " " + ampm;
  document.getElementById("clock").innerText = time;
  setInterval(currentTime, 1000);
}
currentTime();
{
  var utchr = new Date().getUTCHours();
  var localOffset = -8;
  var localHour = utchr + localOffset;

  function convertGMTtoStandardTime(gmtHours) {
    var period = gmtHours < 12 ? "AM" : "PM";
    var adjustedHours = gmtHours % 12 || 12;
    return adjustedHours + ":00 " + period;
  }

  var timeDiff = localHour - utchr;
  var adjTimeDiff = Math.abs(timeDiff);
  var timeZone;
  if (timeDiff === 0) {
    timeZone = "GMT";
  } else if (timeDiff === -5) {
    timeZone = "ET";
  } else if (timeDiff === -6) {
    timeZone = "CT";
  } else if (timeDiff === -7) {
    timeZone = "MT";
  } else if (timeDiff === -8) {
    timeZone = "PT";
  }

  var assemblyTimeFormat =
    convertGMTtoStandardTime(utchr) + " (" + timeZone + ")";
  console.log(assemblyTimeFormat);
}
