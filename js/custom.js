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
});
