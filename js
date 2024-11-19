const cartoonAudio = new Audio('/ReelAudio-80975.mp3');
const forceAudio = new Audio('/nakhrewali-me.mp3');
const squeakyAudio = new Audio('/Aur- Tu hai kahanme.mp3');
const suniyaSuniyaRata= new Audio('/suniyan-suniyan.mp3');
const janjiAudio = new Audio('/Maan Meri Jaan .mp3');
const  desiedit = new Audio('/desi-edit.me.mp3') 
;
const yetunekyakiya=new Audio('/ye-tune-kya-kiya.mp3')
;
const oSajaniRe=  new Audio('/o Sajani Re.mp3')
;
const joTumMere= new Audio('/jo-tum-mere-ho.mp3');
const girlversion= new Audio('/ve-kamleya-girl-version.mp3');
// selecting elements
const prevBtn = document.querySelector('.previous');
const playBtn = document.querySelector('.play-pause');
const nextBtn = document.querySelector('.next');
const songName = document.querySelector('.song-name');
const playPauseIcon = document.querySelector('#play-pause-icon');


const songs = [
  { ele: cartoonAudio, audioName: 'Vekamleya' },
  { ele: forceAudio, audioName: 'Nakharevali' },
  { ele: squeakyAudio, audioName: 'AUR - Tu Hai kahan' },
  { ele: suniyaSuniyaRata, audioName: 'Suniya-Suniya Rata ' },
  { ele: janjiAudio, audioName: 'Maan Meri Jaan' },
  { ele : oSajaniRe , audioName:'O Sajani Re'
  },
  { ele : joTumMere , audioName:'Jo-Tum Mere'
    },
  { ele : girlversion, audioName:'vekamleya version'
  },
  { ele: yetunekyakiya, audioName:'Ye Tune Kya Kiya'
  },
];

for (const song of songs) {
  song.ele.addEventListener('ended', () => {
    updateSong('next');
    playPauseSong();
  })
}

let current = 0;
let currentSong = songs[current].ele;
songName.textContent = songs[current].audioName;

playBtn.addEventListener('click', () => {
  playPauseSong();
})

nextBtn.addEventListener('click', () => {
  updateSong('next');
  playPauseSong();
});

prevBtn.addEventListener('click', () => {
  updateSong('prev');
  playPauseSong();
});

const updateSong = (action) => {
  currentSong.pause();
  currentSong.currentTime = 0;

  if (action === 'next') {
    current++;
    if (current > songs.length - 1) current = 0;
  }
  if (action === 'prev') {
    current--;
    if (current < 0) current = songs.length - 1;
  }
  currentSong = songs[current].ele;
  songName.textContent = songs[current].audioName;
}

const playPauseSong = () => {
  if (currentSong.paused) {
    currentSong.play();
    playPauseIcon.className = 'ph-bold ph-pause';
  }
  else {
    currentSong.pause();
    playPauseIcon.className = 'ph-bold ph-play';
  }
}