// Gallery data สำหรับ demo บน GitHub Pages
const galleryData = {
    artist: {
        name: "Demo Artist - นักเพลงตัวอย่าง",
        bio: "นี่คือการสาธิตระบบแสดงผลงานศิลปินแบบดิจิทัล สามารถปรับแต่งเนื้อหาได้ตามต้องการ และรองรับการแสดงผลบนทุกอุปกรณ์",
        photo: "https://picsum.photos/400/400?random=1&blur=1"
    },
    albums: [
        {
            id: "album1",
            name: "อัลบั้มตัวอย่างที่ 1",
            year: "2567",
            description: "นี่คือการสาธิตการแสดงอัลบั้มเพลง พร้อมรายชื่อเพลงและปกอัลบั้ม",
            cover: "https://picsum.photos/300/300?random=2",
            tracks: [
                { name: "เพลงตัวอย่าง 1", file: "#", duration: "3:45" },
                { name: "เพลงตัวอย่าง 2", file: "#", duration: "4:12" },
                { name: "เพลงตัวอย่าง 3", file: "#", duration: "3:28" },
                { name: "เพลงตัวอย่าง 4", file: "#", duration: "4:05" }
            ]
        },
        {
            id: "album2",
            name: "อัลบั้มตัวอย่างที่ 2",
            year: "2568",
            description: "ผลงานชิ้นที่สองที่แสดงให้เห็นถึงความหลากหลายของเนื้อหา",
            cover: "https://picsum.photos/300/300?random=3",
            tracks: [
                { name: "บทเพลงใหม่", file: "#", duration: "4:05" },
                { name: "ความทรงจำ", file: "#", duration: "3:52" },
                { name: "วันพรุ่งนี้", file: "#", duration: "3:33" }
            ]
        },
        {
            id: "album3",
            name: "อัลบั้มตัวอย่างที่ 3",
            year: "2568",
            description: "แสดงความสามารถในการจัดการหลายอัลบั้มในระบบเดียวกัน",
            cover: "https://picsum.photos/300/300?random=4",
            tracks: [
                { name: "เพลงพิเศษ", file: "#", duration: "5:15" },
                { name: "ดนตรีผสมผสาน", file: "#", duration: "3:44" }
            ]
        }
    ],
    videos: [
        {
            id: "mv1",
            title: "มิวสิควิดีโอตัวอย่าง 1",
            description: "การสาธิตการแสดงมิวสิควิดีโอในระบบ",
            file: "https://sample-videos.com/zip/10/mp4/SampleVideo_360x240_1mb.mp4",
            thumbnail: "https://picsum.photos/400/225?random=5"
        },
        {
            id: "mv2",
            title: "มิวสิควิดีโอตัวอย่าง 2",
            description: "แสดงการจัดการหลายวิดีโอในแกลเลอรี่",
            file: "https://sample-videos.com/zip/10/mp4/SampleVideo_640x360_1mb.mp4",
            thumbnail: "https://picsum.photos/400/225?random=6"
        },
        {
            id: "mv3",
            title: "Behind The Scenes",
            description: "เบื้องหลังการผลิต - ตัวอย่างเนื้อหาเสริม",
            file: "https://sample-videos.com/zip/10/mp4/SampleVideo_720x480_1mb.mp4",
            thumbnail: "https://picsum.photos/400/225?random=7"
        }
    ],
    gallery: [
        "https://picsum.photos/800/600?random=8",
        "https://picsum.photos/800/600?random=9",
        "https://picsum.photos/800/600?random=10",
        "https://picsum.photos/800/600?random=11",
        "https://picsum.photos/800/600?random=12",
        "https://picsum.photos/800/600?random=13"
    ]
};

// เพิ่มการจัดการเสียงตัวอย่าง
function playTrack(track) {
    if (track.file === "#") {
        // แสดงการแจ้งเตือนสำหรับ demo
        showDemoAlert("🎵 นี่คือการสาธิต", "ในระบบจริงจะเล่นไฟล์เสียงที่อัพโหลด");
        return;
    }
    
    // โค้ดเดิมสำหรับเล่นเสียง...
}

function showDemoAlert(title, message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'demo-alert';
    alertDiv.innerHTML = `
        <div class="demo-alert-content">
            <h3>${title}</h3>
            <p>${message}</p>
            <button onclick="this.parentElement.parentElement.remove()">ตกลง</button>
        </div>
    `;
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
        if (alertDiv.parentElement) {
            alertDiv.remove();
        }
    }, 3000);
}

// ที่เหลือของโค้ดเดิม...