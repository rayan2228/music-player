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

// music variables
let isPlaying = false
let songNumber = 0
let progressBarCal = 0

// play,pause music & update the ui
function playMusic() {
    isPlaying = true
    music.play()
    updatePlayPauseIcon()
}

function pauseMusic() {
    isPlaying = false
    music.pause()
    updatePlayPauseIcon()
}

function updatePlayPauseIcon() {
    playIcon.style.display = isPlaying ? "none" : "block"
    pauseIcon.style.display = isPlaying ? "block" : "none"
    if (isPlaying) {
        musicAlbumArt.classList.add("rotate-animation")
    } else {
        musicAlbumArt.classList.remove("rotate-animation")
    }
}

function updateMusicDetails(song) {
    songTitle.textContent = song.title
    artistName.textContent = song.artist
    music.src = song.src
}

updateMusicDetails(songs[songNumber])

playBtn.addEventListener("click", () => isPlaying ? pauseMusic() : playMusic())

// play next & prev music
playPrev.addEventListener("click", () => {
    songNumber = (songNumber - 1 + songs.length) % songs.length
    updateMusicDetails(songs[songNumber])
    playMusic()
})

playNext.addEventListener("click", () => {
    songNumber = (songNumber + 1) % songs.length
    updateMusicDetails(songs[songNumber])
    playMusic()
})

// music time update
music.addEventListener("timeupdate", (e) => {
    const { currentTime, duration } = e.target
    const currentTimeInMin = musicTimeFormatter(currentTime, "/")
    const currentTimeInSec = musicTimeFormatter(currentTime, "%")
    if (duration) {
        const durationInMin = musicTimeFormatter(duration, "/")
        const durationInSec = musicTimeFormatter(duration, "%")
        musicTotalTime.textContent = `${durationInMin}:${durationInSec}`
    }
    musicCurrentTime.textContent = `${currentTimeInMin}:${currentTimeInSec}`
    progressBarCal = (currentTime / duration) * 100
    musicProgress.style.width = `${progressBarCal}%`
    musicProgressDot.style.left = `${progressBarCal}%`
})

function musicTimeFormatter(sec, opt) {
    if (opt == "/") {
        return Math.floor(sec / 60)
    } else if (opt == "%") {
        return Math.floor(sec % 60).toString().padStart(2, "0")
    }
}