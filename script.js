const music = document.querySelector("audio")
const songTitle = document.querySelector(".song-title")
const artistName = document.querySelector(".artist-name")
const playPrev = document.querySelector(".prev")
const playBtn = document.querySelector(".play-pause")
const playNext = document.querySelector(".next")
const playIcon = document.querySelector(".play-icon")
const pauseIcon = document.querySelector(".pause-icon")
const musicAlbumArt = document.querySelector(".album-art")
const musicCurrentTime = document.querySelector(".current-time")
const musicTotalTime = document.querySelector(".total-time")
const musicProgressBar = document.querySelector(".progress-bar")
const musicProgress = document.querySelector(".progress")
const musicProgressDot = document.querySelector(".progress-dot")

// my music
let songs = [
    {
        title: "music 0",
        artist: "artist 1",
        src: './music/music1.mp3'
    },
    {
        title: "music 1",
        artist: "artist 2",
        src: './music/music2.mp3'
    },
    {
        title: "music 2",
        artist: "artist 3",
        src: './music/music3.mp3'
    },
    {
        title: "music 3",
        artist: "artist 4",
        src: './music/music4.mp3'
    }
]