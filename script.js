const params = new URLSearchParams(window.location.search);
let plan = params.get("plan");

// default plan if none selected
if (!plan) {
plan = "standard";
}

const plans = {

basic: {
name: "Basic Plan",
price: "$39 USD",
deposit: "$20 USD",
balance: "$19 USD",
timeline: "3 Days"
},

standard: {
name: "Standard Plan",
price: "$78 USD",
deposit: "$39 USD",
balance: "$39 USD",
timeline: "5 Days"
},

premium: {
name: "Premium Plan",
price: "$117 USD",
deposit: "$59 USD",
balance: "$58 USD",
timeline: "7 Days"
}

};

const selected = plans[plan];

// Fill contract details
document.getElementById("planName").textContent = selected.name;
document.getElementById("price").textContent = selected.price;
document.getElementById("deposit").textContent = selected.deposit;
document.getElementById("balance").textContent = selected.balance;
document.getElementById("timeline").textContent = selected.timeline;


// Accept contract
function acceptContract(){

const checkbox = document.getElementById("agreeTerms");

if(!checkbox.checked){
document.getElementById("status").innerText =
"Please agree to the contract terms first.";
return;
}

document.getElementById("status").innerText =
"Contract accepted. Opening WhatsApp...";

const phone = "254708435303";

const message = encodeURIComponent(
`Hello Burnee, I have accepted the ${selected.name} and I am ready to proceed with the deposit.`
);

window.location.href = `https://wa.me/${phone}?text=${message}`;

}
