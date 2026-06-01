// -------------------------------
// DIAMOND CASINO HEIST RANDOMIZER
// -------------------------------

// -------------------------------
// APPROACHES
// -------------------------------
const approachOptions = [
  "Silent & Sneaky",
  "The Big Con",
  "Aggressive"
];

// -------------------------------
// VAULT CONTENTS
// -------------------------------
const vaultContents = [
  "Cash",
  "Artwork",
  "Gold",
  "Diamonds"
];

// -------------------------------
// CREW
// -------------------------------
const driverOptions = [
  "Karim Denz",
  "Chester McCoy",
  "Taliana Martinez",
  "Eddie Toh",
  "Zach Nelson"
];

const gunmanOptions = [
  "Karl Abolaji",
  "Gustavo Mota",
  "Charlie Reed",
  "Chester McCoy",
  "Patrick McReary"
];

const hackerOptions = [
  "Rickie Lukens",
  "Christian Feltz",
  "Paige Harris",
  "Avi Schwartzman",
  "Yohan Blair"
];

// -------------------------------
// BIG CON DISGUISES
// -------------------------------
const bigConEntries = [
  "Gruppe Sechs",
  "Bugstars",
  "Maintenance",
  "Yung Ancestor"
];

const bigConExits = [
  "NOOSE",
  "Firefighter",
  "Geen exit outfit"
];

// -------------------------------
// ENTRY ROUTES (NON BIG CON)
// -------------------------------
const entryRoutes = {

  "Silent & Sneaky": [
    "Staff Lobby",
    "Basement Tunnel",
    "Roof Terrace"
  ],

  "Aggressive": [
    "Main Door Assault",
    "Roof Breach",
    "Underground Tunnel Blast"
  ]
};

// -------------------------------
// BIG CON ROUTES (linked to disguise)
// -------------------------------
const bigConRoutes = {
  "Gruppe Sechs": "Gruppe Sechs Entry Truck",
  "Bugstars": "Bugstars Van Entry",
  "Maintenance": "Maintenance Tunnel Entry",
  "Yung Ancestor": "VIP Entrance (Yung Ancestor Route)"
};

// -------------------------------
// ALWAYS AVAILABLE PREPS
// -------------------------------
const mandatoryPreps = [
  "Vault Contents",
  "Getaway Vehicles",
  "Hacking Device",
  "Security Passes"
];

const optionalPreps = [
  "Duggan Shipments",
  "Patrol Routes",
  "Power Drills",
  "Masks"
];

// -------------------------------
// APPROACH SPECIFIC PREPS
// -------------------------------
const approachPreps = {

  "Silent & Sneaky": {
    mandatory: [
      "Nano Drones",
      "Vault Lasers"
    ],
    optional: [
      "EMP Device",
      "Infiltration Suits"
    ]
  },

  "The Big Con": {
    mandatory: [
      "Exit Disguises"
    ],
    optional: []
  },

  "Aggressive": {
    mandatory: [
      "Thermal Charges",
      "Vault Explosives"
    ],
    optional: [
      "Reinforced Armor",
      "Tunnel Boring Machine"
    ]
  }
};

// -------------------------------
// HELPER
// -------------------------------
function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// -------------------------------
// RANDOMIZER
// -------------------------------
function randomizeGTA() {

  const result = [];

  const approach = randomChoice(approachOptions);

  let entryRoute = "";
  let entryDisguise = null;

  result.push(`<h3><b>🎯 Approach</b></h3>`);
  result.push(approach);
  result.push("");

  // ---------------------------
  // VAULT CONTENT
  // ---------------------------
  result.push(`<h3><b>💰 Vault Contents</b></h3>`);
  result.push(randomChoice(vaultContents));
  result.push("");

  // ---------------------------
  // CREW
  // ---------------------------
  result.push(`<h3><b>👥 Crew</b></h3>`);
  result.push(`Driver: ${randomChoice(driverOptions)}`);
  result.push(`Gunman: ${randomChoice(gunmanOptions)}`);
  result.push(`Hacker: ${randomChoice(hackerOptions)}`);
  result.push("");

  // ---------------------------
  // BIG CON
  // ---------------------------
  if (approach === "The Big Con") {

    entryDisguise = randomChoice(bigConEntries);
    const exitDisguise = randomChoice(bigConExits);

    entryRoute = bigConRoutes[entryDisguise];

    result.push("<h3><b>🎭 Disguises</b></h3>");
    result.push(`Entry Disguise: ${entryDisguise}`);
    result.push(`Entry Route: ${entryRoute}`);

    result.push(`Exit: ${
      exitDisguise === "Geen exit outfit"
        ? "No outfit change (use current outfit)"
        : exitDisguise
    }`);

    result.push("");
  }

  // ---------------------------
  // NON BIG CON ROUTE
  // ---------------------------
  if (approach !== "The Big Con") {

    entryRoute = randomChoice(entryRoutes[approach]);

    result.push(`<h3><b>🚪 Entry Route</b></h3>`);
    result.push(entryRoute);
    result.push("");
  }

  // ---------------------------
  // PREPS
  // ---------------------------
  result.push(`<h3><b>📋 Verplichte Preps</b></h3>`);

  mandatoryPreps.forEach(prep => {
    result.push(`✅ ${prep}`);
  });

  approachPreps[approach].mandatory.forEach(prep => {
    result.push(`✅ ${prep}`);
  });

  if (approach === "The Big Con" && entryDisguise) {
    result.push(`✅ ${entryDisguise} Gear`);
  }

  result.push("");

  result.push(`<h3><b>📦 Optionele Preps</b></h3>`);

  optionalPreps.forEach(prep => {
    result.push(Math.random() > 0.5 ? `✔️ ${prep}` : `❌ ${prep}`);
  });

  approachPreps[approach].optional.forEach(prep => {
    result.push(Math.random() > 0.5 ? `✔️ ${prep}` : `❌ ${prep}`);
  });

  result.push("");

  // ---------------------------
  // OUTPUT
  // ---------------------------
  document.getElementById("output").innerHTML = result.join("<br>");
  document.getElementById("result").classList.remove("hidden");
}

// -------------------------------
// INIT
// -------------------------------
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("randomizeBtn").addEventListener("click", randomizeGTA);
});