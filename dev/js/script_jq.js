$(document).ready(function () {

  // ========================================
  // VARIABLES
  var windowWidth = $(window).width();
  // END VARIABLES
  // ========================================
  // HEADER 
  // --------------------
  // --------------------
  // BURGER DESKTOP
  $('.header__burger').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.header__mobile').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.block_close').click(function (e) {
    e.preventDefault();
    $('.header__burger').removeClass('active');
    $('.header__mobile').removeClass('active');
    $('body').removeClass('lock');
  });

  // $('.header__menu_desktop .menu_desktop__content a').click(function (e) {
  //   e.preventDefault();
  //   $('.burger_btn').removeClass('active');
  //   $('.header__menu_desktop').removeClass('active');
  //   $('body').removeClass('lock');
  // });
  // END BURGER DESKTOP
  // --------------------
  // --------------------
  // REMOVE CLASS ВНЕ БЛОКА
  // $(document).mouseup(function (e) {
  //   var div = $(".header__menu_more > ul ");
  //   if (!div.is(e.target) // если клик был не по нашему блоку
  //     &&
  //     div.has(e.target).length === 0) { // и не по его дочерним элементам
  //     $('.header__menu_more > a').next().removeClass('active');
  //     // скрываем его
  //   }
  // });
  // END REMOVE CLASS ВНЕ БЛОКА
  // --------------------
  // END MENU MORE
  // --------------------
  // --------------------
  // END HEADER
  // ========================================
  // ========================================
  // MAIN



  // ========================================
  // ========================================
  // FOOTER
  // --------------------
  // Мобильное меню
  // --------------------
  $('.menu__item h2').click(function (e) {
    e.preventDefault();
    if ($(window).width() <= 600) {
      $('.menu__item h2').removeClass('active');
      $(this).addClass('active');
      $('.menu__item ul').slideUp();
      $(this).next().slideDown();
    }
  });

  var sliderAdded = false;
  $(window).resize(function () {
    var windowWidth2 = $(window).width();
    if (!sliderAdded && windowWidth2 < 601) {
      $('.menu__item:first-child h2').click();
      sliderAdded = true;
    }
  });
  // --------------------
  // --------------------

  // END FOOTER
  // ========================================
  // ========================================




});

// if (window.matchMedia("(max-width: 600px)").matches) {
//   document.querySelectorAll('.menu__item h2').onclick;
// }

// if (window.innerWidth <= 600) {
//   let kkk = document.querySelectorAll('.menu__item h2').onclick;
//   console.log(kkk)
// }