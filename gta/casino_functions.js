// -------------------------------
// DIAMOND CASINO HEIST RANDOMIZER
// -------------------------------

// -------------------------------
// HEIST - APPROACH
// -------------------------------
const approachOptions = [
  "Silent & Sneaky",
  "The Big Con",
  "Aggressive"
];

// -------------------------------
// VAULT / SETUP OPTIONS
// -------------------------------
const vaultContentOptions = ["Cash", "Artwork", "Gold", "Diamonds"];

const entryDisguises = [
  "Gruppe Sechs",
  "Bugstars",
  "Maintenance",
  "NOOSE",
  "Firefighter"
];

const securityOptions = [
  "Low Security",
  "Medium Security",
  "High Security"
];

// -------------------------------
// CREW OPTIONS
// -------------------------------
const driverOptions = [
  "Karim Denz",
  "Taliana Martinez",
  "Eddie Toh",
  "Zach Nelson"
];

const gunmanOptions = [
  "Patrick McReary",
  "Gustavo Mota",
  "Norm Richards",
  "Chester McCoy"
];

const hackerOptions = [
  "Rickie Lukens",
  "Christian Feltz",
  "Paige Harris",
  "Avi Schwartzman"
];

const buyerOptions = [
  "Low Buyer",
  "Medium Buyer",
  "High Buyer"
];

// -------------------------------
// REUSABLE FUNCTIONS
// -------------------------------
function renderCategoryOptions(containerId, list) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  list.forEach((option, index) => {
    const div = document.createElement("div");
    div.className = "flex items-center gap-2 bg-[#383848] border border-gray-700 px-3 py-2 rounded";

    div.innerHTML = `
      <input type="checkbox" id="${containerId}-${index}" value="${option}">
      <label for="${containerId}-${index}">${option}</label>
    `;

    container.appendChild(div);
  });
}

function toggleAll(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const boxes = container.querySelectorAll("input[type='checkbox']");
  const allChecked = [...boxes].every(box => box.checked);

  boxes.forEach(box => box.checked = !allChecked);
}

function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// -------------------------------
// RANDOMIZER
// -------------------------------
function randomizeGTA() {
  const result = [];

  const checkedApproach = document.querySelectorAll("#clothingCategories input:checked");
  checkedApproach.forEach(cat => {
    result.push(`Approach: ${cat.value}`);
  });

  const checkedSetup = document.querySelectorAll("#barberCategories input:checked");
  checkedSetup.forEach(cat => {
    let item = "";

    switch (cat.value) {
      case "Vault Content":
        item = `Vault Content: ${randomChoice(vaultContentOptions)}`;
        break;

      case "Entry Disguise":
        item = `Entry Disguise: ${randomChoice(entryDisguises)}`;
        break;

      case "Security Pass Level":
        item = `Security Level: ${randomChoice(securityOptions)}`;
        break;

      case "Drill or Thermite (optional)":
        item = `Equipment: ${Math.random() > 0.5 ? "Drill" : "Thermite"}`;
        break;
    }

    result.push(item);
  });

  const checkedCrew = document.querySelectorAll("#tattooCategories input:checked");
  checkedCrew.forEach(cat => {
    let item = "";

    switch (cat.value) {
      case "Driver":
        item = `Driver: ${randomChoice(driverOptions)}`;
        break;

      case "Gunman":
        item = `Gunman: ${randomChoice(gunmanOptions)}`;
        break;

      case "Hacker":
        item = `Hacker: ${randomChoice(hackerOptions)}`;
        break;

      case "Buyer Tier":
        item = `Buyer: ${randomChoice(buyerOptions)}`;
        break;
    }

    result.push(item);
  });

  const output = document.getElementById("output");
  output.innerHTML = result.join("<br>");
  document.getElementById("result").classList.remove("hidden");
}

// -------------------------------
// INIT
// -------------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderCategoryOptions("clothingCategories", approachOptions);
  renderCategoryOptions("barberCategories", [
    "Vault Content",
    "Entry Disguise",
    "Security Pass Level",
    "Drill or Thermite (optional)"
  ]);
  renderCategoryOptions("tattooCategories", [
    "Driver",
    "Gunman",
    "Hacker",
    "Buyer Tier"
  ]);

  document.getElementById("selectClothing").addEventListener("click", () => toggleAll("clothingCategories"));
  document.getElementById("selectBarber").addEventListener("click", () => toggleAll("barberCategories"));
  document.getElementById("selectTattoos").addEventListener("click", () => toggleAll("tattooCategories"));

  document.getElementById("randomizeBtn").addEventListener("click", randomizeGTA);
});