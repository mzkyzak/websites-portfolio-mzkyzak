## portfolio Taufiq ikhsan muzaky

Sebuah website portofolio pribadi yang interaktif, futuristik, dan responsif. Dirancang dengan fokus pada animasi antarmuka yang mulus dan pengalaman pengguna (UX) yang menarik tanpa menggunakan *framework* JavaScript berat.

---

## ✨ Fitur Utama

🧑 Hero Section
* Menampilkan nama & personal branding
* Animasi teks mengetik (*Typewriter Effect*)
* CTA (*Call to Action*): Tombol Portfolio & Profile
* *Background* animasi bintang berkedip & efek *spotlight mouse*
* Efek *Fire Glow* animasi yang menyatu dengan *background*

👤 About Me
* Foto profil dengan efek *glow* & denyut (*pulse*)
* Informasi lokasi & pendidikan
* Informasi detail tentang kepribadian & minat
* Statistik jumlah *project* & sertifikat
* Tombol Download CV yang interaktif

💼 Portfolio
* Tab navigasi dinamis tanpa *reload*:
  * Projects
  * Certificates
  * Tech Stack
  * Design Tools
  * Operating System
* *Preview project* dengan *hover effect* premium
* Modal detail *project* lengkap dengan *slider* gambar (Prev/Next)

📋 Certificates
* Tampilan sertifikat rapi & konsisten
* Badge verifikasi & informasi *issuer*
* Animasi muncul perlahan saat di-*scroll* (*Reveal-up*)

🛠 Tech & Tools
* Menampilkan *tools frontend* yang digunakan sehari-hari
* Ikon teknologi yang berdenyut interaktif saat di-*hover*

🎨 Design Tools
* Menampilkan *tools* desain andalan
* *Card* interaktif dengan *hover effect* bayangan

💻 Operating System
* Ikon OS (Windows, Android, Ubuntu, Linux, dll)
* Indikator garis gradien saat di-*hover*

🔗 Social Media
* *Link* aktif ke LinkedIn, Instagram, GitHub, dll
* Ikon otomatis menyesuaikan tema gelap (*invert class*)

✉️ Contact Form
* *Form* kontak aktif dan berfungsi penuh
* Pesan langsung masuk ke Gmail menggunakan FormSubmit (AJAX)
* *Alert* sukses & *error* bawaan (*native*)

🎞 Animasi & UX
* *Custom Keyframes CSS* untuk efek cahaya & kursor
* *Intersection Observer API* (pengganti AOS) untuk animasi *Reveal On Scroll*
* Transisi *smooth* & efek *glassmorphism* (*backdrop-blur*)

📱 Responsive Design
* Tampilan optimal di berbagai ukuran layar (*Desktop, Tablet, Mobile*)

---

## 🧰 Teknologi yang Digunakan

Website ini dibuat menggunakan html,Css,javascript supaya agar ringan dan cepat, tanpa perlu proses *build yang berat*:

* HTML5
* Tailwind CSS (via CDN)
* Vanilla JavaScript (ES6)
* FormSubmit API (Untuk hubungin ke gmail Email)
* Google Fonts (Plus Jakarta Sans & Outfit)

---

## ✏️ Kustomisasi

kalian dapat dengan mudah mengubah isi website ini hanya dengan mengedit file berikut:

* Tampilan & Layout → index.html
* Data (Project, Sertifikat, Tech, Social Media) → data.js
* Email Penerima Pesan → Cari fetch('https://formsubmit.co/ajax/YOUR_EMAIL') di dalam index.html
* File CV → Ganti file /public/CV_Taufiq_ikhsan_muzaky.pdf dengan file CV kamu.
* Aset Gambar → Masukkan gambar ke dalam folder /public

---

## 📦 Cara Install & Menjalankan

Karena website ini tidak menggunakan Node.js/React, kamu tidak perlu menjalankan npm install atau npm start. Sangat mudah!

### 2️⃣ Jalankan Secara Lokal
* Gitclone terlebih dahulu
* Buka folder hasil ekstrak.
* Cukup klik dua kali (buka) file index.html menggunakan *browser* (Chrome/Firefox/Edge).
* Rekomendasi: Gunakan ekstensi Live Server di Visual Studio Code agar perubahan kode bisa langsung terlihat tanpa perlu *refresh* manual.

---

<p align="center">
  <i>Website Portfolio By: <b>mzkyzak</b> © 2026</i><br>
</p>
