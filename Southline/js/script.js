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

document.querySelector('#close-search').onclick = () => {
    searcForm.classList.remove('active');
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
    speed: 900,
    parallax: true,
    slidesPerView: "auto",
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
});




// Popup booking
window.addEventListener('load', () => {
    const bookForm = document.getElementById('book-form');
    const removeBtn = document.getElementById('remove-btn');

    bookForm.classList.remove('hidden');

    removeBtn.addEventListener('click', () => {
      bookForm.classList.add('hidden');
    });

    document.getElementById('booking-form').addEventListener('submit', (event) => {
      event.preventDefault();
      // You can add your code here to handle the form submission
      // For example, you can retrieve the form values like this:
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const date = document.getElementById('date').value;
      const message = document.getElementById('message').value;

      // Do something with the form values (e.g., send them to a server)
      console.log(name, email, date, message);

      // Clear the form fields
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('date').value = '';
      document.getElementById('message').value = '';

      // Hide the form
      bookForm.classList.add('hidden');
    });
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
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
  });