// DOM Elements
const homePage = document.getElementById("homePage");
const songDetailPage = document.getElementById("songDetailPage");
const playerPage = document.getElementById("playerPage");
const songListElement = document.getElementById("songList");

const backToHomeFromDetailBtn = document.getElementById(
  "backToHomeFromDetailBtn"
);
// FIX: Variabel yang benar
const backToHomeBtn = document.getElementById("backToHomeBtn");
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector(
  ".video-background-container"
);
const backgroundVideo = document.getElementById("backgroundVideo");

// Elemen untuk Halaman Detail Lagu
const detailAlbumArt = document.getElementById("detailAlbumArt");
const detailTrackTitle = document.getElementById("detailTrackTitle");
const detailTrackArtist = document.getElementById("detailTrackArtist");
const detailAlbumName = document.getElementById("detailAlbumName");
const playFromDetailBtn = document.getElementById("playFromDetailBtn");

// Elemen untuk Player
const audioPlayer = document.getElementById("audioPlayer");
const albumArtPlayer = document.getElementById("albumArt");
const playerTrackTitle = document.getElementById("playerTrackTitle");
const playerTrackArtist = document.getElementById("playerTrackArtist");
const lyricsContainer = document.getElementById("lyricsContainer");

const playerProgressBarContainer = document.getElementById(
  "playerProgressBarContainer"
);
const playerProgressBar = document.getElementById("playerProgressBar");
const playerCurrentTime = document.getElementById("playerCurrentTime");
const playerTotalDuration = document.getElementById("playerTotalDuration");

const playerPrevBtn = document.getElementById("playerPrevBtn");
const playerPlayPauseBtn = document.getElementById("playerPlayPauseBtn");
const playerNextBtn = document.getElementById("playerNextBtn");
const playerRepeatBtn = document.getElementById("playerRepeatBtn");
const playerShuffleBtn = document.getElementById("playerShuffleBtn");
const playerVolumeSlider = document.getElementById("playerVolumeSlider");
const playerSpeedSlider = document.getElementById("playerSpeedSlider");
const currentSpeedDisplay = document.getElementById("currentSpeedDisplay");

