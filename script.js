const params = new URLSearchParams(window.location.search);
let plan = params.get("plan");

// default plan if none selected
if(!plan){
plan = "standard";
}

const plans = {

basic: {
name: "Basic",
price: "3,000 – 6,000 KES",
deposit: "3,000 KES",
balance: "Remaining after project completion",
timeline: "2–3 Days"
},

standard: {
name: "Standard",
price: "6,000 – 12,000 KES",
deposit: "4,000 KES",
balance: "Remaining after project completion",
timeline: "4–5 Days"
},

premium: {
name: "Premium",
price: "12,000 – 20,000 KES",
deposit: "6,000 KES",
balance: "Remaining after project completion",
timeline: "5–7 Days"
}

};

const selected = plans[plan];

// Fill contract details
document.getElementById("planName").textContent = selected.name;
document.getElementById("price").textContent = selected.price;
document.getElementById("deposit").textContent = selected.deposit;
document.getElementById("balance").textContent = selected.balance;
document.getElementById("timeline").textContent = selected.timeline;


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
