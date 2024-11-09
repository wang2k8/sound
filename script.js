// Danh sách bài nhạc
const musicList = [
    { title: "Việt Nam Tôi - Anh Vu Remix", src: "music/Việt Nam Tôi - Anh Vu Remix.mp3", cover: "pic/picvn.png" },
    { title: "Mama Boy - Anh Vu Remix", src: "music/MAMA BOY - ANHVU REMIX.mp3", cover: "pic/pic1.png" },
    { title: "Mộng Yu-FT-CLME- DucTu Remix", src: "music/MONG-YU-FT-CLME- DUCTU REMIX.mp3", cover: "pic/pic3.png" },
    { title: "Cẩm Tú Cầu (Anh Khoa Remix) - Rayo x Huỳnh Văn", src: "music/Cẩm Tú Cầu (Anh Khoa Remix) - Rayo x Huỳnh Văn.mp3", cover: "pic/pic4.png" },
    { title: "Mưa Tháng Sáu ft. Kissing On My Tatts - Nam Con Remix", src: "music/Mưa Tháng Sáu ft. Kissing On My Tatts (Nam Con Remix).mp3", cover: "pic/pic5.png" },
    { title: "BÍCH THƯỢNG QUAN x VẠN SỰ TUỲ DUYÊN - THANH HƯNG FT ĐỨC TƯ REMIX", src: "music/BÍCH THƯỢNG QUAN x VẠN SỰ TUỲ DUYÊN - THANH HƯNG FT ĐỨC TƯ REMIX.mp3", cover: "pic/pichehe.png" },
    { title: "Ôi Mất Rìu - DucBui Remix", src: "music/[DUCBUI REMIX] ÔI MẤT RÌU (2).mp3", cover: "pic/de-tao-tien-may-ve-voi-dat-cam-riu.jpg" },
    { title: "BÁC ĐANG CÙNG CHÚNG CHÁU HÀNH QUÂN - ANHVU FT KOREANDEE REMIX", src: "music/BÁC ĐANG CÙNG CHÚNG CHÁU HÀNH QUÂN - ANHVU FT KOREANDEE REMIX.mp3", cover: "pic/ngay_cuoi_cung_cua_bac_2.png" },
    { title: "NẮNG CÓ MANG EM VỀ VER1 REMIX - SHARTNUSS FT TR.D & PHANKEO ( YANG REMIX )", src: "music/NẮNG CÓ MANG EM VỀ VER1 REMIX - SHARTNUSS FT TR.D & PHANKEO ( YANG REMIX ).mp3", cover: "pic/gojo-satoru-walking.gif" },
    { title: "Bầu Trời Mới - Dức Tư Remix", src: "music/BAU-TROI-MOI-FULL.mp3", cover: "pic/1727843689942_640.jpg" },
    { title: "Vì Anh Đâu Có Biết - DucBui Remix", src: "music/[DUCBUI REMIX] VÌ ANH ĐÂU CÓ BIẾT - MADIHU.mp3", cover: "pic/artworks-izbeARPFle4aJWRx-3LBxiQ-t500x500.jpg" },
    { title: "Anh Là Ai - DucBui Remix", src: "music/[DUCBUI REMIX] ANH LÀ AI - RAP VIỆT MÙA 3.mp3", cover: "pic/avatars-hyy1ZQzCjsYY7boT-QSyPVg-t240x240.jpg" },
    { title: "Vì Sao (Nam Con Remix)", src: "music/Vì Sao (Nam Con Remix).mp3", cover: "pic/618b0e8a974ab202ae03d2a106d34356.jpg" },
    { title: "Nước Hoa (Nam Con Remix)", src: "music/Nước Hoa (Nam Con Remix) - Hoàng Tôn - Hot TikTok 2024 - Audio Lyrics Video.mp3", cover: "pic/hq720 (6).png" },
    { title: "Là Anh (Vocal Việt) - Phạm Lịch Cover & Nam Con Remix", src: "music/Là Anh (Vocal Việt) - Phạm Lịch Cover & Nam Con Remix - Nhạc Hot Tik Tok 2023 - Exclusive Music.mp3", cover: "pic/a7e77718d5dc8486fa60db65496d3715.jpg" },
    { title: "NHẮM MẮT THẤY MÙA HÈ - NGUYÊN HÀ FT ĐỨC TƯ REMIX", src: "music/NHẮM MẮT THẤY MÙA HÈ - NGUYÊN HÀ FT ĐỨC TƯ REMIX (HOT TREND TIKTOK 2024).mp3", cover: "pic/1527737433466_640.jpg" },
    { title: "Sao Anh Chưa Về Nhà - (Danxi ft. khuynn. Remix)", src: "music/Sao Anh Chưa Về Nhà- - Amee ft. Ricky Star (Danxi ft. khuynn. Remix) Nhạc Hot Tiktok 2023 [AMV] (1).mp3", cover: "pic/EAmr-PAWsAEoiWR.jpg" },
    { title: "Chăm Hoa - SS x AM REMIX", src: "music/Chăm Hoa - SS x AM REMIX.mp3", cover: "pic/1109(3).png" },
    { title: "NẾU BIẾT ĐÓ LÀ LẦN CUỐI X NHƯ ANH MƠ - TOANN REMIX", src: "music/NẾU BIẾT ĐÓ LÀ LẦN CUỐI X NHƯ ANH MƠ - TOANN REMIX.mp3", cover: "pic/HD-wallpaper-gato-cat-cats-kitten-thumbnail.jpg" },
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
const prevTrackButton = document.getElementById('prev-track-button');
const nextTrackButton = document.getElementById('next-track-button');
const favoriteButton = document.getElementById('favorite-button');

let currentTrackIndex = -1;
let favoriteTracks = [];

// Tạo danh sách bài nhạc
function displayMusicList(musicArray) {
    musicListElement.innerHTML = '';
    musicArray.forEach((music, index) => {
        const li = document.createElement('li');
        li.textContent = music.title;
        li.onclick = () => loadTrack(index);
        const favoriteHeart = document.createElement('span');
        favoriteHeart.classList.add('heart-icon');
        favoriteHeart.textContent = favoriteTracks.includes(index) ? '❤️' : '🤍'; // Màu tim
        li.appendChild(favoriteHeart);
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
    if (favoriteTracks.length > 0) {
        currentTrackIndex = (currentTrackIndex + 1) % favoriteTracks.length;
        loadTrack(favoriteTracks[currentTrackIndex]);
    } else {
        currentTrackIndex = (currentTrackIndex + 1) % musicList.length;
        loadTrack(currentTrackIndex);
    }
};

// Chuyển đến bài nhạc tiếp theo
nextTrackButton.onclick = () => {
    if (favoriteTracks.length > 0) {
        currentTrackIndex = (currentTrackIndex + 1) % favoriteTracks.length;
        loadTrack(favoriteTracks[currentTrackIndex]);
    } else {
        currentTrackIndex = (currentTrackIndex + 1) % musicList.length;
        loadTrack(currentTrackIndex);
    }
};

// Quay lại bài nhạc trước
prevTrackButton.onclick = () => {
    if (favoriteTracks.length > 0) {
        currentTrackIndex = (currentTrackIndex - 1 + favoriteTracks.length) % favoriteTracks.length;
        loadTrack(favoriteTracks[currentTrackIndex]);
    } else {
        currentTrackIndex = (currentTrackIndex - 1 + musicList.length) % musicList.length;
        loadTrack(currentTrackIndex);
    }
};

// Chức năng thêm bài nhạc vào danh sách yêu thích
favoriteButton.onclick = () => {
    const currentIndex = currentTrackIndex;
    if (favoriteTracks.includes(currentIndex)) {
        favoriteTracks = favoriteTracks.filter(index => index !== currentIndex); // Xóa khỏi danh sách yêu thích
        favoriteButton.querySelector('.heart-icon').textContent = '🤍'; // Đổi màu tim
    } else {
        favoriteTracks.push(currentIndex); // Thêm vào danh sách yêu thích
        favoriteButton.querySelector('.heart-icon').textContent = '❤️'; // Đổi màu tim
    }
    displayMusicList(musicList); // Cập nhật danh sách nhạc hiển thị
};

// Tải bài nhạc đầu tiên khi trang được tải
loadTrack(0);
