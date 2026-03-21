function acceptContract(){

const checkbox = document.getElementById("agreeTerms");
const status = document.getElementById("status");

if(!checkbox.checked){
status.innerHTML = "Please agree to the contract terms first.";
return;
}

status.innerHTML = "Contract Accepted. Waiting for deposit payment.";

let days = 5;

const timer = document.getElementById("timer");

setInterval(function(){

timer.innerHTML = "Project deadline: " + days + " day(s) remaining";

if(days > 0){
days--;
}

}, 86400000);

}
