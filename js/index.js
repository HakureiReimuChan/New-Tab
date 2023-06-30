`use strict`
function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;
  }
    setInterval(refreshTime, 200)

var datetime = new Date().toLocaleString();
console.log(datetime);
document.getElementById("time").textContent = datetime;
