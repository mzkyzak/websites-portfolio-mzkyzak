const listProyek = [
  {
    id: 1,
    title: "Terdeteksi Kamera",
    subtitle: "Mediapipe Hand Terdeteksi Camera",
    img: "public/Project mediapipe_kamera.png", 
    images: ["public/Project mediapipe_kamera.png"], 
    description: "Sistem ini menggunakan deteksi wajah untuk mengenali Gestur Tangan secara real-time, serta MediaPipe Hand Pose untuk mendeteksi tangan dan posisi jari dengan presisi. Selain itu juga Mampu mengenali berbagai gestur tangan, termasuk gestur yang mewakili nama Saya atau simbol tangan tertentu.",
    link: "https://github.com/mzkyzak/mediapipe-hand-terdeteksi-kamera.git",
  },
  {
    id: 2,
    title: "Website transaksi_Canva",
    subtitle: "CRUD Dengan Php dan sql",
    img: "public/CRUDlogin.png", 
    images: ["public/CRUDadmin.png", "public/CRUDadmin2.png", "public/CRUDuser.png"], 
    description: "Website ini merupakan sistem penjualan Kolase Canva berbasis PHP, MySQL, dan CSS dengan tampilan menarik. Sistem CRUD memungkinkan pengguna untuk membeli kolase Canva dengan mudah, sekaligus memudahkan admin dalam mengelola data melalui dashboard untuk pencatatan, pengeditan, dan penghapusan data secara efisien.",
    link: "https://github.com/mzkyzak/Tugas-crud-database-transaksi_canva.git",
  },
  {
    id: 3,
    title: "Dinozak",
    subtitle: "Game engine 2D",
    img: "public/projectwelcome.jpg",
    images: ["public/projectlevel.jpg", "public/project1.png", "public/project2.png", "public/project3.jpg", "public/project4.jpg", "public/project5.jpg", "public/project6.jpg"],
    description: "Project ini mengembangkan game 2D menggunakan Unity dengan sistem level bertahap hingga level 6. Di setiap level, pemain harus mengalahkan Enemy terlebih dahulu agar memudahkan Dino dapat menuju telur dan memenangkan level tersebut. Jika levelnya meningkat Bisa mendapatkan kesulitan Dan memberikan tantangan progresif dan pengalaman bermain yang seru bagi pemain.",
  },
  {
    id: 4,
    title: "Home_zak",
    subtitle: "Sketchware",
    img: "public/Homezak.png",
    images: ["public/Homezak.png"],
    description: "HomeZak adalah aplikasi Android yang dikembangkan menggunakan Sketchware dengan fokus pada antarmuka yang menarik dan fungsional. Aplikasi ini menyediakan browser internet dan home screen yang memungkinkan akses cepat ke berbagai platform sosial media, termasuk Instagram, LinkedIn, YouTube, Telegram, Facebook, TikTok, WhatsApp, dan GitHub. Dengan begitu, pengguna dapat menjelajahi Broswer Internet dalam satu tempat secara mudah dan efisien.",
    link: "https://github.com/mzkyzak/Homezak.git",
  },
  {
    id: 5,
    title: "App_Lock",
    subtitle: "Sketchware",
    img: "public/App_lock.jpg",
    images: ["public/App_lock.jpg"],
    description: "AppLock adalah aplikasi terkunci Dikembangkan menggunakan Sketchware Dengan berfokus antara load stres cpu/gpu agar perangkat pengguna mendapatkan lag and crash dan tidak dapat keluar dari aplikasi ini, tanpa memasukkan password yang benar, Jika passwordnya benar aplikasi ini bakal Keluar secara otomatis. Dan jika aplikasi ini tidak mampu di wajibkan reboot agar kembali normal.",
    link: "https://github.com/mzkyzak/App-lock-.git",
  },
  {
    id: 6,
    title: "Hack_camera",
    subtitle: "Kali Linux",
    img: "public/Hack_camera.jpg",
    images: ["public/Hack_camera.jpg"],
    description: "Hack camera Adalah link phising menggunakan Shell. Sebuah link phising itu, kaya Sebuah Website zoom meeting. jika ada pengguna memberikan izin akses kamera di website itu tanpa verifikasi yang jelas. kamera bakal otomatis ke photo di dalam folder Hack camera atau Di dalam photo files.",
    link: "https://github.com/mzkyzak/Hack-camera.git",
  },
];

