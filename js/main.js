$("#home-banner").slick({
  autoplay: true,
  infinite: true,
  speed: 500,
  cssEase: "linear",
  arrows: false,
});
$(".home-update-banner").slick({
  infinite: true,
  autoplay: true,
  speed: 100,
  fade: true,
  cssEase: "linear",
  arrows: false,
});
$(".footer-slider").slick({
  infinite: true,
  autoplay: true,
  speed: 300,
  fade: true,
  cssEase: "linear",
  arrows: false,
});
$(".urban_lakes_banner").slick({
  infinite: true,
  autoplay: true,
  speed: 300,
  fade: true,
  cssEase: "linear",
  arrows: false,
});

$(document).ready(function () {
  $(".amenities-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    },
  });
});

AOS.init();
