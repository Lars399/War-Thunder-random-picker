
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bgMusic");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const stopBtn = document.getElementById("stopBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const currentTrack = document.getElementById("currentTrack");

  // Playlist met bestanden en namen
  const playlist = [
    { src: "music/Mingle Game Song but Hatsune Miku Cover _ SquidGame 2 - kopie.mp3", name: "Mingle song by Hatsune Miku (Cover)" },
    { src: "music/Rammstein - Sonne (Official Video) 0.mp3", name: "Sonne by Rammstein" },
    { src: "music/【MV】M@GICAL☆CURE! LOVE ♥ SHOT! _ SAWTOWNE feat. Hatsune Miku 0.mp3", name: "Miku Beam by Hatsune Miku" },
    { src: "music/Hide & Seek Song Lyric Video _ Squid Game_ Season 3 _ Netflix.mp3", name: "Hide & Seek from Squid Game S3" },
    { src: "music/F-14 Tomcat RWR Sounds 4.mp3", name: "F-14 Tomcat RWR Sounds" },
    { src: "music/Dat klinkt als weekend!.mp3", name: "Reclame tijd Albert Heijn" },
    { src: "music/Boodschappenlied.mp3", name: "Bootschappenlied by taalklas.nl" },
    { src: "music/Fortnite Fan (Ronnie Flex - Fan ft. Famke Louise PARODIE).mp3", name: "Fortnite Fan by Vogeljongen" },
    { src: "music/iKON - ‘사랑을 했다(LOVE SCENARIO)’ M_V 0.mp3", name: "Love Scenario by Towa Tei" },
    { src: "music/Levitating- Dababy ’s Verse Only 0.mp3", name: "Levitating by Dababy X Dua Lipa" },
    { src: "music/Damned [Higher Pitch].mp3", name: "Damed  (higher pitch) by Rissole" },
    { src: "music/Lil Dicky - Freaky Friday (Lyrics) ft. Chris Brown 0.mp3", name: "Freaky Friday by Lil Dicky"},
    // { src: "", name: "" },
  ];

  let currentIndex = 0;
  let isPlaying = false;

  // Functie om een track te laden
  function loadTrack(index) {
    const track = playlist[index];

    if (!track.src) {
      audio.pause();
      currentTrack.textContent = "Geen nummer geselecteerd";
      isPlaying = false;
      playPauseBtn.textContent = "▶️";
      return;
    }

    audio.src = track.src;
    currentTrack.textContent = track.name || "Onbekend nummer";
    if (isPlaying) audio.play();
    playPauseBtn.textContent = isPlaying ? "⏸️" : "▶️";
  }

  // Zet eerste nummer
  loadTrack(currentIndex);

  // Play / Pause
  playPauseBtn.addEventListener("click", () => {
    if (!isPlaying) {
      audio.play();
      isPlaying = true;
      playPauseBtn.textContent = "⏸️";
    } else {
      audio.pause();
      isPlaying = false;
      playPauseBtn.textContent = "▶️";
    }
  });

  // Stop
  stopBtn.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    isPlaying = false;
    playPauseBtn.textContent = "▶️";
  });

  // Vorige track
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentIndex);
    if (isPlaying && playlist[currentIndex].src) audio.play();
  });

  // Volgende track
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % playlist.length;
    loadTrack(currentIndex);
    if (isPlaying && playlist[currentIndex].src) audio.play();
  });

audio.addEventListener("ended", () => {
  currentIndex = (currentIndex + 1) % playlist.length;
  isPlaying = true; // <<< BELANGRIJK: zet eerst isPlaying op true
  loadTrack(currentIndex);
  audio.play();
  playPauseBtn.textContent = "⏸️";
});


  // ===== MINI GAME VOOR VOLUME =====
const movingBar = document.getElementById("moving-bar");
const targetBar = document.getElementById("target-bar");
const hitBtn = document.getElementById("hitBtn");
const volumeDisplay = document.getElementById("volumeDisplay");

let pos = 0;
let direction = 1; // 1 = naar rechts, -1 = naar links
let speed = 2; // pixels per frame
let gameInterval = setInterval(moveBar, 20);

function moveBar() {
  pos += direction * speed;
  if (pos <= 0 || pos >= 180) direction *= -1; // terugkaatsen aan randen
  movingBar.style.left = pos + "px";
}

// Knop gedrukt
hitBtn.addEventListener("click", () => {
  const barLeft = pos;
  const targetLeft = parseInt(targetBar.style.left);

  // Controleer overlap
  if (barLeft + 20 > targetLeft && barLeft < targetLeft + 20) {
    // Succes! volume verhogen met 10%
    audio.volume = Math.min(audio.volume + 0.1, 1);
  } else {
    // Mislukt, volume verlagen met 10%
    audio.volume = Math.max(audio.volume - 0.1, 0);
  }

  // Update display
  volumeDisplay.textContent = Math.round(audio.volume * 100) + "%";
});

});