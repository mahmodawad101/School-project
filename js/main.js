// importing wow.js library
new WOW().init();




// loop on nav links
let navLinks = document.querySelectorAll(".nav li");
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    navLinks.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

// swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// events on scroll
let header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  if(window.scrollY >= 100){
    header.classList.add("scroll")
  }else{
    header.classList.remove("scroll")
  }
});

// display lis in mobile
let navList = document.querySelector(".nav");
let icon = document.querySelector(".ic i");
icon.addEventListener('click',function(){
  navList.classList.toggle("ul-active")
})