const listTools = [
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind", logo: "https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Android Studio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
  { name: "Sketchware", logo: "./public/sketchware.jpg" },
  { name: "Visual Code", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
];

const listOS = [
  { name: "Windows", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
  { name: "Android", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
  { name: "Ubuntu", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/UbuntuCoF.svg" },
  { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
];

const listDesignTools = [
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Unity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
  { name: "Canva", logo: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg" }, 
  { name: "Lightroom", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg" },
  { name: "Capcut", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Capcut-icon.svg" },
];

const listCertificates = [
  { 
    id: 1, 
    title: "Membangun aplikasi Gen Ai Dengan microsoft azure", 
    issuer: "Dicoding Indonesia", 
    img: "public/sertifikat_ microsoft_azure.jpg", 
    date: "01-03-2026" 
  },
  { 
    id: 2, 
    title: "Belajar Microsoft Fabric", 
    issuer: "Dicoding Indonesia", 
    img: "public/sertifikat_microsoft_belajar.jpg", 
    date: "28-02-2026" 
  },
   { 
    id: 3, 
    title: "AI READY ASEAN", 
    issuer: "ASEAN FOUNDATION", 
    img: "public/certificate_asean.jpg", 
    date: "20-02-2026" 
  },
   { 
    id: 4, 
    title: "DFS 48 Design: UI/UX", 
    issuer: "Dibimbing Id", 
    img: "public/certificate_Ui-Ux_11-feb.jpg", 
    date: "11-02-2026" 
  },
   { 
    id: 5, 
    title: "Back End", 
    issuer: "Myskill", 
    img: "public/certificate_backendmyskill-19-des.jpg", 
    date: "19-01-2026" 
  },
   { 
    id: 6, 
    title: "Data Analyst", 
    issuer: "MySkill", 
    img: "public/certificate_datamyskill-13-jan.jpg", 
    date: "13-01-2026" 
  },
   { 
    id: 7, 
    title: "DSF 46 Back-end", 
    issuer: "Dibimbing Id", 
    img: "public/certificate_backend_19-des.jpg", 
    date: "19-12-2025" 
  },
    { 
    id: 10, 
    title: "DSF 46 Data Enginner", 
    issuer: "Dibimbing Id", 
    img: "public/certificate_data_12-des.jpg", 
    date: "12-12-2025"  
  },
    { 
    id: 11, 
    title: "DSF 46 Design: UI/UX", 
    issuer: "Dibimbing Id", 
    img: "public/certificate_12-des.jpg", 
    date: "12-12-2025" 
  },
   { 
    id: 12, 
    title: "Memulai Pemrograman java", 
    issuer: "Dicoding Indonesia", 
    img: "public/sertifikat_java.jpg", 
    date: "11-12-2025" 
  },
   { 
    id: 13, 
    title: "Belajar Ai", 
    issuer: "Dicoding Indonesia", 
    img: "public/sertifikat belajar_ai.jpg", 
    date: "30-10-2025" 
  },
    { 
    id: 14, 
    title: "Virtual Bootcamp UNSIA x UNAS", 
    issuer: "Universitas Siber Asia", 
    img: "public/Sertifikat-Cyber_Security.jpg", 
    date: "16-08-2024" 
  },
    { 
    id: 15, 
    title: "Bimasakti Cup 1 Chapter PU-PK ", 
    issuer: "founder Bimasakti Foundation.", 
    img: "public/SMPN 23 JAKARTA - Taufiq ikhsan muzaky.jpg", 
    date: "24-03-2024" 
  },
    { 
    id: 16, 
    title: "Jambore Ranting Pramuka", 
    issuer: "Gerakan Pramuka tingkat kwarran Pademangan", 
    img: "public/sertifikat_Jambore-ragunan.jpg", 
    date: "19-11-2023" 
  },
    { 
    id: 17, 
    title: "Ujian PMR Tingkat madya", 
    issuer: "PMI Kota Jakarta utara", 
    img: "public/sertifikat_ujian-pmr.jpg", 
    date: "02-10-2023" 
  },
    { 
    id: 18, 
    title: "Latihan Gabungan Tingkat madya", 
    issuer: "SMP NURUL IMAN ARHANUD", 
    img: "public/sertifikat_Latihan-pmr-2022.jpg", 
    date: "10-10-2022" 
  },
    { 
    id: 19, 
    title: "ANBK", 
    issuer: "Smpn 23 Jakarta", 
    img: "public/sertifikat_ANBK-2022.jpg", 
    date: "20-09-2022" 
  },
    { 
    id: 20, 
    title: "UKBI", 
    issuer: "Smpn 23 Jakarta", 
    img: "public/sertifikat_UKBI-2022.jpg", 
    date: "05-09-2022" 
  },
];

const listSocials = [
  { name: "LinkedIn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg", url: "https://www.linkedin.com/in/taufiq-ikhsan-muzaky-42ab26388" },
  { name: "WhatsApp", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg", url: "https://wa.me/6285810192529" },
  { name: "Instagram", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg", url: "https://www.instagram.com/mzky_zak?igsh=eWN2cjlzeXhuMmR0" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", url: "https://github.com/mzkyzak" },
  { name: "TikTok", logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Ionicons_logo-tiktok.svg", url: "https://www.tiktok.com/@mzky896?_r=1&_t=ZS-94NhHqsvv1R" },
  { name: "Youtube", logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg", url: "https://youtube.com/@muzaky_2023?si=oe32_JqtG5jXNakL" },
];