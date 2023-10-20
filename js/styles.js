let menu = document.querySelector(".menu")
let menuBtn = document.querySelector(".header-icon")
let menuBtnIcon = document.querySelector(".header-icon i")
menuBtn.addEventListener("click", function(){
    if (menuBtnIcon.classList.contains("fa-bars")){
        menu.style.left = "0"
        menuBtnIcon.classList = "fa fa-times"
    }
    else {
        menu.style.left = "-270px"
        menuBtnIcon.classList = "fa fa-bars"
    }
})


var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        992: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
        576: {
            slidesPerView: 2,
            spaceBetween: 30
          },
        0: {
            slidesPerView: 1,
            spaceBetween: 30
          }
    }
  });