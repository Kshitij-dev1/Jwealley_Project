var swiper = new Swiper(".mySwiperNewProduct", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000, // Auto-slide every 3 seconds
      disableOnInteraction: false, // Keeps autoplay active after user interaction
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      //   dynamicBullets: true,
    },
    centeredSlides: true, // Center the active slide

    slidesPerGroup: 1, // Moves slides one by one
    speed: 1000, // Smooth transition duration (in ms)
    effect: "slide",
    breakpoints: {
        640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      740: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1224: {
        slidesPerView: 5 /*Product per slide*/,
        spaceBetween: 20 /*Gap*/,
      },
    },
  });

  //   Testimonials==============
  var swiper = new Swiper(".mySwiperTest", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000, // Auto-slide every 3 seconds
      disableOnInteraction: false, // Keeps autoplay active after user interaction
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      //   dynamicBullets: true,
    },
    centeredSlides: true, // Center the active slide

    slidesPerGroup: 1, // Moves slides one by one
    speed: 1000, // Smooth transition duration (in ms)
    effect: "slide",
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      1024: {
        slidesPerView: 3 /*Product per slide*/,
        spaceBetween: 20 /*Gap*/,
      },
    },
  });

//   header fixed

window.addEventListener('scroll',function(){
    var header = document.getElementById('header');
    if(window.scrollY>160){
        header.classList.add('head-fix');

    }else{
        header.classList.remove('head-fix');
    }
});
