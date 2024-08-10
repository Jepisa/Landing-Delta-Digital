$('.main-hero__slider').slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  variableWidth: true,
  dots: false,
  autoplaySpeed: 10,
  arrows: false,
  cssEase: "ease",
  speed: 10000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.main-portfolio-slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  centerPadding: '100px',
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.main-clients__slider').slick({
  autoplay: true,
  autoplaySpeed: 100,
  dots: false,
  arrows: false,
  infinite: true,
  slidesToScroll: 4,
  slidesToShow: 4,
  variableWidth: true,
  speed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        centerPadding: '100px',
      }
    }
  ]
});


 $('.team-slide__content').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  fade: true,
  asNavFor: '.team-slide__nav'
});
$('.team-slide__nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.team-slide__content',
  focusOnSelect: true
});