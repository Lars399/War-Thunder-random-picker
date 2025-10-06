const randomizeBtn = document.getElementById("randomizeBtn");
const resultDiv = document.getElementById("result");
const output = document.getElementById("output");

const brSection = document.getElementById("br-section");
const tierSection = document.getElementById("tier-section");
const brList = document.getElementById("br-list");
const tierList = document.getElementById("tier-list");

const existingBRs = [
  "1.0","1.3","1.7","2.0","2.3","2.7","3.0","3.3","3.7",
  "4.0","4.3","4.7","5.0","5.3","5.7","6.0","6.3","6.7",
  "7.0","7.3","7.7","8.0","8.3","8.7","9.0","9.3","9.7",
  "10.0","10.3","10.7","11.0","11.3","11.7","12.0","12.3",
  "12.7","13.0","13.3","13.7","14.0"
];

const existingTiers = ["I","II","III","IV","V","VI","VII"];

const brImages = {
  "1.0": "https://i.pinimg.com/236x/60/14/1d/60141dc36be633ba9a68b9c3ebbdd8b8.jpg",
  "1.3": "https://i1.sndcdn.com/artworks-77rpD29t5eHtO52x-jdS1dA-t500x500.png",
  "1.7": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS05dTDFAU8TX0AlNIWf3f5TIl8AnWnIQWAjQ&s",
  "6.3": "https://pbs.twimg.com/media/GV_qGL-XQAE35jy?format=jpg&name=large",
  "7.0": "https://preview.redd.it/what-if-minsu-came-v0-w6ch3f4gy8kf1.jpeg?width=1284&auto=webp&s=e3a6a460e66ce7cdb1b96e6716aaccf72baa9e4a",
  "8.0": "https://content.imageresizer.com/images/memes/Vietnam-meme-3.jpg",
  "14.0": "https://media.tenor.com/KfL05fPVK-4AAAAe/war-vietnam.png"
};

// Bouw BR lijst met afbeelding onder de optie
function generateBRList() {
  existingBRs.forEach(br => {
    const label = document.createElement("label");
    label.style.display = "flex";
    label.style.alignItems = "center";
    label.style.justifyContent = "center";
    label.style.position = "relative";
    label.style.width = "75px";     // breedte van optie
    label.style.height = "75px";    // hoogte van optie
    label.style.margin = "5px";
    label.style.border = "1px solid #ccc";
    label.style.borderRadius = "8px";
    label.style.backgroundSize = "cover";      // afbeelding vullen
    label.style.backgroundPosition = "center";
    label.style.color = "#fff";                // tekstkleur
    label.style.fontWeight = "bold";
    label.style.cursor = "pointer";
    label.style.overflow = "hidden";
    
    if (brImages[br]) {
      label.style.backgroundImage = `url(${brImages[br]})`;
    } else {
      label.style.backgroundColor = "#444";  // fallback kleur voor opties zonder afbeelding
    }

    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = br;
    input.style.position = "absolute"; // checkbox verbergen of positioneren
    input.style.top = "5px";
    input.style.left = "5px";
    label.appendChild(input);

    const textNode = document.createElement("span");
    textNode.textContent = br;
    label.appendChild(textNode);

    brList.appendChild(label);
  });
}

generateBRList();

function generateTierList() {
  existingTiers.forEach(tier => {
    const label = document.createElement("label");
    label.style.display = "flex";
    label.style.alignItems = "center";
    label.style.gap = "5px";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = tier;
    label.appendChild(input);

    const textNode = document.createTextNode(tier);
    label.appendChild(textNode);

    tierList.appendChild(label);
  });
}
generateTierList();

// Toggle tussen BR en Tier sectie
document.querySelectorAll('input[name="mode"]').forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.value === "br") {
      brSection.classList.remove("hidden");
      tierSection.classList.add("hidden");
    } else {
      tierSection.classList.remove("hidden");
      brSection.classList.add("hidden");
    }
  });
});

// Selecteer alle landen
document.getElementById("selectAllCountries").addEventListener("click", () => {
  document.querySelectorAll("#countries input[type=checkbox]").forEach(cb => cb.checked = true);
});

// Selecteer alle BR's
document.getElementById("selectAllBRs").addEventListener("click", () => {
  document.querySelectorAll("#br-list input[type=checkbox]").forEach(cb => cb.checked = true);
});

// Selecteer alle Tiers
document.getElementById("selectAllTiers").addEventListener("click", () => {
  document.querySelectorAll("#tier-list input[type=checkbox]").forEach(cb => cb.checked = true);
});

// Randomizer functionaliteit
randomizeBtn.addEventListener("click", () => {
  const selectedCountries = Array.from(document.querySelectorAll("#countries input:checked"))
    .map(cb => cb.value);

  if (selectedCountries.length === 0) {
    alert("Selecteer minstens één land!");
    return;
  }

  const mode = document.querySelector('input[name="mode"]:checked').value;
  let resultText = "";

  const country = selectedCountries[Math.floor(Math.random() * selectedCountries.length)];

  if (mode === "br") {
    const selectedBRs = Array.from(document.querySelectorAll("#br-list input:checked"))
      .map(cb => cb.value);

    if (selectedBRs.length === 0) {
      alert("Selecteer minstens één BR!");
      return;
    }

    const randomBR = selectedBRs[Math.floor(Math.random() * selectedBRs.length)];
    resultText = `${country} @ BR ${randomBR}`;

    if (brImages[randomBR]) {
      output.innerHTML = `${resultText}<br><img src="${brImages[randomBR]}" alt="BR image" style="max-width:200px; margin-top:10px;">`;
    } else {
      output.textContent = resultText;
    }

  } else {
    const selectedTiers = Array.from(document.querySelectorAll("#tier-list input:checked"))
      .map(cb => cb.value);

    if (selectedTiers.length === 0) {
      alert("Selecteer minstens één Tier!");
      return;
    }

    const randomTier = selectedTiers[Math.floor(Math.random() * selectedTiers.length)];
    resultText = `${country} @ Tier ${randomTier}`;
    output.textContent = resultText;
  }

  resultDiv.classList.remove("hidden");
});
