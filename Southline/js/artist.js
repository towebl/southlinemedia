let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
};

document.querySelector('#nav-close').onclick = () => {
    navbar.classList.remove('active');
};


// Seacr Form
let searcForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searcForm.classList.add('active');
};


// Window scroll
window.onscroll = () => {
    navbar.classList.remove('active');
};


// Swiper Home
var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



// Swiper Blogs
var swiper = new Swiper(".blogs-slider", {
    loop: true,
    grapCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    }
});





// Swiper Artist
var swiper = new Swiper(".artist-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 50,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
  });