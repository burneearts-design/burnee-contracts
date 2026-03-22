document.addEventListener("DOMContentLoaded", () => {

  // GET PLAN FROM URL (SAFE)
  const params = new URLSearchParams(window.location.search);
  let planParam = params.get("plan");

  // CLEAN PLAN VALUE
  const plan = planParam ? planParam.trim().toLowerCase() : "standard";

  console.log("Selected plan from URL:", plan); // DEBUG

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

  // SELECT PLAN OR FALLBACK
  const selected = plans[plan] || plans.standard;

  console.log("Final plan used:", selected.name); // DEBUG

  // SAFE TEXT SETTER
  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  // FILL CONTRACT DETAILS
  setText("planName", selected.name);
  setText("price", selected.price);
  setText("deposit", selected.deposit);
  setText("balance", selected.balance);
  setText("timeline", selected.timeline);

  // ACCEPT CONTRACT FUNCTION (GLOBAL)
  window.acceptContract = function () {
    const checkbox = document.getElementById("agreeTerms");
    const status = document.getElementById("status");

    if (!checkbox || !checkbox.checked) {
      if (status) status.textContent = "Please agree to the contract terms first.";
      return;
    }

    if (status) status.textContent = "Opening WhatsApp...";

    const phone = "254708453353";

    const message = encodeURIComponent(
      `Hello Burnee, I have selected the ${selected.name} and I am ready to proceed with the deposit.`
    );

    // OPEN WHATSAPP
    window.location.href = `https://wa.me/${phone}?text=${message}`;
  };

  // HAMBURGER MENU
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }

});
