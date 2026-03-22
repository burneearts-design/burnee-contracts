// GET PLAN FROM URL
const params = new URLSearchParams(window.location.search);
let plan = params.get("plan") || "standard";

// PLAN DATA
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

// FALLBACK SAFETY
const selected = plans[plan] || plans.standard;

// FILL CONTRACT DETAILS (SAFE CHECK)
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

setText("planName", selected.name);
setText("price", selected.price);
setText("deposit", selected.deposit);
setText("balance", selected.balance);
setText("timeline", selected.timeline);

// ACCEPT CONTRACT
function acceptContract() {
  const checkbox = document.getElementById("agreeTerms");
  const status = document.getElementById("status");

  if (!checkbox || !checkbox.checked) {
    if (status) {
      status.innerText = "Please agree to the contract terms first.";
    }
    return;
  }

  if (status) {
    status.innerText = "Contract accepted. Opening WhatsApp...";
  }

  const phone = "254708435303";

  const message = encodeURIComponent(
    `Hello Burnee, I have accepted the ${selected.name} and I am ready to proceed with the deposit.`
  );

  window.location.href = `https://wa.me/${phone}?text=${message}`;
}

// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// TOGGLE MENU
if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
}

// AUTO CLOSE MENU WHEN LINK CLICKED
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger?.classList.remove("active");
    navLinks?.classList.remove("active");
  });
});
