//div with a id of clock
let clock = () => {
  let date = new Date();
  let todayDate = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs >= 12) {
    hrs = hrs - 12;
    period = "PM";
  }
  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `${hrs}:${mins}:${secs}:${period} \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 Date: ${todayDate}/${month+1}/${year}`;
  document.getElementById("clock").innerText = time;
  setTimeout(clock, 1000);
};

clock();
