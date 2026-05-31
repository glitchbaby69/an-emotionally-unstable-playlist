
const tracks = [


{
    title: "In a Manner of Speaking",
    artist: "Nouvelle Vague",
    year: "2004",
    lyrics: `
lyerics nouvelle
  `,
    note: "it's in the title already",
    src: "music/01_in_a_manner.mp3"
  },
   {
  title: "Girl Loves Me",
  artist: "David Bowie",
  year: "2016",
  note: "Because you gave me that Bowie poster",
  src: "music/02_girl_loves_me.mp3"
},
  {
    title: "Ode to Mets",
    artist: "The Strokes",
    year: "2020",
    note: "my personal fav music to cry to lol",
    src: "music/03_ode_to_mets.mp3",

  },
{
    title: "I Can Never Go Home Anymore",
    artist: "The Shangri-Las",
    year: "1966",
    note: "",
    src: "music/04 _I_Can_Never_Go_Home_Anymore.mp3",

  },

  {
    title:"Dream Brother" ,
    artist: "Jeff Buvkley",
    year: "1994",
    note: "-",
    src:"music/05_Dream_Brother.mp3" ,

  },
  
  {
    title:"My Least Favorite Life" ,
    artist: "Lera Leynn",
    year: "2015",
    note: "-",
    src: "music/06_My_Least_Favorite_Life.mp3",

  },
 
  {
    title:"Goodbye" ,
    artist: "Apparat, Soap&Skin",
     
    year: "2011",
    note: "-",
    src: "music/07_Goodbye.mp3",

  },

{
    title:"Mezzanine" ,
    artist: "Massive Attack",
    year: "1988",
    note: "-",
    src: "music/08_Mezzanine.mp3",

  },
{
    title:"Group Four" ,
    artist: "Massive Attack",
    year: "1998",
    note: "-",
    src: "music/09_group_four.mp3",

  },

{
    title:"Splitting the Atom" ,
    artist: "Massive Attack",
    year: "2010",
    note: "-",
    src: "music/10_splitting.mp3",

  },
{
    title:"Rabbit In Your Headlights" ,
    artist: "UNKLE",
    year: "1998",
    note: "-",
    src: "music/11_rabbit.mp3",

  },

{
    title:"Undenied" ,
    artist: "Portishead",
    year: "1997",
    note: "",
    src: "music/12_undenied.mp3",

  },
{
    title:"Western Eyes" ,
    artist: "Portishead",
    year: "1997",
    note: "-",
    src: "music/13_Western_Eyes.mp3",

  },

{
    title:"Cowboys" ,
    artist: "Portishead",
    year: "1997",
    note: "-",
    src: "music/14_Cowboys.mp3",

  },
{
    title:"My Russia (Standing on Hands)" ,
    artist: "Wovenhand",
    year: "2002",
    note: "-",
    src: "music/15_my_russia.mp3",

  },
{
    title:"Closer" ,
    artist: "Nine Inch Nails",
    year: "1994",
    note: "-",
    src: "music/16_closer.mp3",

  },

  {
    title:"The Day The World Went Away" ,
    artist: "Nine Inch Nails",
    year: "1999",
    note: "-",
    src: "music/17_the_day.mp3",

  },
{
    title:"If I Was Your Vampire" ,
    artist: "Marilyn Manson",
    year: "2007",
    note: "-",
    src: "music/18_if_i_was.mp3",

  },
{
    title:"without You I'm Nothing" ,
    artist: "Placebo",
    year: "1998",
    note: "-",
    src: "music/19_placebo.mp3",

  },
{
    title:"The Vampyre of Time And Memory" ,
    artist: "Queens of The Stone Age",
    year: "2013",
    note: "-",
    src: "music/20_vampyre.mp3",

  },
{
    title:"Kettering" ,
    artist: "The Antlers",
    year: "2009",
    note: "-",
    src: "music/21_Kettering.mp3",

  },
 {
    title:"Dondante" ,
    artist: "My Morning Jacket",
    year: "2005",
    note: "-",
    src: "music/22_dondante.mp3",

  },
   {
    title:"A Wolf At The Door" ,
    artist: "Radiohead",
    year: "2003",
    note: "-",
    src: "music/23_wolf.mp3",

  },
  
   {
    title:"Miracles" ,
    artist: "The Dø",
    year: "2014",
    note: "-",
    src: "music/24_miracles.mp3",

  },
   {
    title:"For The Damaged coda" ,
    artist: "Blonde Redhead",
    year: "2000",
    note: "-",
    src: "music/25_coda.mp3",

  },
];

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

function loadTrack(index) {

  current = index;

  const track = tracks[index];

  audio.src = track.src;


trackTitle.innerText = track.title;
nowPlayingTitle.innerText = track.title;

trackArtist.innerText = track.artist;
trackYear.innerText = track.year;
trackNote.innerText = track.note;
trackLyrics.innerText = track.lyrics;

  
    trackNote.classList.add("hidden");
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