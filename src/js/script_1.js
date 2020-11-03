// window.addEventListener('DOMContentLoaded', preloaderHide, false);

// let preloader =  $('#preloader');

// function preloaderHide() {
//     window.setTimeout(function () {
//       preloader.addClass('preloader-hide');
//       preloader.css('opacity', '0');
//       setTimeout(function () {
//         preloader.css('display', 'none');
//       }, 500);
//   }, 1000);
// };

$(document).ready(function () {
  $(".main-questions-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "0px",
    nextArrow:
      '<div class="slick-custom-arrow slick-custom-arrow-right"></div>',
    prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"></div>',
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".main-achievements").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "50px",
        },
      },
    ],
  });

  $(".on-off-toggle__slider").click(() => {
    $(".services-prevent, .services-concept").fadeOut();
    if ($("#bopis")[0].checked) {
      setTimeout(() => {
        $(".services-prevent").fadeIn();
        $(".services").removeClass("active");
      }, 500);
    } else {
      setTimeout(() => {
        $(".services-concept").fadeIn();
        $(".services").addClass("active");
      }, 500);
    }
  });

  //   responsive
  if ($(window).width() < 1200) {
    $(".nav-list").append($(".header-contacts"));
  }
  $(window).resize(() => {
    if ($(window).width() < 1200) {
      $(".nav-list").append($(".header-contacts"));
    } else {
      $(".header-container").append($(".header-contacts"));
    }
  });
  $(".burger").click(() => {
    $(".header-nav").fadeToggle();
    $(".burger__line").toggleClass("active");
  });
});
