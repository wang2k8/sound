// Danh sách bài nhạc
const musicList = [
    { title: "Việt Nam Tôi - Anh Vu Remix", src: "music/Việt Nam Tôi - Anh Vu Remix.mp3", cover: "ms/cover1.jpg" },
    { title: "Mama Boy - Anh Vu Remix", src: "music/Mama Boy Remix.mp3", cover: "ms/cover2.jpg" },
    { title: "MONG-YU-FT-CLME- DUCTU REMIX", src: "music/MONG-YU-FT-CLME- DUCTU REMIX.mp3", cover: "pic/pic1.jpg" },
    { title: "Bài Nhạc 4", src: "music/song4.mp3", cover: "pic/pic2.jpg" },
    { title: "Bài Nhạc 5", src: "music/song5.mp3", cover: "ms/cover5.jpg" },
    { title: "Bài Nhạc 6", src: "music/song6.mp3", cover: "ms/cover6.jpg" },
    { title: "Bài Nhạc 7", src: "music/song7.mp3", cover: "ms/cover7.jpg" },
    { title: "Bài Nhạc 8", src: "ms/song8.mp3", cover: "ms/cover8.jpg" },
    { title: "Bài Nhạc 9", src: "ms/song9.mp3", cover: "ms/cover9.jpg" },
    { title: "Bài Nhạc 10", src: "ms/song10.mp3", cover: "ms/cover10.jpg" },
    { title: "Bài Nhạc 11", src: "ms/song11.mp3", cover: "ms/cover11.jpg" },
    { title: "Bài Nhạc 12", src: "ms/song12.mp3", cover: "ms/cover12.jpg" },
    { title: "Bài Nhạc 13", src: "ms/song13.mp3", cover: "ms/cover13.jpg" },
    { title: "Bài Nhạc 14", src: "ms/song14.mp3", cover: "ms/cover14.jpg" },
    { title: "Bài Nhạc 15", src: "ms/song15.mp3", cover: "ms/cover15.jpg" },
    { title: "Bài Nhạc 16", src: "ms/song16.mp3", cover: "ms/cover16.jpg" },
    { title: "Bài Nhạc 17", src: "ms/song17.mp3", cover: "ms/cover17.jpg" },
    { title: "Bài Nhạc 18", src: "ms/song18.mp3", cover: "ms/cover18.jpg" },
    { title: "Bài Nhạc 19", src: "ms/song19.mp3", cover: "ms/cover19.jpg" },
    { title: "Bài Nhạc 20", src: "ms/song20.mp3", cover: "ms/cover20.jpg" },
    { title: "Bài Nhạc 21", src: "ms/song21.mp3", cover: "ms/cover21.jpg" },
    { title: "Bài Nhạc 22", src: "ms/song22.mp3", cover: "ms/cover22.jpg" },
    { title: "Bài Nhạc 23", src: "ms/song23.mp3", cover: "ms/cover23.jpg" },
    { title: "Bài Nhạc 24", src: "ms/song24.mp3", cover: "ms/cover24.jpg" },
    { title: "Bài Nhạc 25", src: "ms/song25.mp3", cover: "ms/cover25.jpg" },
    { title: "Bài Nhạc 26", src: "ms/song26.mp3", cover: "ms/cover26.jpg" },
    { title: "Bài Nhạc 27", src: "ms/song27.mp3", cover: "ms/cover27.jpg" },
    { title: "Bài Nhạc 28", src: "ms/song28.mp3", cover: "ms/cover28.jpg" },
    { title: "Bài Nhạc 29", src: "ms/song29.mp3", cover: "ms/cover29.jpg" },
    { title: "Bài Nhạc 30", src: "ms/song30.mp3", cover: "ms/cover30.jpg" },
    { title: "Bài Nhạc 31", src: "ms/song31.mp3", cover: "ms/cover31.jpg" },
    { title: "Bài Nhạc 32", src: "ms/song32.mp3", cover: "ms/cover32.jpg" },
    { title: "Bài Nhạc 33", src: "ms/song33.mp3", cover: "ms/cover33.jpg" },
    { title: "Bài Nhạc 34", src: "ms/song34.mp3", cover: "ms/cover34.jpg" },
    { title: "Bài Nhạc 35", src: "ms/song35.mp3", cover: "ms/cover35.jpg" },
    { title: "Bài Nhạc 36", src: "ms/song36.mp3", cover: "ms/cover36.jpg" },
    { title: "Bài Nhạc 37", src: "ms/song37.mp3", cover: "ms/cover37.jpg" },
    { title: "Bài Nhạc 38", src: "ms/song38.mp3", cover: "ms/cover38.jpg" },
    { title: "Bài Nhạc 39", src: "ms/song39.mp3", cover: "ms/cover39.jpg" },
    { title: "Bài Nhạc 40", src: "ms/song40.mp3", cover: "ms/cover40.jpg" },
    { title: "Bài Nhạc 41", src: "ms/song41.mp3", cover: "ms/cover41.jpg" },
    { title: "Bài Nhạc 42", src: "ms/song42.mp3", cover: "ms/cover42.jpg" },
    { title: "Bài Nhạc 43", src: "ms/song43.mp3", cover: "ms/cover43.jpg" },
    { title: "Bài Nhạc 44", src: "ms/song44.mp3", cover: "ms/cover44.jpg" },
    { title: "Bài Nhạc 45", src: "ms/song45.mp3", cover: "ms/cover45.jpg" },
    { title: "Bài Nhạc 46", src: "ms/song46.mp3", cover: "ms/cover46.jpg" },
    { title: "Bài Nhạc 47", src: "ms/song47.mp3", cover: "ms/cover47.jpg" },
    { title: "Bài Nhạc 48", src: "ms/song48.mp3", cover: "ms/cover48.jpg" },
    { title: "Bài Nhạc 49", src: "ms/song49.mp3", cover: "ms/cover49.jpg" },
    { title: "Bài Nhạc 50", src: "ms/song50.mp3", cover: "ms/cover50.jpg" },
];

