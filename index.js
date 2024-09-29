
// Loading
// Initial load preloader
window.addEventListener('load', function () {
    setTimeout(function () {
        document.getElementById('preloader').classList.add('hidden');
    }, 900); // Hide preloader after 3 seconds
});

let preloaderTimeout;

// // Show preloader when a link is clicked
// document.querySelectorAll('a').forEach(link => {
//     link.addEventListener('click', function (e) {
//         document.getElementById('preloader').classList.remove('hidden');

//         // Clear existing timeout if any
//         if (preloaderTimeout) {
//             clearTimeout(preloaderTimeout);
//         }

//         // Set new timeout
//         preloaderTimeout = setTimeout(function () {
//             document.getElementById('preloader').classList.add('hidden');
//         }, 900); // Hide preloader after 3 seconds
//     });
// });




// Display Menu on small screen divices

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');



menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
})

window.addEventListener('scroll', () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active')
});

// Animation on the home images

var swiper = new Swiper(".home-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    effect: 'fade', // Enable fade effect
    fadeEffect: {
      crossFade: true // This allows the previous slide to fade out while the next slide fades in
    },
    speed: 5000, // Transition speed in milliseconds (2000ms = 2 seconds)
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  


var swiper = new Swiper(".room-slider", {
  spaceBetween: 20,
  grabCursor:true,
  loop:true,
  centeredSlides:true,
  autoplay: {
      delay: 3500,
      disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
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
  },
});


var swiper = new Swiper(".gallery-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides:true,
  autoplay: {
      delay: 3500,
      disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 3,
      },
      991: {
          slidesPerView: 4,
      },
  },
});

    var swiper = new Swiper(".review-slider", {
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        },
        effect: 'fade', // Enable fade effect
        fadeEffect: {
        crossFade: true // This allows the previous slide to fade out while the next slide fades in
        },
        speed: 5000, // Transition speed in milliseconds (2000ms = 2 seconds)
    
    });


let accordions = document.querySelectorAll('.faqs .row .content .box');

accordions.forEach(acco =>{
  acco.onclick = () =>{
      accordions.forEach(subAcco => {subAcco.classList.remove('active')});
      acco.classList.add('active');
  }
})

var swiper = new Swiper(".menu-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

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
    },
  });


//   Contact us page

// document.getElementById('order-form').addEventListener('submit', function(e) {
//     e.preventDefault();

//     // Get form values
//     const fullname = document.getElementById('fullname').value;
//     const phone = document.getElementById('phone').value;
//     const email = document.getElementById('email').value;
//     const food = document.getElementById('food').value;
//     const message = document.getElementById('message').value;

//     // Simple validation
//     if (fullname === '' || phone === '' || email === '' || food === '' || message === '') {
//       alert('All fields are required.');
//       return;
//     }

//     if (!validateEmail(email)) {
//       alert('Please enter a valid email address.');
//       return;
//     }

//     if (!validatePhone(phone)) {
//       alert('Please enter a valid phone number.');
//       return;
//     }

//     sendEmail(fullname, phone, email, food, message);
// });

// function validateEmail(email) {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
// }

// function validatePhone(phone) {
//     const re = /^\d{10}$/;
//     return re.test(String(phone));
// }

// const form = document.querySelector('form');

// function sendEmail(fullname, phone, email, food, message) {
//     const bodyMessage = `Full name: ${fullname} <br> Phone Number: ${phone} <br> Email: ${email} <br> Food: ${food} <br> Message: ${message}`;
//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "braydenbrowning85@gmail.com",
//         Password: "21FBE00E6658BFCBC4ED33DA19B53E6D8F16",
//         To: 'braydenbrowning85@gmail.com',
//         From: "braydenbrowning85@gmail.com",
//         Subject: "Food Order",
//         Body: bodyMessage
//     }).then(
//       message => {
//         if (message == "OK") {
//             Swal.fire({
//                 title: "Success!",
//                 text: "Your Order Was Received Successfully!",
//                 icon: "success"
//             }).then(() => {
//                 form.reset(); // Reset the form fields
//             });
//         } else {
//             Swal.fire({
//                 title: "Error!",
//                 text: "There was an issue sending your order. Please try again.",
//                 icon: "error"
//             });
//         }
//       }
//     );
// }

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     // Get form values
//     const fullname = document.getElementById('fullname').value;
//     const phone = document.getElementById('phone').value;
//     const email = document.getElementById('email').value;
//     const food = document.getElementById('food').value;
//     const message = document.getElementById('message').value;

//     sendEmail(fullname, phone, email, food, message);
// });

