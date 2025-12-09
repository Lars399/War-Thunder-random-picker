// -------------------------------
// KLEDINGWINKEL
// -------------------------------
const clothingStoreOptions = [
  "Broek",
  "Shirt/Trui",
  "Schoenen",
  "Petten/Helmen",
  "Brillen",
  "Accessoires"
];

const clothingStoreItems = {
  Broek: [
    { name: "Jeans", count: 103 },
    { name: "Work pants", count: 16 },
    { name: "Shorts", count: 108 },
    { name: "Cargo pants", count: 45 },
    { name: "Sport pants", count: 104 },
    { name: "Suit pants", count: 69 },
    { name: "Chinos", count: 65 },
    { name: "Sport shorts", count: 45 },
    { name: "Team pants", count: 5 },
    { name: "Utility pants", count: 38 },
    { name: "Leather pants", count: 43 },
    { name: "Fitted suit pants", count: 35 },
    { name: "Overalls", count: 36 },
    { name: "Arena war pants", count: 52 },
    { name: "Designer sports pants", count: 81 },
    { name: "Designer jeans", count: 44 },
    { name: "Jogging pants", count: 26 },
    { name: "Tie-dye shorts", count: 10 },
    { name: "Animal print shorts", count: 10 }
  ],
  "Shirt/Trui": [
    { name: "Labels", count: 17 },
    { name: "Arena war tops apocalyptic", count: 32 },
    { name: "Arena war tops Future shock", count: 18 },
    { name: "Arena war tops Nightmare", count: 115 },
    { name: "Suit jackets", count: 80 },
    { name: "Fitted suit jackets", count: 34 },
    { name: "Leather jackets", count: 73 },
    { name: "Denim jackets", count: 26 },
    { name: "Biker cuts", count: 91 },
    { name: "Biker jackets", count: 70 },
    { name: "Vinyl cuts", count: 12 },
    { name: "Vinyl jackets", count: 12 },
    { name: "Racing jackets", count: 73 },
    { name: "Smart jackets", count: 14 },
    { name: "Work jackets", count: 61 },
    { name: "Tactical jackets", count: 79 },
    { name: "Bomber jackets", count: 72 },
    { name: "Leather bomber jackets", count: 19 },
    { name: "Sports jackets", count: 94 },
    { name: "Designer sports jackets", count: 43 },
    { name: "Track jackets", count: 53 },
    { name: "Baseball jackets", count: 41 },
    { name: "Overcoats", count: 65 },
    { name: "Overcoat blazers", count: 49 },
    { name: "Loungewear", count: 34 },
    { name: "Securoserv tops", count: 4 },
    { name: "Festive tops sweaters", count: 4 },
    { name: "Special tops arcade", count: 2 },
    { name: "Special tops DJs", count: 4 },
    { name: "Special tops fame or shame", count: 21 },
    { name: "Special tops seasonal", count: 5 },
    { name: "Special tops unlocks", count: 14 },
    { name: "T-shirts", count: 78 },
    { name: "Rolled sleeve t-shirts", count: 27 },
    { name: "Gunrunning t-shirts", count: 21 },
    { name: "Biek t-shirts", count: 44 },
    { name: "Work t-shirts", count: 10 },
    { name: "Sports t-shirts", count: 48 },
    { name: "Designer t-shirts", count: 69 },
    { name: "Anime t-shirts", count: 12 },
    { name: "Animal print t-shirts", count: 11 },
    { name: "Shirts", count: 90 },
    { name: "Party shirts", count: 120 },
    { name: "Sleeveless shirts", count: 27 },
    { name: "Service shirts", count: 69 },
    { name: "Tucked service shirts", count: 36 },
    { name: "Work shirts", count: 76 },
    { name: "Hoodies", count: 88 },
    { name: "Designer hoodies", count: 88 },
    { name: "Anime hoodies", count: 11 },
    { name: "Tie dye hoodies", count: 11 },
    { name: "Racing jerseys", count: 17 },
    { name: "Sweaters", count: 94 },
    { name: "V neck sweaters", count: 58 },
    { name: "Work sweaters", count: 20 },
    { name: "Sports sweaters", count: 35 },
    { name: "Cardigans", count: 52 },
    { name: "Tank tops", count: 36 },
    { name: "Baseball tees", count: 16 },
    { name: "Polo shirts", count: 55 },
    { name: "Tucked polo shirts", count: 17 },
    { name: "Sports tops", count: 42 },
    { name: "Vests", count: 37 },
    { name: "Vest shirts", count: 28 },
    { name: "Business shirts", count: 72 },
    { name: "Office shirts", count: 20 },
    { name: "Suit vests", count: 23 },
    { name: "Utility tops", count: 39 },
    { name: "Utility vests", count: 76 }
  ],
  Schoenen: [
    { name: "Boots", count: 116 },
    { name: "Sneakers", count: 37 },
    { name: "Skate shoes", count: 17 },
    { name: "Canvas shoes", count: 71 },
    { name: "Flip-flops", count: 42 },
    { name: "Loafers", count: 19 },
    { name: "Boat shoes", count: 17 },
    { name: "Running shoes", count: 30 },
    { name: "Sports shoes", count: 75 },
    { name: "Smart shoes", count: 88 },
    { name: "Sandals", count: 3 },
    { name: "Slip-ons", count: 11 },
    { name: "Rubberized boots", count: 53 },
    { name: "Arena war shoes", count: 48 },
    { name: "Motorcycle boots", count: 29 },
    { name: "Ugglies", count: 121 },
    { name: "Designer sneakers", count: 60 },
    { name: "Slippers", count: 27 },
    { name: "Winter boots", count: 27 }
  ],
  Brillen: [
    { name: "Professional glasses", count: 23 },
    { name: "Sports Glasses", count: 58 },
    { name: "Casual Glasses", count: 117 },
    { name: "Aviator Glasses", count: 23 },
    { name: "Hipster Glasses", count: 34 },
    { name: "High end Glasses", count: 68 },
    { name: "Gun range Glasses", count: 12 },
    { name: "Special Glasses", count: 4 },
    { name: "Designer Glasses", count: 73 }
  ],
  "Petten/Helmen": [
    { name: "Labels", count: 7 },
    { name: "Beanies", count: 102 },
    { name: "Canvas hats", count: 100 },
    { name: "Cap forward", count: 93 },
    { name: "Cap backward", count: 26 },
    { name: "Flat caps", count: 35 },
    { name: "Military caps", count: 43 },
    { name: "Trilbies", count: 51 },
    { name: "Pork pie hats", count: 19 },
    { name: "Fedoras", count: 24 },
    { name: "Cowboy hats", count: 10 },
    { name: "Berets", count: 46 },
    { name: "Bandanas", count: 16 },
    { name: "Headphones", count: 9 },
    { name: "Ear defenders", count: 9 },
    { name: "Helmets", count: 87 },
    { name: "SA flight school hats", count: 10 },
    { name: "Bulletproof helmets", count: 6 },
    { name: "SecuroServ caps", count: 3 },
    { name: "Biker helmets", count: 30 },
    { name: "Combat helmets", count: 89 },
    { name: "Flight helmets", count: 47 },
    { name: "Riot helmets", count: 37 },
    { name: "Arena war helmets", count: 43 },
    { name: "Diamond casino heist", count: 59 },
    { name: "Designer caps forward", count: 58 },
    { name: "Designer caps backward", count: 58 },
    { name: "Trucker caps forward", count: 54 },
    { name: "Trucker caps backward", count: 54 },
    { name: "Career progress caps forward", count: 8 },
    { name: "Career progress caps backward", count: 8 },
    { name: "Seasonal", count: 5 },
    { name: "Party hats", count: 6 },
    { name: "Sun hats", count: 5 },
    { name: "Animal print caps", count: 21 }
  ],
  Accessoires: [
    { name: "Chains", count: 106 },
    { name: "Earrings both", count: 35 },
    { name: "Earrings left", count: 33 },
    { name: "Earrings right", count: 33 },
    { name: "Scarves", count: 16 },
    { name: "Ties", count: 66 },
    { name: "Necklaces", count: 14 },
    { name: "Watches", count: 68 },
    { name: "Gloves", count: 62 },
    { name: "Cuffs", count: 97 },
    { name: "Earphones", count: 0 },
    { name: "Career progress necklaces", count: 2 }
  ]
};

