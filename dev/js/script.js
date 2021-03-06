// ========================================
// IMG > TO > SVG
// --------------------
// jQuery('img.svg').each(function () {
//     var $img = jQuery(this);
//     var imgID = $img.attr('id');
//     var imgClass = $img.attr('class');
//     var imgURL = $img.attr('src');

//     jQuery.get(imgURL, function (data) {
//         // Get the SVG tag, ignore the rest
//         var $svg = jQuery(data).find('svg');
//         // Add replaced image's ID to the new SVG
//         if (typeof imgID !== 'undefined') {
//             $svg = $svg.attr('id', imgID);
//         }
//         // Add replaced image's classes to the new SVG
//         if (typeof imgClass !== 'undefined') {
//             $svg = $svg.attr('class', imgClass + ' replaced-svg');
//         }
//         // Remove any invalid XML tags as per http://validator.w3.org
//         $svg = $svg.removeAttr('xmlns:a');
//         // Replace image with new SVG
//         $img.replaceWith($svg);
//     }, 'xml');
// });
// --------------------
// END IMG > TO > SVG
// ========================================
// SCROLL
// $(window).scroll(function () {
//     var top2 = $(document).scrollTop();
//     if (top2 > 160) {
//         $(".header__fixed").slideDown();
//     } else if (top2 < 160) {
//         $(".header__fixed").slideUp();
//     }
// });
// END SCROLL
// ========================================

// var windowWidthSwiper = document.documentElement.clientWidth;
// ========================================
// ========================================

// --------------------
// BLOCK HEADER
const bottom__slide_left = new Swiper('.bottom__slide_left', {
  slidesPerView: 1,
  loop: false,
  // spaceBetween: 3000,
  effect: "fade",
  // autoplay: true,
  speed: 800,
});

const bottom__slide_right = new Swiper('.bottom__slide_right', {
  slidesPerView: 1,
  loop: false,
  // spaceBetween: 1500,
  effect: "fade",
  // autoplay: true,
  speed: 800,
});
// END BLOCK HEADER
// --------------------
// --------------------
// REVIEWS

const bl_reviews__slider = new Swiper('.bl_reviews__slider', {
  slidesPerView: 1,
  loop: false,
  // spaceBetween: 1500,
  // effect: "fade",
  // autoplay: true,
  speed: 800,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// END REVIEWS
// --------------------
// --------------------
// TICKER
const bl_ticker__slider = new Swiper('.bl_ticker__slider', {
  slidesPerView: "auto",
  // spaceBetween: 1500,
  freeMode: {
    enabled: true,
    sticky: true,
    momentumBounce: true,
    minimumVelocity: 0,
  },
  autoplay: {
    delay: 0,
    disableOnInteraction: false, // ?????? ?????????????? ??????, ?????????? ???????????????????????????????? autoplay ?????????? ????????????????????????????
    pauseOnMouseEnter: true,
  },
  speed: 3000,
  loop: true,
  // cssMode: true,
  // on: {
  //   init() {
  //     this.el.addEventListener('mouseenter', () => {
  //       this.autoplay.stop();
  //     });

  //     this.el.addEventListener('mouseleave', () => {
  //       this.autoplay.start();
  //     });
  //   }
  // },
});

// $('.bl_ticker__slider').on('mouseover', function () {
//   bl_ticker__slider.autoplay.stop();
// });
// $('.bl_ticker__slider').on('mouseout', function () {
//   bl_ticker__slider.autoplay.start();
// });
// END TICKER
// --------------------
// --------------------
// SEE WHAT
const bl_see_what__slider = new Swiper(".bl_see_what__slider", {
  init: false,
  spaceBetween: 0,
  watchOverflow: true,
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 2,
    },
    1201: {
      slidesPerView: "auto",
    },
  },
  // on: {
  //   init: function () {
  //     toggleWidth();
  //   },
  //   resize: function () {
  //     toggleWidth();
  //   },
  // },
});

bl_see_what__slider.init();

// function toggleWidth(e) {
//   const fieldValueWidth = document.querySelector(".bl_see_what");
//   // fieldValueWidth.innerText = window.innerWidth + " px";
// }
// END  SEE WHAT
// --------------------
// --------------------
// TAILORED
const bl_tailored__slider = new Swiper('.bl_tailored__slider', {
  slidesPerView: "auto",
  freeMode: true,
  speed: 800,
  loop: true,
  spaceBetween: 60,
  autoHeight: true,
  breakpoints: {
    320: {
      spaceBetween: 30,
      slidesPerView: 1,
      freeMode: false,
    },
    769: {
      spaceBetween: 60,
      slidesPerView: "auto",
      freeMode: true,

    },
    1201: {
      slidesPerView: "auto",
    },
  },
});
// END TAILORED
// --------------------
// --------------------


// BLOCK BRANCHES
// const swiper_bl_branches = new Swiper('.bl_branches__swiper', {
//     loop: false,
//     slidesPerView: 3,
//     // spaceBetween: 3000,
//     // effect: "fade",
//     // pagination: {
//     //   el: '.swiper-pagination',
//     // },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
//     speed: 800,
//     spaceBetween: 30,
//     scrollbar: {
//         el: '.swiper-scrollbar',
//         draggable: true
//     },
//     breakpoints: {
//         320: {
//             // slidesPerView: 'auto',
//             spaceBetween: 10,
//         },
//         // 500: {
//         //   // slidesPerView: 3,
//         //   spaceBetween: 10,

//         // },
//         1024: {
//             spaceBetween: 20,

//         },
//         1200: {
//             spaceBetween: 30,
//         },
//     },
// });
// END BLOCK BRANCHES
// --------------------
// --------------------
// SERVICE IN
// const swiper_bl_service_in__slider = new Swiper('.bl_service_in__swiper', {
//     loop: false,
//     slidesPerView: 1,
//     spaceBetween: 3000,
//     // effect: "fade",
//     pagination: {
//         el: '.swiper-pagination',
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     speed: 800,
//     spaceBetween: 30,
// });

// --------------------
// ABOUT SPEC
// const bl_about_spec__swiper__swiper = new Swiper('.bl_about_spec__swiper', {
//     loop: false,
//     slidesPerView: 4,
//     spaceBetween: 3000,
//     // pagination: {
//     //   el: '.swiper-pagination',
//     // },
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     speed: 800,
//     spaceBetween: 30,
//     autoHeight: true,
//     breakpoints: {
//         320: {
//             slidesPerView: 2,
//             spaceBetween: 10,

//         },
//         768: {
//             slidesPerView: 3,
//             spaceBetween: 20,

//         },
//         1024: {
//             slidesPerView: 4,
//             spaceBetween: 30,

//         },
//     }

// });


// END E APPOINTMENT
// --------------------
// --------------------










