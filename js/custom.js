$(document).ready(function () {
  "use strict";
  //   banner slider;
  $(".banner-slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
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
  });

  //  counter up ;
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});