// App State
let songs = [
  {
    id: 1,
    title: "Consume",
    artist: "Chase Atlantic",
    album: "Beauty in Death",
    albumArtUrl:
      "https://tse3.mm.bing.net/th?id=OIP.VwivM--7Xx_SmgsqXBLi8AAAAA&pid=Api&P=0&h=220",
    audioSrc: "audio/consume.mp3",
    videoBgSrc: "videos/consume.mp4",
    lyrics: [
      { time: 0.8, text: "She said, Careful, or you'll lose it" },
      { time: 4, text: "But, girl, I'm only human," },
      { time: 7, text: "And I know there's a blade where your heart is" },
      { time: 10, text: "And you know how to use it" },
      { time: 13, text: "And you can take my flesh if you want girl" },
      { time: 16, text: "But, baby, don't abuse it (Calm down)" },
      {
        time: 19,
        text: "These voices in my head screaming, Run now (Don't run)",
      },
      { time: 22, text: "I'm praying that they're human" },
      { time: 25, text: "Please understand that I'm trying my hardest" },
      { time: 28, text: "My head's a mess, but I'm trying regardless" },
      { time: 31, text: "Anxiety is one hell of a problem" },
      { time: 34, text: "She's latching onto me, I can't resolve it" },
      { time: 37, text: "It's not right, it's not fair, it's not fair" },
      { time: 41.5, text: "It's not fair, it's not fair, it's not fair" },
      { time: 47, text: "Oh, no, no, no, ooh-ooh" },
    ],
  },
  {
    id: 2,
    title: "Perfect",
    artist: "Ed Sheeran",
    album: "÷ (Divide)",
    albumArtUrl:
      "https://tse4.mm.bing.net/th?id=OIP.TjS4z1jJTsl6K3-ADIXFywHaEK&pid=Api&P=0&h=220",
    audioSrc: "audio/cintaku.mp3",
    videoBgSrc: "videos/cintaku.mp4",
    lyrics: [
      { time: 0.5, text: "Baby, I'm dancing in the dark" },
      { time: 8, text: "With you between my arms" },
      { time: 12, text: "Barefoot on the grass" },
      { time: 15.9, text: "Listening to our favourite song" },
      { time: 19, text: "I have faith in what I see" },
      { time: 22, text: "Now I know I have met an angel in person" },
      { time: 29, text: "And she looks perfect" },
      { time: 32, text: "No I don't deserve this" },
      { time: 36, text: "You looks perfect," },
      { time: 40, text: "Tonight" },
    ],
  },
  {
    id: 3,
    title: "Golden Brown",
    artist: "The Stranglers",
    album: "Golden Brown",
    albumArtUrl: "img/goldenbrown.jpg",
    audioSrc: "audio/goldenbrown.mp3",
    videoBgSrc: "videos/goldenbrown.mp4",
    lyrics: [
      { time: 5.0, text: "Never a frown (Never a frown)" },
      {
        time: 12,
        text: "(Never a frown) With golden brown (With golden brown)",
      },
      { time: 17.5, text: "(With golden brown) Never a frown (Never a frown)" },
      {
        time: 23,
        text: "(Never a frown) With golden brown (With golden brown)",
      },
      { time: 28, text: "(With golden brown) Never a frown (Never a frown)" },
      {
        time: 32.8,
        text: "(Never a frown) With golden brown (With golden brown)",
      },
      { time: 37, text: "(With golden brown) Never a frown (Never a frown)" },
      { time: 44, text: "(With golden brown) Never a frown (Never a frown)" },
    ],
  },
  {
    id: 4,
    title: "SLOW DANCING IN THE DARK",
    artist: "Joji",
    album: "BALLADS 1",
    albumArtUrl: "img/joji.jpg",
    audioSrc: "audio/joji.mp3",
    videoBgSrc: "videos/joji.mp4",
    lyrics: [
      { time: 20, text: "You know I want you" },
      { time: 24, text: "It's not a secret I try to hide" },
      { time: 28, text: "You know you want me" },
      { time: 32, text: "So don't keep sayin' our hands are tied" },
      { time: 36, text: "You claim it's not in the cards" },
      {
        time: 40,
        text: "And fate is pullin' you miles away and out of reach from me",
      },
      { time: 45, text: "But you're here in my heart" },
      {
        time: 49,
        text: "So who can stop me if I decide that you're my destiny?",
      },
      { time: 54, text: "What if we rewrite the stars?" },
      { time: 58, text: "Say you were made to be mine" },
      { time: 62, text: "Nothin' could keep us apart" },
      { time: 66, text: "You'd be the one I was meant to find" },
      { time: 70, text: "It's up to you and it's up to me" },
      { time: 74, text: "No one can say what we get to be" },
      { time: 78, text: "So why don't we rewrite the stars?" },
      { time: 82, text: "Maybe the world could be ours tonight" },
      { time: 86, text: "Ah-oh (No, no, no, no)" },
      { time: 90, text: "Ah-oh (Mm)" },
      { time: 94, text: "You think it's easy" },
      { time: 98, text: "You think I don't wanna run to you, yeah" },
      { time: 102, text: "But there are mountains (There are mountains)" },
      { time: 106, text: "And there are doors that we can't walk through" },
      { time: 110, text: "I know you're wonderin' why" },
      {
        time: 114,
        text: "Because we're able to be just you and me within these walls",
      },
      { time: 119, text: "But when we go outside" },
      {
        time: 123,
        text: "You're gonna wake up and see that it was hopeless after all",
      },
      { time: 128, text: "No one can rewrite the stars" },
      { time: 132, text: "How can you say you'll be mine?" },
      { time: 136, text: "Everything keeps us apart" },
      { time: 140, text: "And I'm not the one you were meant to find" },
      { time: 144, text: "It's not up to you, it's not up to me" },
      { time: 148, text: "When everyone tells us what we can be" },
      { time: 152, text: "And how can we rewrite the stars?" },
      { time: 156, text: "Say that the world can be ours tonight" },
      { time: 160, text: "All I want is to fly with you" },
      { time: 164, text: "All I want is to fall with you" },
      { time: 168, text: "So just give me all of you" },
      { time: 172, text: "It feels impossible" },
      { time: 176, text: "It's not impossible" },
      { time: 180, text: "Is it impossible?" },
      { time: 184, text: "Say that it's possible" },
      { time: 188, text: "How do we rewrite the stars?" },
      { time: 192, text: "Say you were made to be mine" },
      { time: 196, text: "And nothin' could keep us apart" },
      { time: 200, text: "'Cause you are the one I was meant to find" },
      { time: 204, text: "It's up to you and it's up to me" },
      { time: 208, text: "No one could say what we get to be" },
      { time: 212, text: "And why don't we rewrite the stars?" },
      { time: 216, text: "Changin' the world to be ours" },
      { time: 220, text: "Ah-oh (No, no, no, no)" },
      { time: 224, text: "Ah-oh (Mm)" },
      { time: 228, text: "You know I want you" },
      { time: 232, text: "It's not a secret I try to hide" },
      { time: 236, text: "But I can't have you" },
      { time: 240, text: "We're bound to break and my hands are tied" },
    ],
  },
  {
    id: 5,
    title: "Message in Bottle",
    artist: "taylor swift",
    album: "OK Computer",
    albumArtUrl:
      "https://www.songmeaningsandfacts.com/wp-content/uploads/2022/11/Message-in-a-Bottle-by-Taylor-Swift.jpg",
    audioSrc: "audio/bocil.mp3",
    videoBgSrc: "videos/bocil.mp4",
    lyrics: [
      { time: 0, text: "Cause you could be the one that I love" },
      { time: 4, text: "I could be the one that you dream of " },
      { time: 8, text: "A message in a bottle is all I can do" },
      { time: 11, text: "Standin' here, hopin' it gets to you" },
      { time: 15, text: "You could be the one that I keep, and Iu" },
      { time: 19, text: "I could be the reason you can't sleep at night" },
      { time: 23, text: "A mеssage in a bottle is all I can do" },
      { time: 27, text: "Standin' herе, hopin' it gets to you" },
    ],
  },
  {
    id: 6,
    title: "About You",
    artist: "The 1975",
    album: "Being Funny In A Foreign Language",
    albumArtUrl: "img/about.jpg",
    audioSrc: "audio/aboutyou.mp3",
    videoBgSrc: "videos/aboutyou.mp4",
    lyrics: [
      { time: 3.3, text: "You and I (Don't let go)" },
      { time: 8, text: "We're alive (Don't let go)" },
      {
        time: 14,
        text: "With nothing to do, I could lay and just look in your eyes",
      },
      { time: 24, text: "Wait (Don't let go)" },
      { time: 28.5, text: "And pretend (Don't let go, oh)" },
      {
        time: 34,
        text: "Hold on and hope that we'll find our way back in the end (In the end)",
      },
      { time: 43, text: "Do you think I havе forgotten?" },
      { time: 48.3, text: "Do you think I havе forgotten?" },
      { time: 53, text: "Do you think I havе forgotten About you?" },
    ],
  },
  {
    id: 7,
    title: "I Wanna Be Yours",
    artist: "Arctic Monkeys",
    album: "AM",
    albumArtUrl: "https://i.ytimg.com/vi/fJLQCf4mFP0/hqdefault.jpg",
    audioSrc: "audio/I Wanna Be Yours.mp3",
    videoBgSrc: "videos/i_wanna_be_yours_bg.mp4",
    lyrics: [
      { time: 0, text: "I wanna be your vacuum cleaner" },
      { time: 3, text: "Breathing in your dust" },
      { time: 6, text: "I wanna be your Ford Cortina" },
      { time: 9, text: "I will never rust" },
      { time: 12, text: "If you like your coffee hot" },
      { time: 15, text: "Let me be your coffee pot" },
      { time: 18, text: "You call the shots, babe" },
      { time: 21, text: "I just wanna be yours" },

      { time: 24, text: "Secrets I have held in my heart" },
      { time: 28, text: "Are harder to hide than I thought" },
      { time: 32, text: "Maybe I just wanna be yours" },
      { time: 36, text: "I wanna be yours, I wanna be yours" },
      { time: 40, text: "Wanna be yours, wanna be yours, wanna be yours" },

      {
        time: 44,
        text: "Let me be your 'leccy meter and I'll never run out",
      },
      {
        time: 48,
        text: "Let me be the portable heater that you'll get cold without",
      },
      { time: 52, text: "I wanna be your setting lotion (wanna be)" },
      { time: 56, text: "Hold your hair in deep devotion (how deep?)" },
      { time: 60, text: "At least as deep as the Pacific Ocean" },
      { time: 64, text: "I wanna be yours" },

      { time: 68, text: "Secrets I have held in my heart" },
      { time: 72, text: "Are harder to hide than I thought" },
      { time: 76, text: "Maybe I just wanna be yours" },
      { time: 80, text: "I wanna be yours, I wanna be yours" },
      { time: 84, text: "Wanna be yours, wanna be yours, wanna be yours" },
      { time: 88, text: "Wanna be yours, wanna be yours, wanna be yours" },
      { time: 92, text: "Wanna be yours, wanna be yours" },

      { time: 96, text: "I wanna be your vacuum cleaner (Wanna be yours)" },
      { time: 100, text: "Breathing in your dust (Wanna be yours)" },
      { time: 104, text: "I wanna be your Ford Cortina (Wanna be yours)" },
      { time: 108, text: "I will never rust (Wanna be yours)" },
      { time: 112, text: "I just wanna be yours (Wanna be yours)" },
      { time: 116, text: "I just wanna be yours (Wanna be yours)" },
      { time: 120, text: "I just wanna be yours (Wanna be yours)" },
    ],
  },
  {
    id: 8,
    title: "Welcome and Goodbye",
    artist: "Dream, Ivory",
    album: "Welcome and Goodbye",
    albumArtUrl: "",
    audioSrc: "audio/dream_ivory_welcome_and_goodbye.mp3",
    videoBgSrc: "videos/welcome_and_goodbye_bg.mp4",
    lyrics: [
      {
        time: 0,
        text: "Through it all once again, came to know my only friend",
      },
      { time: 7, text: "Lost control, can't begin, I seek within" },
      { time: 13, text: "To feel the warmth brought within your skin" },
      { time: 19, text: "Did you know, for how it seemed" },
      { time: 24, text: "I should've stayed and let you be" },
      { time: 29, text: "Run into my heart so carelessly" },
      { time: 34, text: "That's the reason I'm afraid" },
      { time: 39, text: "You're thoughts that can't be tamed" },
      { time: 44, text: "And I'm trying to be sane" },
      { time: 49, text: "And I'm trying to be sane" },
      { time: 53, text: "And I'm trying to be sane" },
    ],
  },
  {
    id: 9,
    title: "Let Down",
    artist: "Radiohead",
    album: "OK Computer",
    albumArtUrl: "",
    audioSrc: "audio/radiohead_let_down.mp3",
    videoBgSrc: "videos/let_down_bg.mp4",
    lyrics: [
      { time: 0, text: "Transport, motorways and tramlines" },
      { time: 6, text: "Starting and then stopping" },
      { time: 10, text: "Taking off and landing" },
      { time: 14, text: "The emptiest of feelings" },
      { time: 18, text: "Disappointed people" },
      { time: 22, text: "Clinging onto bottles" },
      { time: 26, text: "And when it comes it's so, so disappointing" },
      { time: 32, text: "Let down and hanging around" },
      { time: 37, text: "Crushed like a bug in the ground" },
      { time: 42, text: "Let down and hanging around" },
      { time: 48, text: "Shell smashed, juices flowing" },
      { time: 53, text: "Wings twitch, legs are going" },
      { time: 58, text: "Don't get sentimental" },
      { time: 61, text: "It always ends up drivel" },
      { time: 65, text: "One day I am gonna grow wings" },
      { time: 70, text: "A chemical reaction" },
      { time: 74, text: "Hysterical and useless" },
      { time: 78, text: "Hysterical and" },
      { time: 82, text: "Let down and hanging around" },
      { time: 87, text: "Crushed like a bug in the ground" },
      { time: 92, text: "Let down and hanging around" },
    ],
  },
  {
    id: 10,
    title: "Mr Loverman",
    artist: "Ricky Montgomery",
    album: "Montgomery Ricky",
    albumArtUrl: "",
    audioSrc: "audio/ricky_montgomery_mr_loverman.mp3",
    videoBgSrc: "videos/mr_loverman_bg.mp4",
    lyrics: [
      { time: 0, text: "I'm headed straight for the floor" },
      { time: 5, text: "The alcohol's served its tour" },
      { time: 10, text: "And it's headed straight for my skin" },
      { time: 15, text: "Leaving me daft and dim" },
      { time: 20, text: "I've got this shake in my legs" },
      { time: 24, text: "Shaking the thoughts from my head" },
      { time: 28, text: "But who put these waves in the door?" },
      { time: 32, text: "I crack and out I pour" },
      { time: 37, text: "I'm Mr. Loverman" },
      { time: 41, text: "And I miss my lover, man" },
      { time: 45, text: "I'm Mr. Loverman" },
      { time: 49, text: "Oh, and I miss my lover" },
      { time: 55, text: "The ways in which you talk to me" },
      { time: 59, text: "Have me wishin' I were gone" },
      { time: 63, text: "The ways that you say my name" },
      { time: 67, text: "Have me runnin' on and on" },
      { time: 71, text: "Oh, I'm crampin' up, I'm crampin' up" },
      { time: 75, text: "But you're crackin' up, you're crackin' up" },
      { time: 80, text: "I'm Mr. Loverman" },
      { time: 84, text: "And I miss my loverman" },
      { time: 88, text: "I'm Mr. Loverman" },
      { time: 92, text: "Oh, and I miss my lover" },
    ],
  },
  {
    id: 11,
    title: "Where We Are",
    artist: "One Direction",
    album: "Midnight Memories (Deluxe Edition)",
    albumArtUrl: "",
    audioSrc: "audio/one_direction_where_we_are.mp3",
    videoBgSrc: "videos/where_we_are_bg.mp4",
    lyrics: [
      { time: 0, text: "Remember when we would stay out too late" },
      { time: 5, text: "We were young, havin' fun, made mistakes" },
      { time: 10, text: "Did we ever know? Did we ever know?" },
      { time: 15, text: "Did we ever know? Yeah" },
      { time: 20, text: "All the things we'd just think of and say" },
      { time: 25, text: "Never wrong, always right, not afraid" },
      { time: 30, text: "Did we ever know? Did we ever know?" },
      { time: 35, text: "Did we ever know?" },
      { time: 40, text: "Is it all inside of my head?" },
      { time: 45, text: "Maybe you still think I don't care" },
      { time: 50, text: "But all I need is you" },
      { time: 54, text: "Yeah, you know it's true, yeah, you know it's true" },
      { time: 60, text: "Forget about where we are and let go" },
      { time: 64, text: "We're so close" },
      { time: 67, text: "If you don't know where to start, just hold on" },
      { time: 71, text: "And don't run, no" },
      { time: 75, text: "We're looking back, we messed around" },
      { time: 79, text: "But that was then and this is now" },
      { time: 83, text: "All we need's enough love to hold us" },
      { time: 87, text: "Where we are" },
    ],
  },
  {
    id: 12,
    title: "Let Down (Varian)",
    artist: "Radiohead",
    album: "OK Computer",
    albumArtUrl:
      "https://images.genius.com/ea1fda114f5091bce67f87cf8437b647.1000x1000x1.png",
    audioSrc: "audio/letdown.mp3",
    videoBgSrc: "videos/letdown.mp4",
    lyrics: [
      { time: 0.2, text: "Floor collapsing Floating" },
      { time: 5, text: "bouncing back and " },
      { time: 7, text: "One day, I am gonna grow wings" },
      { time: 14.2, text: "A chemical reaction" },
      { time: 17.9, text: "Hysterical and useless" },
      { time: 23, text: "Hysterical and" },
      { time: 26, text: "Let down and hanging around" },
      { time: 33, text: "Crushed like a bug in the ground" },
      { time: 40, text: "Let down and hanging around" },
    ],
  },
];

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// --- Page Navigation ---

