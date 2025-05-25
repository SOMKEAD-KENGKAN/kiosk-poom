        // Loading Screen
        window.addEventListener('load', function() {
            setTimeout(() => {
                document.getElementById('loading').classList.add('hidden');
            }, 2000);
        });

        // DateTime Update
        function updateDateTime() {
            const now = new Date();
            const options = {
                year: 'numeric', month: 'long', day: 'numeric',
                hour: '2-digit', minute: '2-digit', second: '2-digit',
                timeZone: 'Asia/Bangkok'
            };
            document.getElementById('datetime').textContent = 
                now.toLocaleDateString('th-TH', options);
        }
        updateDateTime();
        setInterval(updateDateTime, 1000);

        // Navigation
        function showSection(sectionId) {
            // Hide all sections
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Remove active from all nav buttons
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Show selected section
            document.getElementById(sectionId).classList.add('active');
            
            // Add active to clicked button
            event.target.classList.add('active');
        }

        // Slideshow
        let currentSlide = 0;
        let autoplay = true;
        const slides = document.querySelectorAll('.slide');

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function previousSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }

        function toggleAutoplay() {
            autoplay = !autoplay;
            document.getElementById('playBtn').textContent = autoplay ? '⏸️' : '▶️';
        }

        // Auto slideshow
        setInterval(() => {
            if (autoplay) nextSlide();
        }, 4000);

        // Demo Functions
        function showDemo(type) {
            const demos = {
                albums: {
                    title: '🎵 ระบบอัลบั้มเพลง',
                    content: `
                        <p><strong>คุณสมบัติหลัก:</strong></p>
                        <ul style="text-align: left; margin: 15px 0;">
                            <li>✅ แสดงปกอัลบั้มแบบ grid</li>
                            <li>✅ รายชื่อเพลงทั้งหมด</li>
                            <li>✅ เล่นไฟล์ MP3</li>
                            <li>✅ แสดงเวลาเพลง</li>
                            <li>✅ Playlist management</li>
                        </ul>
                        <p>เหมาะสำหรับการจัดแสดงผลงานเพลงแบบครบถ้วน</p>
                    `
                },
                videos: {
                    title: '🎬 ระบบมิวสิควิดีโอ',
                    content: `
                        <p><strong>คุณสมบัติหลัก:</strong></p>
                        <ul style="text-align: left; margin: 15px 0;">
                            <li>✅ Thumbnail แต่ละวิดีโอ</li>
                            <li>✅ เล่นแบบ fullscreen</li>
                            <li>✅ รองรับ MP4, WebM</li>
                            <li>✅ Auto-play options</li>
                            <li>✅ Volume control</li>
                        </ul>
                        <p>รองรับวิดีโอคุณภาพสูง พร้อมระบบควบคุมครบครัน</p>
                    `
                },
                gallery: {
                    title: '🖼️ ระบบแกลเลอรี่ภาพ',
                    content: `
                        <p><strong>คุณสมบัติหลัก:</strong></p>
                        <ul style="text-align: left; margin: 15px 0;">
                            <li>✅ สไลด์โชว์อัตโนมัติ</li>
                            <li>✅ เอฟเฟกต์การเปลี่ยนภาพ</li>
                            <li>✅ รองรับ JPG, PNG</li>
                            <li>✅ Zoom และ pan</li>
                            <li>✅ Caption สำหรับแต่ละภาพ</li>
                        </ul>
                        <p>แสดงภาพผลงานอย่างสวยงามและเป็นระบบ</p>
                    `
                },
                kiosk: {
                    title: '📺 Kiosk Mode',
                    content: `
                        <p><strong>คุณสมบัติหลัก:</strong></p>
                        <ul style="text-align: left; margin: 15px 0;">
                            <li>✅ แสดงผลเต็มหน้าจอ</li>
                            <li>✅ ซ่อน browser controls</li>
                            <li>✅ Auto-return หน้าหลัก</li>
                            <li>✅ Touch-friendly interface</li>
                            <li>✅ รองรับจอขนาดใหญ่</li>
                        </ul>
                        <p>เหมาะสำหรับ Digital Signage และ Kiosk Information</p>
                    `
                }
            };
            showModal(demos[type].title, demos[type].content);
        }

        function showAlbumDetail(albumName) {
            showModal(
                `🎵 ${albumName}`,
                `
                <p><strong>รายละเอียดอัลบั้ม:</strong></p>
                <div style="text-align: left; margin: 15px 0;">
                    <p>🎼 ชื่ออัลบั้ม: ${albumName}</p>
                    <p>📅 ปีที่ออก: 2567-2569</p>
                    <p>🎵 จำนวนเพลง: 8-20 เพลง</p>
                    <p>⏱️ ระยะเวลารวม: 35-65 นาที</p>
                    <p>🎨 ประเภท: Pop, Rock, Ballad</p>
                </div>
                <p>💡 ในระบบจริงจะมีการเล่นเพลง แสดงปกอัลบั้ม และรายชื่อเพลงทั้งหมด</p>
                `
            );
        }

        function showVideoDetail(videoName) {
            showModal(
                `🎬 ${videoName}`,
                `
                <p><strong>รายละเอียดวิดีโอ:</strong></p>
                <div style="text-align: left; margin: 15px 0;">
                    <p>🎬 ชื่อวิดีโอ: ${videoName}</p>
                    <p>📅 วันที่ผลิต: 2567-2569</p>
                    <p>⏱️ ระยะเวลา: 3-12 นาที</p>
                    <p>📱 คุณภาพ: 4K, 1080p, 720p</p>
                    <p>🎵 เสียงประกอบ: Stereo, 5.1</p>
                </div>
                <p>💡 ในระบบจริงจะเล่นวิดีโอแบบ fullscreen พร้อมระบบควบคุม</p>
                `
            );
        }

        function showModal(title, content) {
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalBody').innerHTML = content;
            document.getElementById('modal').style.display = 'block';
        }

        function closeModal() {
            document.getElementById('modal').style.display = 'none';
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('modal');
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }

        // Prevent right-click
        document.addEventListener('contextmenu', e => e.preventDefault());

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowLeft') previousSlide();
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === ' ') {
                e.preventDefault();
                toggleAutoplay();
            }
        });

        console.log('🎨 Digital Art Gallery Demo Ready!');
        console.log('📧 Contact: your-email@example.com');
        console.log('🌐 Made with ❤️ in Thailand');
