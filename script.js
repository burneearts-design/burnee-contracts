const params = new URLSearchParams(window.location.search);
let plan = params.get("plan");

// Default plan if none selected
if (!plan) {
plan = "standard";
}

const plans = {

basic: {
name: "Basic Plan",
price: 6000,
timeline: "2 Days"
},

standard: {
name: "Standard Plan",
price: 8000,
timeline: "5 Days"
},

premium: {
name: "Premium Plan",
price: 15000,
timeline: "7 Days"
}

};

const selectedPlan = plans[plan];

// Calculate deposit (50%)
const deposit = selectedPlan.price / 2;
const balance = selectedPlan.price - deposit;

// Fill contract
document.getElementById("planName").textContent = selectedPlan.name;
document.getElementById("price").textContent = selectedPlan.price + " KES";
document.getElementById("deposit").textContent = deposit + " KES";
document.getElementById("balance").textContent = balance + " KES";
document.getElementById("timeline").textContent = selectedPlan.timeline;


// Accept contract function

function acceptContract(){

const checkbox = document.getElementById("agreeTerms");

if(!checkbox.checked){
document.getElementById("status").innerText =
"Please agree to the contract terms first.";
return;
}

document.getElementById("status").innerText =
"Contract accepted. Please send the deposit via M-Pesa.";

}