/**
 * Menampilkan halaman Home (Daftar Lagu).
 */
function showHomePage() {
  playerPage.classList.remove("active");
  songDetailPage.classList.remove("active");
  homePage.classList.add("active");

  bodyElement.classList.remove("player-active-bg");
  bodyElement.classList.remove("detail-active-bg");
  backgroundVideoContainer.classList.remove("active");
  backgroundVideo.pause();
  backgroundVideo.src = "";
  backgroundVideo.load();
  pauseTrack();
  albumArtPlayer.classList.remove("rotating"); // Hentikan rotasi
}

/**
 * Menampilkan halaman Detail Lagu.
 */
function showSongDetailPage(song) {
  homePage.classList.remove("active");
  playerPage.classList.remove("active");
  songDetailPage.classList.add("active");

  // Update detail info
  detailAlbumArt.src =
    song.albumArtUrl || "https://placehold.co/200x200/3a3a4e/e0e0e0?text=Art";
  detailTrackTitle.textContent = song.title;
  detailTrackArtist.textContent = song.artist;
  detailAlbumName.textContent = song.album || "Unknown Album";

  bodyElement.classList.remove("player-active-bg");
  bodyElement.classList.add("detail-active-bg");
  backgroundVideoContainer.classList.remove("active");
  backgroundVideo.pause();
  backgroundVideo.src = "";
  backgroundVideo.load();
  albumArtPlayer.classList.remove("rotating"); // Hentikan rotasi
}

