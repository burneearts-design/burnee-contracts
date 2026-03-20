function acceptContract(){

localStorage.setItem("contractAccepted","true");

document.getElementById("status").innerHTML =
"<h3>Contract Accepted</h3><p>Please pay the deposit to begin the project.</p>";

startTimer();

}

function startTimer(){

let startDate = new Date();

localStorage.setItem("contractStart",startDate);

updateTimer();

setInterval(updateTimer,1000);

}

function updateTimer(){

let start = new Date(localStorage.getItem("contractStart"));

let now = new Date();

let diff = now - start;

let days = Math.floor(diff / (1000*60*60*24));

let hours = Math.floor(diff / (1000*60*60));

document.getElementById("timer").innerHTML =
"<p>Contract Running: " + days + " days (" + hours + " hours)</p>";

}
