// PLAN CONTENT (EXTRA UI DATA)
const planContent = {
  basic: {
    title: "Basic Website Package",
    desc: "Simple and affordable website for small businesses.",
    features: [
      "✔ 1–3 Page Website",
      "✔ Clean & Simple Design",
      "✔ Mobile Friendly",
      "✔ Fast Delivery (3 Days)"
    ],
    terms: [
      "Deposit required before work begins.",
      "Balance paid after completion.",
      "Timeline starts after deposit.",
      "Revisions allowed within scope."
    ]
  },

  standard: {
    title: "Standard Website Package",
    desc: "Perfect balance of affordability and performance.",
    features: [
      "✔ 3–5 Page Website",
      "✔ Fully Responsive",
      "✔ Contact Form",
      "✔ Light Animations",
      "✔ Delivered in 5 Days"
    ],
    terms: [
      "Deposit required before work begins.",
      "Balance paid after completion.",
      "Timeline starts after deposit.",
      "Includes contact form & responsive design."
    ]
  },

  premium: {
    title: "Premium Website Package",
    desc: "High-end custom website for serious businesses.",
    features: [
      "✔ 5–10 Pages",
      "✔ Advanced UI & Animations",
      "✔ SEO Optimization",
      "✔ High Performance",
      "✔ Delivered in 7 Days"
    ],
    terms: [
      "Deposit required before development.",
      "Balance after completion.",
      "Includes SEO & advanced design.",
      "Extra features may cost more."
    ]
  }
};

// APPLY TO PAGE
const content = planContent[plan] || planContent.standard;

// HERO
setText("heroTitle", content.title);
setText("heroDesc", content.desc);
setText("planSubtitle", content.title + " Agreement");

// FEATURES
const featuresBox = document.getElementById("heroFeatures");
if (featuresBox) {
  featuresBox.innerHTML = content.features.map(f => `<p>${f}</p>`).join("");
}

// TERMS
const termsBox = document.getElementById("termsList");
if (termsBox) {
  termsBox.innerHTML = content.terms.map(t => `<li>${t}</li>`).join("");
}