/**
 * Menampilkan halaman Pemutar Musik.
 */
function showPlayerPage() {
  homePage.classList.remove("active");
  songDetailPage.classList.remove("active");
  playerPage.classList.add("active");

  bodyElement.classList.remove("detail-active-bg");
  bodyElement.classList.add("player-active-bg");
  backgroundVideoContainer.classList.add("active");

  const currentSong = songs[currentSongIndex];
  if (currentSong && currentSong.videoBgSrc) {
    backgroundVideo.src = currentSong.videoBgSrc;
    backgroundVideo.load();
    backgroundVideo
      .play()
      .catch((e) => console.log("Video background play prevented:", e.message));
  } else {
    backgroundVideo.src = "";
    backgroundVideo.load();
  }
}

// --- Home Page Logic ---
function renderSongList() {
  songListElement.innerHTML = "";
  if (songs.length === 0) {
    songListElement.innerHTML =
      '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
    return;
  }
  songs.forEach((song, index) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("data-id", song.id);
    listItem.setAttribute(
      "aria-label",
      `Putar lagu ${song.title} oleh ${song.artist}`
    );
    listItem.innerHTML = `
            <img src="${
              song.albumArtUrl ||
              "https://placehold.co/60x60/3a3a4e/e0e0e0?text=Art"
            }" alt="Album Art ${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;

    // Saat item lagu diklik, langsung muat & putar lagu lalu tampilkan halaman player
    listItem.addEventListener("click", () => {
      currentSongIndex = index;
      loadSong(songs[currentSongIndex]);
      playTrack();
      showPlayerPage();
    });

    // Event listener untuk hover (Preview Video)
    listItem.addEventListener("mouseenter", () => {
      if (homePage.classList.contains("active") && song.videoBgSrc) {
        backgroundVideo.src = song.videoBgSrc;
        backgroundVideo.load();
        backgroundVideoContainer.classList.add("active");
        backgroundVideo
          .play()
          .catch((e) =>
            console.log("Video preview play prevented:", e.message)
          );
        bodyElement.classList.add("player-active-bg");
      }
    });
    listItem.addEventListener("mouseleave", () => {
      if (homePage.classList.contains("active")) {
        backgroundVideoContainer.classList.remove("active");
        backgroundVideo.pause();
        backgroundVideo.src = "";
        backgroundVideo.load();
        bodyElement.classList.remove("player-active-bg");
      }
    });

    songListElement.appendChild(listItem);
  });
}

// --- Player Logic ---

/**
 * Memuat data lagu ke player (Album Art, Judul, Lirik, Audio Source).
 */
function loadSong(song) {
  if (!song) {
    console.error("Lagu tidak ditemukan!");
    albumArtPlayer.src =
      "https://placehold.co/150x150/3a3a4e/e0e0e0?text=Error";
    playerTrackTitle.textContent = "Lagu Tidak Tersedia";
    playerTrackArtist.textContent = "-";
    lyricsContainer.innerHTML = "<p>Lirik tidak tersedia.</p>";
    audioPlayer.src = "";
    playerCurrentTime.textContent = "0:00";
    playerTotalDuration.textContent = "0:00";
    playerProgressBar.style.width = "0%";
    return;
  }
  // Ganti ukuran placeholder agar sesuai dengan CSS baru
  albumArtPlayer.src =
    song.albumArtUrl || "https://placehold.co/150x150/3a3a4e/e0e0e0?text=Art";
  playerTrackTitle.textContent = song.title;
  playerTrackArtist.textContent = song.artist;

  renderLyrics(song.lyrics);

  // Jika lagu yang sama sudah dimuat, jangan ubah src
  if (audioPlayer.src !== new URL(song.audioSrc, window.location.href).href) {
    audioPlayer.src = song.audioSrc;
    audioPlayer.load();
  }

  audioPlayer.onloadedmetadata = () => {
    playerTotalDuration.textContent = formatTime(audioPlayer.duration);
  };
  updatePlayPauseIcon();
}

/**
 * Merender lirik ke container dan menambahkan data-time.
 */
function renderLyrics(lyrics) {
  lyricsContainer.innerHTML = "";
  if (!lyrics || lyrics.length === 0) {
    lyricsContainer.innerHTML = "<p>Lirik tidak tersedia untuk lagu ini.</p>";
    return;
  }

  lyrics.forEach((line) => {
    const span = document.createElement("span");
    span.textContent = line.text;
    span.setAttribute("data-time", line.time);
    span.classList.add("lyric-line");
    lyricsContainer.appendChild(span);
  });
}

/**
 * Memutar lagu.
 */
function playTrack() {
  if (!audioPlayer.src || audioPlayer.src === window.location.href) {
    if (songs.length > 0) {
      loadSong(songs[currentSongIndex]);
    } else {
      console.log("Tidak ada lagu untuk dimainkan.");
      return;
    }
  }
  isPlaying = true;
  albumArtPlayer.classList.add("rotating"); // Tambahkan efek rotasi
  // Gunakan promise play() untuk menangani potensi error auto-play
  audioPlayer.play().catch((error) => {
    console.error("Error saat play (auto-play blocked?):", error);
    isPlaying = false;
    albumArtPlayer.classList.remove("rotating"); // Hentikan rotasi
    updatePlayPauseIcon();
  });
  updatePlayPauseIcon();
}

/**
 * Menjeda lagu.
 */
function pauseTrack() {
  isPlaying = false;
  audioPlayer.pause();
  albumArtPlayer.classList.remove("rotating"); // Hentikan rotasi
  updatePlayPauseIcon();
}

/**
 * Memperbarui ikon tombol Play/Pause.
 */
function updatePlayPauseIcon() {
  if (isPlaying) {
    playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    playerPlayPauseBtn.setAttribute("aria-label", "Jeda Lagu");
  } else {
    playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    playerPlayPauseBtn.setAttribute("aria-label", "Putar Lagu");
  }
}

/**
 * Memutar lagu sebelumnya.
 */
function prevTrack() {
  if (songs.length === 0) return;
  if (isShuffle) {
    playRandomTrack();
  } else {
    if (audioPlayer.currentTime > 3) {
      audioPlayer.currentTime = 0;
      playTrack();
      return;
    }
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  }
  loadSong(songs[currentSongIndex]);
  playTrack();
  showPlayerPage();
}

/**
 * Logika memutar lagu selanjutnya (dipanggil oleh tombol next atau event ended).
 */
function nextTrack() {
  if (songs.length === 0) return;

  if (repeatMode === 1) {
    return;
  }

  if (isShuffle) {
    playRandomTrack();
  } else {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
      if (repeatMode === 2) {
        currentSongIndex = 0;
      } else {
        currentSongIndex = songs.length - 1;
        loadSong(songs[currentSongIndex]);
        pauseTrack();
        albumArtPlayer.classList.remove("rotating");
        audioPlayer.currentTime = audioPlayer.duration;
        return;
      }
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
  }
  showPlayerPage();
}

/**
 * Memutar lagu secara acak.
 */
function playRandomTrack() {
  if (songs.length <= 1) {
    currentSongIndex = 0;
  } else {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * songs.length);
    } while (randomIndex === currentSongIndex);
    currentSongIndex = randomIndex;
  }
  loadSong(songs[currentSongIndex]);
  playTrack();
  showPlayerPage();
}

// --- Event Handlers ---

audioPlayer.addEventListener("timeupdate", () => {
  if (audioPlayer.duration) {
    // Update progress bar
    const progressPercent =
      (audioPlayer.currentTime / audioPlayer.duration) * 100;
    playerProgressBar.style.width = `${progressPercent}%`;
    playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);

    // Logic highlight lirik
    const currentTime = audioPlayer.currentTime;
    const lyricLines = lyricsContainer.querySelectorAll(".lyric-line");
    let highlightedLine = null;

    lyricLines.forEach((line, index) => {
      const lineTime = parseFloat(line.getAttribute("data-time"));
      let nextLineTime = Infinity;
      if (index + 1 < lyricLines.length) {
        nextLineTime = parseFloat(
          lyricLines[index + 1].getAttribute("data-time")
        );
      } else if (audioPlayer.duration) {
        nextLineTime = audioPlayer.duration;
      }

      if (currentTime >= lineTime && currentTime < nextLineTime) {
        line.classList.add("highlight");
        highlightedLine = line;
      } else {
        line.classList.remove("highlight");
      }
    });

    // Auto-scroll lirik
    if (highlightedLine) {
      highlightedLine.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }
});

audioPlayer.addEventListener("ended", () => {
  if (repeatMode !== 1) {
    nextTrack();
  }
});

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

playerProgressBarContainer.addEventListener("click", (e) => {
  if (!audioPlayer.duration || songs.length === 0) return;
  const width = playerProgressBarContainer.clientWidth;
  const clickX = e.offsetX;
  audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener("input", (e) => {
  audioPlayer.volume = parseFloat(e.target.value);
});

playerSpeedSlider.addEventListener("input", (e) => {
  audioPlayer.playbackRate = parseFloat(e.target.value);
  currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});

playerShuffleBtn.addEventListener("click", () => {
  isShuffle = !isShuffle;
  playerShuffleBtn.classList.toggle("active-feature", isShuffle);
  playerShuffleBtn.setAttribute(
    "aria-label",
    isShuffle ? "Acak (Aktif)" : "Acak (Nonaktif)"
  );
});

playerRepeatBtn.addEventListener("click", () => {
  repeatMode = (repeatMode + 1) % 3;
  updateRepeatButtonUI();
});

/**
 * Memperbarui ikon dan status tombol Repeat.
 */
function updateRepeatButtonUI() {
  playerRepeatBtn.classList.remove("active-feature");
  audioPlayer.loop = false;
  let ariaLabelText = "Ulangi (Nonaktif)";

  if (repeatMode === 0) {
    playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
  } else if (repeatMode === 1) {
    playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
    playerRepeatBtn.classList.add("active-feature");
    audioPlayer.loop = true;
    ariaLabelText = "Ulangi Satu Lagu (Aktif)";
  } else {
    playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    playerRepeatBtn.classList.add("active-feature");
    ariaLabelText = "Ulangi Semua (Aktif)";
  }
  playerRepeatBtn.setAttribute("aria-label", ariaLabelText);
}

playerPlayPauseBtn.addEventListener("click", () => {
  if (isPlaying) {
    pauseTrack();
  } else {
    playTrack();
  }
});
playerPrevBtn.addEventListener("click", prevTrack);
playerNextBtn.addEventListener("click", nextTrack);

// Event Listeners untuk tombol navigasi
backToHomeFromDetailBtn.addEventListener("click", showHomePage);
// FIX DITERAPKAN DI SINI
backToHomeBtn.addEventListener("click", showHomePage);

playFromDetailBtn.addEventListener("click", () => {
  if (songs.length > 0) {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
  }
});

// --- Initialization ---
function init() {
  renderSongList();

  if (songs.length > 0) {
    loadSong(songs[currentSongIndex]);
  } else {
    albumArtPlayer.src =
      "https://placehold.co/150x150/3a3a4e/e0e0e0?text=Musik";
    playerTrackTitle.textContent = "Tidak Ada Lagu";
    playerTrackArtist.textContent = "Tambahkan lagu";
    lyricsContainer.innerHTML = "<p>Silakan tambahkan lagu dari daftar.</p>";
  }
  // Atur nilai awal kontrol audio
  audioPlayer.volume = parseFloat(playerVolumeSlider.value);
  audioPlayer.playbackRate = parseFloat(playerSpeedSlider.value);
  currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;

  // Perbarui UI kontrol
  updatePlayPauseIcon();
  updateRepeatButtonUI();

  // Tampilkan halaman awal
  showHomePage();
}

init();
