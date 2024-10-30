// Danh sách bài nhạc
const musicList = [
    { title: "Việt Nam Tôi - Anh Vu Remix", src: "music/Việt Nam Tôi - Anh Vu Remix.mp3", cover: "pic/picvn.png" },
    { title: "Mama Boy - Anh Vu Remix", src: "music/Mama Boy Remix.mp3", cover: "pic/pic1.png" },
    { title: "Mộng Yu-FT-CLME- DucTu Remix", src: "music/MONG-YU-FT-CLME- DUCTU REMIX.mp3", cover: "pic/pic3.png" },
    { title: "Cẩm Tú Cầu (Anh Khoa Remix) - Rayo x Huỳnh Văn", src: "music/Cẩm Tú Cầu (Anh Khoa Remix) - Rayo x Huỳnh Văn.mp3", cover: "pic/pic4.png" },
    { title: "Mưa Tháng Sáu ft. Kissing On My Tatts (Nam Con Remix)", src: "music/Mưa Tháng Sáu ft. Kissing On My Tatts (Nam Con Remix).mp3", cover: "pic/pic5.png" },
    { title: "BÍCH THƯỢNG QUAN x VẠN SỰ TUỲ DUYÊN - THANH HƯNG FT ĐỨC TƯ REMIX", src: "music/BÍCH THƯỢNG QUAN x VẠN SỰ TUỲ DUYÊN - THANH HƯNG FT ĐỨC TƯ REMIX.mp3", cover: "pic/pichehe.png" },
    { title: "[DUCBUI REMIX] ÔI MẤT RÌU", src: "music/[DUCBUI REMIX] ÔI MẤT RÌU (2).mp3", cover: "pic/de-tao-tien-may-ve-voi-dat-cam-riu.jpg" },
    { title: "BÁC ĐANG CÙNG CHÚNG CHÁU HÀNH QUÂN - ANHVU FT KOREANDEE REMIX", src: "music/BÁC ĐANG CÙNG CHÚNG CHÁU HÀNH QUÂN - ANHVU FT KOREANDEE REMIX.mp3", cover: "pic/ngay_cuoi_cung_cua_bac_2.png" },
    // Thêm nhiều bài nhạc nếu cần
];

// Khởi tạo các biến
const musicListElement = document.getElementById('music-list');
const audioPlayer = document.getElementById('audio-player');
const nowPlaying = document.getElementById('track-title');
const albumArt = document.getElementById('album-art');
const playPauseButton = document.getElementById('play-pause-button');
const progressBar = document.getElementById('progress-bar');
const volumeControl = document.getElementById('volume-control');
const searchBar = document.getElementById('search-bar');
const currentTimeDisplay = document.getElementById('current-time');
const volumeValueDisplay = document.getElementById('volume-value');
const rewindButton = document.getElementById('rewind-button');
const fastForwardButton = document.getElementById('fast-forward-button');

let currentTrackIndex = -1;

// Tạo danh sách bài nhạc
function displayMusicList(musicArray) {
    musicListElement.innerHTML = '';
    musicArray.forEach((music, index) => {
        const li = document.createElement('li');
        li.textContent = music.title;
        li.onclick = () => loadTrack(index);
        musicListElement.appendChild(li);
    });
}

// Hiển thị danh sách bài nhạc
displayMusicList(musicList);

// Tìm kiếm bài nhạc
searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredMusic = musicList.filter(music => music.title.toLowerCase().includes(searchTerm));
    displayMusicList(filteredMusic);
});

// Tải bài nhạc
function loadTrack(index) {
    if (index >= 0 && index < musicList.length) {
        currentTrackIndex = index;
        audioPlayer.src = musicList[index].src;
        albumArt.classList.remove('default');
        albumArt.style.backgroundImage = `url('${musicList[index].cover}')`;
        nowPlaying.textContent = `Đang phát: ${musicList[index].title}`;
        playAudio();
    }
}

// Phát nhạc
function playAudio() {
    audioPlayer.play();
    playPauseButton.textContent = '❚❚'; // Chuyển đổi nút thành tạm dừng
}

// Tạm dừng nhạc
function pauseAudio() {
    audioPlayer.pause();
    playPauseButton.textContent = '▶'; // Chuyển đổi nút thành phát
}

// Xử lý sự kiện phát/tạm dừng
playPauseButton.onclick = () => {
    if (audioPlayer.paused) {
        playAudio();
    } else {
        pauseAudio();
    }
};

// Cập nhật thanh tiến trình và thời gian
audioPlayer.ontimeupdate = () => {
    const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = isNaN(progressPercent) ? 0 : progressPercent; // Kiểm tra NaN

    // Cập nhật thời gian hiện tại
    const minutes = Math.floor(audioPlayer.currentTime / 60);
    const seconds = Math.floor(audioPlayer.currentTime % 60);
    currentTimeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

// Xử lý sự kiện thay đổi thanh tiến trình
progressBar.oninput = () => {
    const time = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = time;
};

// Điều chỉnh âm lượng và hiển thị giá trị
volumeControl.oninput = () => {
    audioPlayer.volume = volumeControl.value / 100;
    volumeValueDisplay.textContent = `${volumeControl.value}%`;
};

// Tua lùi 10 giây
rewindButton.onclick = () => {
    audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 10); // Không để currentTime < 0
};

// Tua tới 10 giây
fastForwardButton.onclick = () => {
    if (audioPlayer.currentTime + 10 < audioPlayer.duration) {
        audioPlayer.currentTime += 10; // Tua tới 10 giây
    } else {
        audioPlayer.currentTime = audioPlayer.duration; // Đặt về cuối bài nếu vượt quá
    }
};

// Tự động phát bài nhạc tiếp theo
audioPlayer.onended = () => {
    currentTrackIndex = (currentTrackIndex + 1) % musicList.length;
    loadTrack(currentTrackIndex);
};

// Tải bài nhạc đầu tiên khi trang được tải
loadTrack(0);
