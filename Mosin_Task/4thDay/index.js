const students = [
  {
    id: "1",
    name: "Sneha",
    "Mobile no": "9685748574",
    age: 21,
    img: "img/sneha.jpeg"
  },
  {
    id: "2",
    name: "Mosin",
    "Mobile no": "9685748574",
    age: 22,
    img: "img/mosin.jpg"
  },
  {
    id: "3",
    name: "Hrushi",
    "Mobile no": "9785748574",
    age: 25,
    img: "img/hrushi.jpeg"
  },
  {
    id: "4",
    name: "Rohit",
    "Mobile no": "9678744741",
    age: 30,
    img: "img/rohit.jpeg"
  },
  {
    id: "5",
    name: "Prajwal",
    "Mobile no": "9010457869",
    age: 26,
    img: "img/prajwal.jpeg"
  },
  {
    id: "6",
    name: "Rahul",
    "Mobile no": "9495784578",
    age: 25,
    img: "img/rahul.png"
  },
  
  {
    id: "7",
    name: "Akshata",
    "Mobile no": "9230457869",
    age: 29,
    img: "img/akshata.jpeg"
  }
];


const container = document.getElementById("cardContainer");

students.forEach(item => {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";
  slide.innerHTML = `
    <div class="student-card">
    <img src="${item.img}" alt="${item.name}" class="profile-img" />
      <h2>${item.name}</h2>
      <p><strong>ID:</strong> ${item.id}</p>
      <p><strong>Mobile No:</strong> ${item["Mobile no"]}</p>
      <p><strong>Age:</strong> ${item.age}</p>
      <button class="message-btn">Message</button>
    </div>
  `;
  container.appendChild(slide);
});

// Initialize Swiper
new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});
// C:\Users\Sneha\Desktop\MERN\Mosin_Task\4thDay\img