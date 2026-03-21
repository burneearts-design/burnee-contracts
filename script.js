const params = new URLSearchParams(window.location.search);
const plan = params.get("plan");

let price;
let deposit;
let balance;
let timeline;
let planName;

if(plan === "basic"){
planName = "Basic Plan";
price = "3,000 – 6,000 KES";
deposit = "2,000 KES";
balance = "Remaining after completion";
timeline = "2 Days";
}

if(plan === "standard"){
planName = "Standard Plan";
price = "6,000 – 12,000 KES";
deposit = "4,000 KES";
balance = "Remaining after completion";
timeline = "5 Days";
}

if(plan === "premium"){
planName = "Premium Plan";
price = "12,000 – 20,000 KES";
deposit = "8,000 KES";
balance = "Remaining after completion";
timeline = "7 Days";
}

document.getElementById("planName").innerText = planName;
document.getElementById("price").innerText = price;
document.getElementById("deposit").innerText = deposit;
document.getElementById("balance").innerText = balance;
document.getElementById("timeline").innerText = timeline;


function acceptContract(){

const checkbox = document.getElementById("agreeTerms");

if(!checkbox.checked){
document.getElementById("status").innerText = "Please agree to the terms first.";
return;
}

document.getElementById("status").innerText =
"Contract accepted. Please send the deposit via M-Pesa.";

}
