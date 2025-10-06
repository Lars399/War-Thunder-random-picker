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
  "2.0": "https://ella.janitorai.com/bot-avatars/RXyJzcb68ZIkqolG5-fIM.webp?width=1200",
  "2.3": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQilBVcQxHaPCoSga9Xsvh1I3YKicXLyTBm6xJEVcpExXO1kmTQrPpSe5uMilScxfRXUTY&usqp=CAU",
  "2.7": "https://res.cloudinary.com/nassau-candy/image/upload/c_fit,w_300,h_300,f_auto/v1741201760/55611.jpg",
  "3.0": "https://images.vrt.be/vrtnws_web/2025/01/21/77db9cfd-eec0-4d61-8497-9ca83c8f9a28.jpg?width=900&height=506",
  "3.3": "https://media.discordapp.net/attachments/1348379245197656255/1424770591285706982/1747940731986-2d46e605-ff70-4a3c-b967-39f26a7e6f50.png?ex=68e52883&is=68e3d703&hm=ad4d069fc812e55c5cc26ce1379da8610252be9a34d93c44f0e1d5cdf3b571bc&=&format=webp&quality=lossless",
  "3.7": "",
  "4.0": "",
  "4.3": "",
  "4.7": "",
  "5.0": "https://media.discordapp.net/attachments/1348379245197656255/1424769158276448326/Screen_Shot_2021-10-31_at_11.49.31_AM.webp?ex=68e5272e&is=68e3d5ae&hm=8c9ecab795e976426b380f26609ed6aba811431a03d30852ccc2dc33b57bd230&=&format=webp",
  "5.3": "",
  "5.7": "https://cdn.discordapp.com/attachments/1348379245197656255/1424767011753562284/idfk2.JPG?ex=68e5252e&is=68e3d3ae&hm=dcb8363683959851e055ad36136eb4aa4f2e76cc84cc554ca86cbdd9fb4aad64&",
  "6.0": "",
  "6.3": "https://pbs.twimg.com/media/GV_qGL-XQAE35jy?format=jpg&name=large",
  "6.7": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Flag_of_Nazi_Germany_%28with_Iron_Cross%29.png",
  "7.0": "https://preview.redd.it/what-if-minsu-came-v0-w6ch3f4gy8kf1.jpeg?width=1284&auto=webp&s=e3a6a460e66ce7cdb1b96e6716aaccf72baa9e4a",
  "7.3": "",
  "7.7": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh7Y5BnPP0BppiXxMhhCM3DL1MznfiaeDrxBYxhH2j-eH1ScuTbeYHIaC3LVBeT1_KxJE&usqp=CAU",
  "8.0": "https://content.imageresizer.com/images/memes/Vietnam-meme-3.jpg",
  "8.3": "https://m.media-amazon.com/images/I/61g264yU1pL._UY1000_.jpg",
  "8.7": "https://media.discordapp.net/attachments/1348379245197656255/1424770591285706982/1747940731986-2d46e605-ff70-4a3c-b967-39f26a7e6f50.png?ex=68e52883&is=68e3d703&hm=ad4d069fc812e55c5cc26ce1379da8610252be9a34d93c44f0e1d5cdf3b571bc&=&format=webp&quality=lossless",
  "9.0": "",
  "9.3": "",
  "9.7": "",
  "10.0": "",
  "10.3": "https://media.tenor.com/uqDPV_vPq5kAAAAM/caramelldansen-dance.gif",
  "10.7": "https://i.redd.it/some-silly-pics-of-miku-and-her-tank-v0-m1u52gaujhnd1.jpg?width=4624&format=pjpg&auto=webp&s=6905eafb05c8012d9c0e0dfc061bedea3b8454b4",
  "11.0": "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/16685141/st2.jpg?quality=90&strip=all&crop=25,0,50,100",
  "11.3": "",
  "11.7": "",
  "12.0": "",
  "12.3": "",
  "12.7": "",
  "13.0": "https://typesetbrooklyn.com/_next/image?url=https%3A%2F%2Fsocial-chuckwalla.transforms.svdcdn.com%2Fproduction%2FLabubu.jpg%3Fw%3D4000%26h%3D4000%26q%3D100%26auto%3Dformat%26fit%3Dmin%26dm%3D1749653239%26s%3D1c41fd2676084aafb529a91b041086bc&w=3840&q=75",
  "13.3": "",
  "13.7": "",
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
    label.style.color = "#FFD700";                // tekstkleur
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
