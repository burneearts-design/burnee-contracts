document.addEventListener("DOMContentLoaded", () => {

  // GET PLAN FROM URL
  const params = new URLSearchParams(window.location.search);
  const plan = (params.get("plan") || "standard").trim().toLowerCase();

  // PLAN DATA
  const plans = {
    basic: { name: "Basic Plan", price: "$39 USD", deposit: "$20 USD", balance: "$19 USD", timeline: "3 Days" },
    standard: { name: "Standard Plan", price: "$77 USD", deposit: "$39 USD", balance: "$38 USD", timeline: "5 Days" },
    premium: { name: "Premium Plan", price: "$115 USD", deposit: "$59 USD", balance: "$56 USD", timeline: "7 Days" }
  };

  const selected = plans[plan] || plans.standard;

  // PLAN CONTENT (HERO & TERMS)
  const planContent = {
    basic: {
      title: "Basic Website Package",
      desc: "Simple and affordable website for small businesses.",
      features: ["✔ 1–3 Page Website", "✔ Clean & Simple Design", "✔ Mobile Friendly", "✔ Fast Delivery (3 Days)"],
      terms: ["Deposit required before work begins.", "Balance paid after completion.", "Timeline starts after deposit.", "Revisions allowed within scope."]
    },
    standard: {
      title: "Standard Website Package",
      desc: "Perfect balance of affordability and performance.",
      features: ["✔ 3–5 Page Website", "✔ Fully Responsive", "✔ Contact Form", "✔ Light Animations", "✔ Delivered in 5 Days"],
      terms: ["Deposit required before work begins.", "Balance paid after completion.", "Timeline starts after deposit.", "Includes contact form & responsive design."]
    },
    premium: {
      title: "Premium Website Package",
      desc: "High-end custom website for serious businesses.",
      features: ["✔ 5–10 Pages", "✔ Advanced UI & Animations", "✔ SEO Optimization", "✔ High Performance", "✔ Delivered in 7 Days"],
      terms: ["Deposit required before development.", "Balance after completion.", "Includes SEO & advanced design.", "Extra features may cost more."]
    }
  };

  const content = planContent[plan] || planContent.standard;

  // FILL CONTRACT DETAILS
  const setText = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };
  setText("planName", selected.name);
  setText("price", selected.price);
  setText("deposit", selected.deposit);
  setText("balance", selected.balance);
  setText("timeline", selected.timeline);

  setText("heroTitle", content.title);
  setText("heroDesc", content.desc);
  setText("planSubtitle", content.title + " Agreement");

  const featuresBox = document.getElementById("heroFeatures");
  if (featuresBox) featuresBox.innerHTML = content.features.map(f => `<p>${f}</p>`).join("");

  const termsBox = document.getElementById("termsList");
  if (termsBox) termsBox.innerHTML = content.terms.map(t => `<li>${t}</li>`).join("");

  // ACCEPT CONTRACT & OPEN WHATSAPP
  window.acceptContract = function () {
    const checkbox = document.getElementById("agreeTerms");
    const status = document.getElementById("status");

    if (!checkbox?.checked) {
      if (status) status.textContent = "Please agree to the contract terms first.";
      return;
    }

    if (status) status.textContent = "Opening WhatsApp...";

    const phone = "254708453353";
    const message = encodeURIComponent(
      `Hello Burnee, I have selected the ${selected.name} and I am ready to proceed with the deposit.`
    );

    window.location.href = `https://wa.me/${phone}?text=${message}`;
  };
});
