// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// Ketika menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};


// ketika klik diluar elemen

const hb = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hb.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// readmore

document.addEventListener("DOMContentLoaded", function () {
  const readMoreBtn = document.querySelector(".read-more-btn");
  const moreText = document.querySelector(".more-text");

  readMoreBtn.addEventListener("click", function () {
      if (moreText.style.display === "none" || moreText.style.display === "") {
          moreText.style.display = "inline";
          readMoreBtn.textContent = "Tutup";
      } else {
          moreText.style.display = "none";
          readMoreBtn.textContent = "Baca Selengkapnya";
      }
  });
});

let index = 0;
function moveSlide(direction) {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel img');
    const totalSlides = slides.length;
    index += direction;
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    carousel.style.transform = `translateX(${-index * 100}%)`;
}


document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const dropdowns = document.querySelectorAll(".dropdown");

  // Toggle hamburger menu
  hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("active");
  });

  // Toggle dropdown dalam mode mobile
  dropdowns.forEach(dropdown => {
      dropdown.addEventListener("click", function (event) {
          event.stopPropagation(); // Mencegah event bubbling
          this.classList.toggle("active");
      });
  });

  // Klik di luar untuk menutup menu
  document.addEventListener("click", function (event) {
      if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
          navLinks.classList.remove("active");
          dropdowns.forEach(dropdown => dropdown.classList.remove("active"));
      }
  });
});

// Fungsi untuk menampilkan/menyembunyikan menu hamburger
function toggleMenu() {
  document.querySelector(".dropdown").classList.toggle("active");
}

// Fungsi untuk menampilkan/menyembunyikan dropdown saat "Profil" diklik
function toggleDropdown(event) {
  event.preventDefault(); // Mencegah navigasi default
  event.currentTarget.parentElement.classList.toggle("active");
}

document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  let name = document.querySelector("input[name='name']").value;
  let phone = document.querySelector("input[name='phone']").value;
  let message = document.querySelector("textarea[name='message']").value;
  
  let whatsappNumber = "628990834515"; // Ganti dengan nomor WhatsApp tujuan
  let whatsappURL = `https://wa.me/${whatsappNumber}?text=Halo,%20nama%20saya%20${encodeURIComponent(name)}.%20Nomor%20HP:%20${encodeURIComponent(phone)}.%20Pesan:%20${encodeURIComponent(message)}`;
  
  window.open(whatsappURL, "_blank");
});