// -------------------------------
// KAPPER
// -------------------------------
const barberOptions = [
  "Haar",
  "HaarKleur",
  "Baard",
  "BaardKleur",
  "Wenkbrauwen",
  "WenkbrauwenKleur",
  "Borst haar",
  "BorstHaarKleur",
  "Contactlenzen",
  "Gezicht verf",
  "Make-up (Ogen)",
  "Make-up (Lipstick)"
];

const barberVariants = {
  Haar: 45,
  HaarKleur: 48,
  Baard: 30,
  BaardKleur: 48,
  Wenkbrauwen: 35,
  WenkbrauwenKleur: 48,
  BorstHaar: 18,
  BorstHaarKleur: 48,
  Contactlenzen: 32,
  GezichtVerf: 62,
  MakeUpOgen: 26,
  MakeUpLipstick: 11
};

// -------------------------------
// TATTOO SHOP
// -------------------------------
const tattooShopOptions = [
  "Hoofd",
  "Borst",
  "Rug",
  "Linkerarm",
  "Rechterarm",
  "Linkerbeen",
  "Rechterbeen"
];

const tattooVariants = {
  Hoofd: 72,
  Borst: 104,
  Rug: 56,
  Linkerarm: 105,
  Rechterarm: 121,
  Linkerbeen: 64,
  Rechterbeen: 51
};

