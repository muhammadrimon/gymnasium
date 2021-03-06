$(document).ready(function () {
  "use strict";
  //   banner slider;
  $(".banner-slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
  });

  // color-switcher;
  $(".color-switcher .color-btn").on("click", function () {
    $(".color-switcher").toggleClass("pos-0");
  });

  $(".color-switcher ul .green").on("click", function () {
    $("body").addClass("green").removeClass("yellow").removeClass("purple").removeClass("defult");
  });

  $(".color-switcher ul .yellow").on("click", function () {
    $("body").addClass("yellow").removeClass("green").removeClass("purple").removeClass("defult");
  });

  $(".color-switcher ul .purple").on("click", function () {
    $("body").addClass("purple").removeClass("yellow").removeClass("green").removeClass("defult");
  });

  $(".color-switcher ul .defult").on("click", function () {
    $("body").removeClass("defult").removeClass("yellow").removeClass("purple").removeClass("green");
  });

  // back to top btn;
  $(window).on("scroll", function () {
    let scrolling = $(this).scrollTop();

    // back to top show;
    if (scrolling > 500) {
      $(".back-to-top").fadeIn();
    } else {
      $(".back-to-top").fadeOut();
    }
  });

  // back to top btn click;
  $(".back-to-top").on("click", function () {
    $("body, html").animate({
      scrollTop: "0px",
    });
  });

  // about video popup;

  new VenoBox({
    selector: ".video-popup",
    autoplay: true,
    spinColor: "#e23e38",
    spinner: "grid",
    toolsColor: "#e23e38",
  });

  // gallery image popup;
  new VenoBox({
    selector: ".gallery-popup",
    spinColor: "#e23e38",
    spinner: "grid",
    toolsColor: "#e23e38",
  });

  // testimonial slider;
  $(".testimonial-slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
        },
      },
    ],
  });

  //  counter up ;
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  // brand-slider ;
  $(".brand-slider").slick({
    arrows: true,
    prevArrow: '<i class="left-arrow fa-solid fa-chevron-left"></i>',
    nextArrow: '<i class="right-arrow fa-solid fa-chevron-right"></i>',
    dots: false,
    autoplay: true,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          centerMode: false,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 1000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          centerMode: true,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 1500,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          centerMode: true,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 1500,
        },
      },
    ],
  });

  // scroll animation ;
  AOS.init();

  // preloader ;
  $("#preloader").fadeOut();
});
