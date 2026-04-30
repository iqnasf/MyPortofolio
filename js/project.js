// File: js/projects-data.js
const projectsData = [
  {
    id: "peramalan-umkm",
    title: "Forecasting System for MSME Growth in Bangkalan Regency",
    icon: "fa-solid fa-graduation-cap",
    description:
      "A web-based platform designed to forecast the growth in the number of Micro, Small, and Medium Enterprises (MSMEs) across 18 districts in Bangkalan Regency. The system utilizes the Fuzzy Time Series method based on historical data and is developed to assist local governments and policymakers in regional economic planning and decision-making.",
    tech_stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github_link: "https://github.com/iqnasf/Sistem-Peramalan-Pertumbuhan-Jumlah-UMKM-di-Kabupaten-Bangkalan.git", // Ganti dengan link asli
    main_image: "Image/Peramalan/home.png", // Siapkan gambar screenshot project

    features: [
      {
        title: "1. Login",
        desc: "The login page is used to access the system.",
        img: "Image/Peramalan/login.png", // Ganti dengan path gambarmu
      },
      {
        title: "2. Home Screen",
        desc: "The home screen (as shown in the image above) provides a brief explanation about the micro, small, and medium enterprises (MSMEs). Additionally, there is a sidebar with the 18 districts in Bangkalan Regency, and when clicked, it displays historical data on the number of UMKM along with growth forecasts for each district.",
        img: "Image/Peramalan/kec.png",
      },
      {
        title: "3. Create, Read, Update, Delete (CRUD) Data Historis",
        desc: "The system allows administrators to manage historical data on the number of MSMEs per district across different years, serving as input for the forecasting algorithm. The CRUD functionality enables admins to easily add, view, update, and delete this historical data.",
        img: "Image/Peramalan/crud.png",
      },
      {
        title: "4. Forecasting Using Fuzzy Time Series Method",
        desc: "The main feature of this system is the calculation process of the Fuzzy Time Series algorithm to forecast the growth in the number of MSMEs. Users can view the steps of the calculation starting from the formation of the Universe of Discourse, formation of fuzzy sets, rule formation, and finally the defuzzification process that generates predictions for MSME growth in each district.",
        img: "Image/Peramalan/peramalan.png",
      },
      {
        title: "5. Chart of Comparison Between Actual Data and Prediction Results",
        desc: "The main feature of this system is the calculation process of the Fuzzy Time Series algorithm to forecast the growth in the number of MSMEs. Users can view the steps of the calculation starting from the formation of the Universe of Discourse, formation of fuzzy sets, rule formation, and finally the defuzzification process that generates predictions for MSME growth in each district.",
        img: "Image/Peramalan/grafik.png",
      },
    ],
  },
  {
    id: "cinema-web",
    title: "Cinema",
    icon: "fa-solid fa-stopwatch",
    description: "A website designed to facilitate film enthusiasts in accessing movie information and cinema services in real-time.",
    tech_stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github_link: "https://github.com/iqnasf/Cinema.git", // Ganti dengan link asli
    main_image: "Image/Cinema/home.png", // Siapkan gambar screenshot project
    features: [
      {
        title: "1. Login",
        desc: "The login page is used to access the system, offering two user roles for authentication: login as an admin or login as a standard user",
        img: "Image/Cinema/login.png", // Ganti dengan path gambarmu
      },
      {
        title: "2. Home Screen",
        desc: "When successfully logged in as a user, they will be directed to the home page which displays a list of movies currently showing at the cinema along with their showtimes. Users can select a movie to view its details. When accessing the view details button, they will be redirected to a page that provides a detailed explanation of the movie, including its synopsis, genre, duration, rating, and showtimes at the cinema. Additionally, users can view trailers and purchase movie tickets.",
        img: "Image/Cinema/film.png",
      },
      {
        title: "3. Admin Screen",
        desc: "When logging in as an admin, there are features for creating, reading, updating, and deleting data for admins, users, movies, and theater locations.",
        img: ["Image/Cinema/dataadmin.png", "Image/Cinema/user.png", "Image/Cinema/datafilm.png", "Image/Cinema/poster.png", "Image/Cinema/bioskop.png"],
      },
    ],
  },
  {
    id: "ppdb",
    title: "New Student Admission",
    icon: "fa-solid fa-stopwatch",
    description: "A website designed to facilitate schools in the registration and selection process for new students. It also makes it easier for students to register without needing to visit the institution.",
    tech_stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github_link: "https://github.com/iqnasf/Penerimaan-Siswa-Baru.git", // Ganti dengan link asli
    main_image: "Image/PPDB/home.png", // Siapkan gambar screenshot project
    features: [
      {
        title: "1. Login",
        desc: "The login page is used to access the system, offering two user roles for authentication: login as an admin or login as a standard user.",
        img: "Image/PPDB/login.png", // Ganti dengan path gambarmu
      },
      {
        title: "2. Home Screen",
        desc: "When successfully logged in as a user, they will be directed to the home page where they can fill out the registration form, which includes their personal information, parent's information, and academic records. After submitting the form, users can view their registration confirmation, which contains their personal information.",
        img: ["Image/PPDB/user1.png", "Image/PPDB/user2.png", "Image/PPDB/3.png", "Image/PPDB/4.png"],
      },
      {
        title: "3. Admin Screen",
        desc: "When logging in as an admin, there are features for creating, reading, updating, and deleting data for admins, users, and other relevant information.",
        img: ["Image/PPDB/dataadmin.png", "Image/PPDB/datauser.png", "Image/PPDB/formulir.png", "Image/PPDB/export.png"],
      },
    ],
  },
  {
    id: "resto",
    title: "Restaurant Management System",
    icon: "fa-solid fa-stopwatch",
    description: "A digital platform designed to speed up, automate, and simplify culinary business operations. It makes it easier for cashiers to record customer purchases and assists administrators in generating reports ",
    tech_stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github_link: "https://github.com/iqnasf/Restoran.git", // Ganti dengan link asli
    main_image: "Image/Resto/home.png", // Siapkan gambar screenshot project
    features: [
      {
        title: "1. Login",
        desc: "The login page is used to access the system, offering three user roles for authentication: login as an admin, cashier, or standard user.",
        img: "Image/Resto/awal.png",
      },
      {
        title: "2. Register",
        desc: "If the user does not have an account, they can register by filling out the registration form which includes their personal information. After successful registration, the user can log in using their newly created account.",
        img: "Image/Resto/Register.png",
      },
      {
        title: "3. User Home Screen",
        desc: "When successfully logged in as a user, they will be directed to the home page which displays a list of available menu items.",
        img: "Image/Resto/homeuser.png",
      },
      {
        title: "4. Cashier Screen",
        desc: "When logging in as a cashier, they will be directed to the cashier screen to record customer orders and process payments directly.",
        img: "Image/Resto/homekasir.png",
      },
      {
        title: "5. Admin Screen",
        desc: "When logging in as an admin, there are features for creating, reading, updating, and deleting data for admins, users, and other relevant information.",
        img: ["Image/Resto/homeadmin1.png", "Image/Resto/datamenu.png", "Image/Resto/laporan.png"],
      },
    ],
  },
];