// -------------------------------
// RENDER CHECKBOXES
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

// -------------------------------
// SELECT / DESELECT ALL
// -------------------------------
function toggleAll(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const boxes = container.querySelectorAll("input[type='checkbox']");
  const allChecked = [...boxes].every(box => box.checked);

  boxes.forEach(box => box.checked = !allChecked);
}

// -------------------------------
// RANDOMIZER
// -------------------------------
function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randomizeGTA() {
  const result = [];

  // Kledingwinkel
  document.querySelectorAll("#clothingCategories input:checked").forEach(cat => {
    const category = cat.value;
    const itemObj = randomChoice(clothingStoreItems[category]);
    const randomVariant = Math.floor(Math.random() * itemObj.count) + 1;
  result.push(`Kledingwinkel - ${category}: ${itemObj.name} (${randomVariant})`);
  });

  // Kapper
document.querySelectorAll("#barberCategories input:checked").forEach(cat => {
  let item = "";

  switch(cat.value) {

    case "Haar":
      const haar = Math.floor(Math.random() * barberVariants.Haar) + 1;
      const haarHighlight = Math.floor(Math.random() * 48) + 1; // highlight haar
      item = `Haar: ${haar} (highlight ${haarHighlight})`;

      if (document.querySelector("#barberCategories input[value='HaarKleur']")?.checked) {
        item += ` (kleur ${Math.floor(Math.random() * barberVariants.HaarKleur) + 1})`;
      }
      break;

    case "Baard":
      item = `Baard: ${Math.floor(Math.random() * barberVariants.Baard) + 1}`;
      if (document.querySelector("#barberCategories input[value='BaardKleur']")?.checked) {
        item += ` (kleur ${Math.floor(Math.random() * barberVariants.BaardKleur) + 1})`;
      }
      break;

    case "Wenkbrauwen":
      item = `Wenkbrauwen: ${Math.floor(Math.random() * barberVariants.Wenkbrauwen) + 1}`;
      if (document.querySelector("#barberCategories input[value='WenkbrauwenKleur']")?.checked) {
        item += ` (kleur ${Math.floor(Math.random() * barberVariants.WenkbrauwenKleur) + 1})`;
      }
      break;

    case "Borst haar":
      item = `Borst haar: ${Math.floor(Math.random() * barberVariants.BorstHaar) + 1}`;
      if (document.querySelector("#barberCategories input[value='BorstHaarKleur']")?.checked) {
        item += ` (kleur ${Math.floor(Math.random() * barberVariants.BorstHaarKleur) + 1})`;
      }
      break;

    case "Contactlenzen":
      item = `Contactlenzen: ${Math.floor(Math.random() * barberVariants.Contactlenzen) + 1}`;
      break;

    case "Gezicht verf":
      const gezichtsverf = Math.floor(Math.random() * barberVariants.GezichtVerf) + 1;
      const faceHighlight = Math.floor(Math.random() * 64) + 1; // highlight gezicht
      item = `Gezicht verf: ${gezichtsverf} (highlight ${faceHighlight})`;
      break;

    case "Make-up (Ogen)":
      item = `Make-up Ogen: ${Math.floor(Math.random() * barberVariants.MakeUpOgen) + 1}`;
      break;

    case "Make-up (Lipstick)":
      const lipstick = Math.floor(Math.random() * barberVariants.MakeUpLipstick) + 1;
      const lipHighlight = Math.floor(Math.random() * 42) + 1; // highlight lipstick
      item = `Make-up Lipstick: ${lipstick} (highlight ${lipHighlight})`;
      break;
  }

  result.push(item);
});


  // Tattoo shop
  document.querySelectorAll("#tattooCategories input:checked").forEach(cat => {
    const category = cat.value;
    const item = Math.floor(Math.random() * tattooVariants[category]) + 1;
    result.push(`Tattoo shop - ${category}: ${item}`);
  });

  // Toon resultaat
  const output = document.getElementById("output");
  output.innerHTML = result.join("<br>");
  document.getElementById("result").classList.remove("hidden");
}

// -------------------------------
// INIT BIJ LADEN
// -------------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderCategoryOptions("clothingCategories", clothingStoreOptions);
  renderCategoryOptions("barberCategories", barberOptions);
  renderCategoryOptions("tattooCategories", tattooShopOptions);

  document.getElementById("selectClothing").addEventListener("click", () => toggleAll("clothingCategories"));
  document.getElementById("selectBarber").addEventListener("click", () => toggleAll("barberCategories"));
  document.getElementById("selectTattoos").addEventListener("click", () => toggleAll("tattooCategories"));

  document.getElementById("randomizeBtn").addEventListener("click", randomizeGTA);
});
