document.addEventListener("DOMContentLoaded", () => {
  const randomizeBtn = document.getElementById("randomizeBtn");
  const resultDiv = document.getElementById("result");
  const output = document.getElementById("output");

  const brSection = document.getElementById("br-section");
  const tierSection = document.getElementById("tier-section");
  const brList = document.getElementById("br-list");
  const tierList = document.getElementById("tier-list");
  const countriesDiv = document.getElementById("countries");

  const existingBRs = [
    "1.0","1.3","1.7","2.0","2.3","2.7","3.0","3.3","3.7",
    "4.0","4.3","4.7","5.0","5.3","5.7","6.0","6.3","6.7",
    "7.0","7.3","7.7","8.0","8.3","8.7","9.0","9.3","9.7",
    "10.0","10.3","10.7","11.0","11.3","11.7","12.0","12.3",
    "12.7","13.0","13.3","13.7","14.0"
  ];

  const existingTiers = ["I","II","III","IV","V","VI","VII"];

  // ====== LANDENAFBEELDINGEN ======
  const countryImages = {
    "USA": "https://i.pinimg.com/736x/f4/cf/5d/f4cf5d1eea7e6c356dfed0eb2a0acfca.jpg",
    "Germany": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC-27CMEZMDt2j-vUegtLeP-CuxwG16oh3KpEPy_szEU-RpHKGJpvGkPtjqZW_osZ59lU&usqp=CAU",
    "USSR": "https://images3.memedroid.com/images/UPLOADED461/5dd533220383d.jpeg",
    "UK": "https://images7.memedroid.com/images/UPLOADED936/5c6f3374f18d8.jpeg",
    "Japan": "https://img.ifnapp.com/images/e8d107c59c4fc32ae98c8a9dff62045927c732fd0d8d9d00f435196d5ff3f34a_1.jpg",
    "Italy": "https://ih1.redbubble.net/image.367072788.5976/flat,750x,075,f-pad,750x1000,f8f8f8.u3.jpg",
    "France": "https://i.ytimg.com/vi/t9QREAbQ9Rg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDHuieEiYYDHY5do3L98mzq9q-weA",
    "Sweden": "https://preview.redd.it/meanwhile-in-polish-ikea-v0-r3u9nfq4erde1.jpeg?width=1080&crop=smart&auto=webp&s=12b712d99e83d46b43e6491ea0c688f4eb0b3f22",
    "China": "https://i1.sndcdn.com/artworks-29Qq0wJTAqL0JrUE-nAtFQg-t500x500.png",
    "Israel": "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg"
  };

  // ====== BR-AFBEELDINGEN ======
  const brImages = {
  "1.0": "https://i.pinimg.com/236x/60/14/1d/60141dc36be633ba9a68b9c3ebbdd8b8.jpg",
  "1.3": "https://i1.sndcdn.com/artworks-77rpD29t5eHtO52x-jdS1dA-t500x500.png",
  "1.7": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Logo_NAC_Breda.svg",
  "2.0": "https://ella.janitorai.com/bot-avatars/RXyJzcb68ZIkqolG5-fIM.webp?width=1200",
  "2.3": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQilBVcQxHaPCoSga9Xsvh1I3YKicXLyTBm6xJEVcpExXO1kmTQrPpSe5uMilScxfRXUTY&usqp=CAU",
  "2.7": "https://res.cloudinary.com/nassau-candy/image/upload/c_fit,w_300,h_300,f_auto/v1741201760/55611.jpg",
  "3.0": "https://images.vrt.be/vrtnws_web/2025/01/21/77db9cfd-eec0-4d61-8497-9ca83c8f9a28.jpg?width=900&height=506",
  "3.3": "https://i.redd.it/uqs1iabx0fie1.png",
  "3.7": "https://upload.wikimedia.org/wikipedia/commons/5/5f/A_possum_and_a_movie_camera_1943.jpg",
  "4.0": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3yKtgAjSJLbL9v4j7nKiTfz9oKEMEv5XN6PqSfKbzhe2-X3JY4M9BMliCucObXwML_Q&usqp=CAU",
  "4.3": "https://external-preview.redd.it/j46xEnPedn7UZH9SVKEa-VTlTvKDTgkfj50mVNY9Z8c.jpg?auto=webp&s=6dc1bb4375b70edf1918a4b209c3735dc608a3ba",
  "4.7": "https://images3.memedroid.com/images/UPLOADED870/605cb3151d056.jpeg",
  "5.0": "https://media.discordapp.net/attachments/1348379245197656255/1424769158276448326/Screen_Shot_2021-10-31_at_11.49.31_AM.webp?ex=68e5272e&is=68e3d5ae&hm=8c9ecab795e976426b380f26609ed6aba811431a03d30852ccc2dc33b57bd230&=&format=webp",
  "5.3": "https://i.ytimg.com/vi/UGGAf44mvcE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBhxO7HqqVWG1XxShh6pR8w3yjB-w",
  "5.7": "https://cdn.discordapp.com/attachments/1348379245197656255/1424767011753562284/idfk2.JPG?ex=68e5252e&is=68e3d3ae&hm=dcb8363683959851e055ad36136eb4aa4f2e76cc84cc554ca86cbdd9fb4aad64&",
  "6.0": "https://64.media.tumblr.com/tumblr_lv9zp0sLcm1qg39ewo1_500.gifv",
  "6.3": "https://pbs.twimg.com/media/GV_qGL-XQAE35jy?format=jpg&name=large",
  "6.7": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Flag_of_Nazi_Germany_%28with_Iron_Cross%29.png",
  "7.0": "https://preview.redd.it/what-if-minsu-came-v0-w6ch3f4gy8kf1.jpeg?width=1284&auto=webp&s=e3a6a460e66ce7cdb1b96e6716aaccf72baa9e4a",
  "7.3": "https://gifdb.com/images/high/eric-cartman-nazi-hitler-2ojv6w251ywpb7u8.gif",
  "7.7": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh7Y5BnPP0BppiXxMhhCM3DL1MznfiaeDrxBYxhH2j-eH1ScuTbeYHIaC3LVBeT1_KxJE&usqp=CAU",
  "8.0": "https://content.imageresizer.com/images/memes/Vietnam-meme-3.jpg",
  "8.3": "https://m.media-amazon.com/images/I/61g264yU1pL._UY1000_.jpg",
  "8.7": "https://media.discordapp.net/attachments/1348379245197656255/1424770591285706982/1747940731986-2d46e605-ff70-4a3c-b967-39f26a7e6f50.png?ex=68e52883&is=68e3d703&hm=ad4d069fc812e55c5cc26ce1379da8610252be9a34d93c44f0e1d5cdf3b571bc&=&format=webp&quality=lossless",
  "9.0": "https://i.pinimg.com/736x/5c/11/ef/5c11ef93028548ec2e61fad0b23527e8.jpg",
  "9.3": "https://media.tenor.com/erQVwP-HqloAAAAM/balls-93.gif",
  "9.7": "https://pbs.twimg.com/media/E_HClXHX0AA3mll.jpg",
  "10.0": "https://i.pinimg.com/736x/99/18/df/9918df08c047d3032022ed88626d9774.jpg",
  "10.3": "https://media.tenor.com/uqDPV_vPq5kAAAAM/caramelldansen-dance.gif",
  "10.7": "https://i.redd.it/some-silly-pics-of-miku-and-her-tank-v0-m1u52gaujhnd1.jpg?width=4624&format=pjpg&auto=webp&s=6905eafb05c8012d9c0e0dfc061bedea3b8454b4",
  "11.0": "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/16685141/st2.jpg?quality=90&strip=all&crop=25,0,50,100",
  "11.3": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCfSWco8FwJz2UfC4FdLgl8jib3CMulNIbhB4Aaj_1Z4IC03jFbwZt0U8H1IThuOSVmB8&usqp=CAU",
  "11.7": "https://image.koreaboo.com/2025/06/513303198_18013421993759463_260682807399943011_n-925x587.jpg",
  "12.0": "https://www.laurasbakery.nl/wp-content/uploads/2017/12/Oliebollen-2.jpg",
  "12.3": "https://i.imgflip.com/7qrmmy.jpg",
  "12.7": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS05dTDFAU8TX0AlNIWf3f5TIl8AnWnIQWAjQ&s",
  "13.0": "https://media.tenor.com/c0XyhnpPrlkAAAAM/cat-meme.gif",
  "13.3": "https://media.craiyon.com/2025-08-09/0-Sk4RTOQlitPkcpgyet5g.webp",
  "13.7": "https://pbs.twimg.com/media/GhSDTF4W4AAHsNV.jpg",
  "14.0": "https://media.tenor.com/KfL05fPVK-4AAAAe/war-vietnam.png"
};

// ====== LANDEN ACHTERGROND ======
function styleCountries() {
  countriesDiv.querySelectorAll("label").forEach(label => {
    const input = label.querySelector("input");
    const country = input.value;

    label.style.display = "flex";
    label.style.alignItems = "center";
    label.style.justifyContent = "center";
    label.style.position = "relative";
    label.style.width = "90px";
    label.style.height = "75px";
    label.style.margin = "5px";
    label.style.border = "1px solid #000"; // zwarte rand
    label.style.borderRadius = "8px";
    label.style.backgroundSize = "cover";
    label.style.backgroundPosition = "center";
    label.style.color = "#FFD700";
    label.style.textShadow = "1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000";
    label.style.fontWeight = "bold";
    label.style.cursor = "pointer";
    label.style.overflow = "hidden";

    if (countryImages[country]) {
      label.style.backgroundImage = `url(${countryImages[country]})`;
    } else {
      label.style.backgroundColor = "#444";
    }

    input.style.position = "absolute";
    input.style.top = "5px";
    input.style.left = "5px";
  });
}

// ====== BR-LIJST GENEREREN ======
function generateBRList() {
  brList.innerHTML = ""; // leegmaken eerst
  existingBRs.forEach(br => {
    const label = document.createElement("label");
    label.style.display = "flex";
    label.style.alignItems = "center";
    label.style.justifyContent = "center";
    label.style.position = "relative";
    label.style.width = "75px";
    label.style.height = "75px";
    label.style.margin = "5px";
    label.style.border = "1px solid #000"; // zwarte rand
    label.style.borderRadius = "8px";
    label.style.backgroundSize = "cover";
    label.style.backgroundPosition = "center";
    label.style.color = "#FFD700";
    label.style.textShadow = "1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000";
    label.style.fontWeight = "bold";
    label.style.cursor = "pointer";
    label.style.overflow = "hidden";

    if (brImages[br]) {
      label.style.backgroundImage = `url(${brImages[br]})`;
    } else {
      label.style.backgroundColor = "#444";
    }

    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = br;
    input.style.position = "absolute";
    input.style.top = "5px";
    input.style.left = "5px";
    label.appendChild(input);

    const textNode = document.createElement("span");
    textNode.textContent = br;
    label.appendChild(textNode);

    brList.appendChild(label);
  });
}

// ====== TIERS GENEREREN ======
function generateTierList() {
  tierList.innerHTML = "";
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

// ====== MODUS SCHAKELAAR ======
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

// ====== SELECTEER KNOPPEN ======
document.getElementById("selectAllCountries").addEventListener("click", () => {
  document.querySelectorAll("#countries input[type=checkbox]").forEach(cb => cb.checked = true);
});

document.getElementById("selectAllBRs").addEventListener("click", () => {
  document.querySelectorAll("#br-list input[type=checkbox]").forEach(cb => cb.checked = true);
});

// ====== DESELECTEER KNOP ======
document.getElementById("deselectBRs").addEventListener("click", () => {
  document.querySelectorAll("#br-list input[type=checkbox]").forEach(cb => cb.checked = false);
});



document.getElementById("selectAllTiers").addEventListener("click", () => {
  document.querySelectorAll("#tier-list input[type=checkbox]").forEach(cb => cb.checked = true);
});

// ====== RANDOMIZER ======
randomizeBtn.addEventListener("click", () => {
  const selectedCountries = Array.from(document.querySelectorAll("#countries input:checked")).map(cb => cb.value);
  if (selectedCountries.length === 0) {
    alert("Selecteer minstens één land!");
    return;
  }

  const mode = document.querySelector('input[name="mode"]:checked').value;
  const country = selectedCountries[Math.floor(Math.random() * selectedCountries.length)];
  let resultText = "";

  
if (mode === "br") {
  const selectedBRs = Array.from(document.querySelectorAll("#br-list input:checked")).map(cb => parseFloat(cb.value));
  if (selectedBRs.length === 0) {
    alert("Selecteer minstens één BR!");
    return;
  }

  const brRandomMode = document.querySelector('input[name="brRandomMode"]:checked').value;

  let randomBR1, randomBR2;

if (brRandomMode === "random") {
  // Volledig willekeurig: twee totaal random BR's, maar niet dezelfde
  if (selectedBRs.length === 1) {
    randomBR1 = randomBR2 = selectedBRs[0];
  } else {
    randomBR1 = selectedBRs[Math.floor(Math.random() * selectedBRs.length)];
    do {
      randomBR2 = selectedBRs[Math.floor(Math.random() * selectedBRs.length)];
    } while (randomBR2 === randomBR1);
  }
} else {
  // Normale logica: tweede BR dicht bij de eerste, maar niet dezelfde
  randomBR1 = selectedBRs[Math.floor(Math.random() * selectedBRs.length)];

  // Zoek BR’s die binnen ±0.7 liggen maar niet dezelfde zijn
  const closeBRs = selectedBRs.filter(br => Math.abs(br - randomBR1) <= 0.7 && br !== randomBR1);

  if (closeBRs.length > 0) {
    randomBR2 = closeBRs[Math.floor(Math.random() * closeBRs.length)];
  } else {
    // fallback: kies een willekeurige andere BR die niet dezelfde is
    do {
      randomBR2 = selectedBRs[Math.floor(Math.random() * selectedBRs.length)];
    } while (randomBR2 === randomBR1);
  }
}


  const [lowBR, highBR] = [Math.min(randomBR1, randomBR2), Math.max(randomBR1, randomBR2)];
  const rangeText = `${lowBR.toFixed(1)} – ${highBR.toFixed(1)}`;
  const country = selectedCountries[Math.floor(Math.random() * selectedCountries.length)];
  const resultText = `${country} @ BR ${rangeText}`;

  // Toon resultaat met beide BR-afbeeldingen
  output.innerHTML = `
    <div style="
      position: relative;
      width: 100%;
      height: 300px;
      background-image: url('${countryImages[country]}');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      border: 2px solid #000;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
    ">
      <div style="
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background-color: rgba(0,0,0,0.2);
        border-radius: 8px;
      "></div>

      <div style="
        position: relative;
        text-align: center;
        color: #FFD700;
        text-shadow: 1px 1px 0 #000, -1px 1px 0 #000,
                     1px -1px 0 #000, -1px -1px 0 #000;
      ">
        <span style="font-weight: bold; font-size: 1.5em;">${resultText}</span><br>

        <div style="display: flex; justify-content: center; gap: 10px; margin-top: 10px;">
          ${brImages[lowBR.toFixed(1)] ? `<img src="${brImages[lowBR.toFixed(1)]}" alt="BR ${lowBR}" style="height:100px; object-fit:contain; border:2px solid #000; border-radius:8px;">` : ""}
          ${brImages[highBR.toFixed(1)] ? `<img src="${brImages[highBR.toFixed(1)]}" alt="BR ${highBR}" style="height:100px; object-fit:contain; border:2px solid #000; border-radius:8px;">` : ""}
        </div>
      </div>
    </div>
  `;
} else {
    const selectedTiers = Array.from(document.querySelectorAll("#tier-list input:checked")).map(cb => cb.value);
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

// ====== INIT ======
styleCountries();
generateBRList();
generateTierList();

});

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bgMusic");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const stopBtn = document.getElementById("stopBtn");
  const currentTrack = document.getElementById("currentTrack");

  let isPlaying = false;

  playPauseBtn.addEventListener("click", () => {
    if (!isPlaying) {
      audio.play();
      isPlaying = true;
      playPauseBtn.textContent = "⏸️";
      currentTrack.textContent = "Jouw nummer naam"; // vervang dit door je echte tracknaam
    } else {
      audio.pause();
      isPlaying = false;
      playPauseBtn.textContent = "▶️";
      currentTrack.textContent = "Pauze";
    }
  });

  stopBtn.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    isPlaying = false;
    playPauseBtn.textContent = "▶️";
    currentTrack.textContent = "Gestopt";
  });
});
