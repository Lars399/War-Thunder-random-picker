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

function generateBRList() {
  existingBRs.forEach(br => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = br;
    label.appendChild(input);
    label.appendChild(document.createTextNode(br));
    brList.appendChild(label);
  });
}
generateBRList();

function generateTierList() {
  existingTiers.forEach(tier => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = tier;
    label.appendChild(input);
    label.appendChild(document.createTextNode(tier));
    tierList.appendChild(label);
  });
}
generateTierList();

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

document.getElementById("selectAllCountries").addEventListener("click", () => {
  document.querySelectorAll("#countries input[type=checkbox]").forEach(cb => cb.checked = true);
});

document.getElementById("selectAllBRs").addEventListener("click", () => {
  document.querySelectorAll("#br-list input[type=checkbox]").forEach(cb => cb.checked = true);
});

// Selecteer alle Tiers
document.getElementById("selectAllTiers").addEventListener("click", () => {
  document.querySelectorAll("#tier-list input[type=checkbox]").forEach(cb => cb.checked = true);
});

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
  } else {
    const selectedTiers = Array.from(document.querySelectorAll("#tier-list input:checked"))
      .map(cb => cb.value);

    if (selectedTiers.length === 0) {
      alert("Selecteer minstens één Tier!");
      return;
    }

    const randomTier = selectedTiers[Math.floor(Math.random() * selectedTiers.length)];
    resultText = `${country} @ Tier ${randomTier}`;
  }

  output.textContent = resultText;
  resultDiv.classList.remove("hidden");
});
