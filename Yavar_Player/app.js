


let current = 0;
const audio = new Audio();

const seek = document.getElementById("seek");
const currentTimeText = document.getElementById("currentTime");
const durationText = document.getElementById("duration");
const playlist = document.getElementById("playlist");
const playBtn = document.getElementById("play");
const trackTitle = document.getElementById("trackTitle");
const nowPlayingTitle = document.getElementById("nowPlayingTitle");
const trackArtist = document.getElementById("trackArtist");
const trackYear = document.getElementById("trackYear");
const showNoteBtn = document.getElementById("showNote");
const trackNote = document.getElementById("trackNote");
const trackLyrics = document.getElementById("trackLyrics");
const trackImage = document.getElementById("trackImage");

const showLyricsBtn =
    document.getElementById("showLyrics");

showLyricsBtn.addEventListener("click", () => {

    trackNote.classList.add("hidden");

    trackLyrics.classList.toggle("hidden");
});




function loadTrack(index) {

  current = index;

  const track = tracks[index];

  audio.src = track.src;


trackTitle.innerText = track.title;
nowPlayingTitle.innerText = track.title;

trackArtist.innerText = track.artist;
trackYear.innerText = track.year;

trackImage.src = track.img || "img/default.jpg";

trackNote.innerText = track.note;
trackLyrics.innerText = track.lyrics;

  
    trackNote.classList.add("hidden");
    trackLyrics.classList.add("hidden");
}

function formatTime(seconds) {

    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${mins}:${secs.toString().padStart(2, "0")}`;
}

audio.addEventListener("timeupdate", () => {

    if (!audio.duration) return;

    seek.value = (audio.currentTime / audio.duration) * 100;

    currentTimeText.innerText = formatTime(audio.currentTime);

    durationText.innerText = formatTime(audio.duration);
});

seek.addEventListener("input", () => {

    if (!audio.duration) return;

    audio.currentTime =
        (seek.value / 100) * audio.duration;
});

audio.addEventListener("ended", () => {

    current = (current + 1) % tracks.length;

    loadTrack(current);

    playTrack();
});

function playTrack() {
  audio.play();
  playBtn.innerText = "⏸";
}

function pauseTrack() {
  audio.pause();
  playBtn.innerText = "▶";
}

showNoteBtn.addEventListener("click", () => {
    trackLyrics.classList.add("hidden");
    trackNote.classList.toggle("hidden");
});

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    playTrack();
  } else {
    pauseTrack();
  }
});

document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % tracks.length;
  loadTrack(current);
  playTrack();
});

document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + tracks.length) % tracks.length;
  loadTrack(current);
  playTrack();
});

// Build playlist UI
tracks.forEach((track, i) => {
  const item = document.createElement("div");

  item.innerText = `${String(i + 1).padStart(2, "0")}. ${track.title}`;

  item.addEventListener("click", () => {
    loadTrack(i);
    playTrack();
  });

  playlist.appendChild(item);
});

// Initialize first track
loadTrack(0);