// Khởi tạo các biến
const musicListElement = document.getElementById('music-list');
const audioPlayer = document.getElementById('audio-player');
const nowPlaying = document.getElementById('now-playing');
const albumArt = document.getElementById('album-art');
const playPauseButton = document.getElementById('play-pause-button');
const progressBar = document.getElementById('progress-bar');
const volumeControl = document.getElementById('volume-control');
let currentTrackIndex = -1;

// Tạo danh sách bài nhạc
musicList.forEach((music, index) => {
    const li = document.createElement('li');
    li.textContent = music.title;
    li.onclick = () => loadTrack(index);
    musicListElement.appendChild(li);
});

// Tải bài nhạc
function loadTrack(index) {
    if (index >= 0 && index < musicList.length) {
        currentTrackIndex = index;
        audioPlayer.src = musicList[index].src;
        albumArt.style.backgroundImage = `url('${musicList[index].cover}')`;
        nowPlaying.textContent = `Đang phát: ${musicList[index].title}`;
        playAudio();
    }
}

// Phát nhạc
function playAudio() {
    audioPlayer.play();
    playPauseButton.textContent = '⏸️'; // Chuyển đổi nút thành tạm dừng
}

// Tạm dừng nhạc
function pauseAudio() {
    audioPlayer.pause();
    playPauseButton.textContent = '▶️'; // Chuyển đổi nút thành phát
}

// Xử lý sự kiện phát/tạm dừng
playPauseButton.onclick = () => {
    if (audioPlayer.paused) {
        playAudio();
    } else {
        pauseAudio();
    }
};

// Cập nhật thanh tiến trình
audioPlayer.ontimeupdate = () => {
    const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progressPercent;
};

// Điều chỉnh âm lượng
volumeControl.oninput = () => {
    audioPlayer.volume = volumeControl.value;
};

// Tự động phát bài nhạc tiếp theo
audioPlayer.onended = () => {
    currentTrackIndex = (currentTrackIndex + 1) % musicList.length;
    loadTrack(currentTrackIndex);
};

// Tải bài nhạc đầu tiên khi trang được tải
loadTrack(0);
