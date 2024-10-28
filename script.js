const musicList = [
    { title: "Mama Boy - AnhVu Remix", file: "music/Mama Boy Remix.mp3", cover: "covers/BaiHat1.jpg" },
    { title: "Lên Đàng x Thanh Niên Tiếp Bước - AnhVu Remix", file: "music/Len Dang x Thanh Nien Tiep Buoc.mp3", cover: "covers/BaiHat2.jpg" },
    { title: "Việt Nam Tôi - Anh Vu Remix", file: "music/Việt Nam Tôi - Anh Vu Remix.mp3" }
    { title: "MONG-YU-FT-CLME- DUCTU REMIX", file: "music/MONG-YU-FT-CLME- DUCTU REMIX.mp3" }
    { title: "BaiHat3", file: "music/BaiHat3.mp3" }
    { title: "BaiHat3", file: "music/BaiHat3.mp3" }
    { title: "BaiHat3", file: "music/BaiHat3.mp3" }
    { title: "BaiHat3", file: "music/BaiHat3.mp3" }
    { title: "BaiHat3", file: "music/BaiHat3.mp3" }
    { title: "BaiHat3", file: "music/BaiHat3.mp3" }
    { title: "BaiHat3", file: "music/BaiHat3.mp3" }
    { title: "BaiHat3", file: "music/BaiHat3.mp3" }
    { title: "BaiHat3", file: "music/BaiHat3.mp3" }
    { title: "BaiHat3", file: "music/BaiHat3.mp3" }
    { title: "BaiHat3", file: "music/BaiHat3.mp3" }
    { title: "BaiHat3", file: "music/BaiHat3.mp3" }
    { title: "BaiHat3", file: "music/BaiHat3.mp3" }
    { title: "BaiHat3", file: "music/BaiHat3.mp3" }
    { title: "BaiHat3", file: "music/BaiHat3.mp3" }
];

const randomBackgrounds = [
    "pic/background1.png",
    "pic/background2.png",
    "pic/background3.png"
];

const audioPlayer = document.getElementById("audio-player");
const musicListElement = document.getElementById("music-list");
const nowPlayingTitle = document.getElementById("now-playing");
const albumArt = document.getElementById("album-art");
const playPauseButton = document.getElementById("play-pause-button");
const rewindButton = document.getElementById("rewind-button");
const forwardButton = document.getElementById("forward-button");
const progressBar = document.getElementById("progress-bar");
const volumeControl = document.getElementById("volume-control");
const playerSection = document.getElementById("player-section");

let isPlaying = false;

function loadMusicList() {
    musicList.forEach((song, index) => {
        const li = document.createElement("li");
        li.textContent = song.title;
        li.dataset.index = index;
        li.addEventListener("dblclick", () => playSong(index));
        musicListElement.appendChild(li);
    });
}

function getRandomBackground() {
    const randomIndex = Math.floor(Math.random() * randomBackgrounds.length);
    return randomBackgrounds[randomIndex];
}

function playSong(index) {
    const song = musicList[index];
    audioPlayer.src = song.file;
    audioPlayer.play();
    isPlaying = true;
    playPauseButton.textContent = "⏸️";
    nowPlayingTitle.textContent = `Đang phát: ${song.title}`;
    albumArt.style.backgroundImage = song.cover ? `url(${song.cover})` : "none";
    playerSection.style.backgroundImage = song.cover ? `url(${song.cover})` : `url(${getRandomBackground()})`;
    musicListSection.classList.add("active");
}

playPauseButton.addEventListener("click", () => {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseButton.textContent = "▶️";
    } else {
        audioPlayer.play();
        playPauseButton.textContent = "⏸️";
    }
    isPlaying = !isPlaying;
});

rewindButton.addEventListener("click", () => {
    audioPlayer.currentTime -= 5;
});

forwardButton.addEventListener("click", () => {
    audioPlayer.currentTime += 5;
});

audioPlayer.addEventListener("timeupdate", () => {
    progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
});

progressBar.addEventListener("input", () => {
    audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
});

volumeControl.addEventListener("input", () => {
    audioPlayer.volume = volumeControl.value / 100;
});

loadMusicList();
