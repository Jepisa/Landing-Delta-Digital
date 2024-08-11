const splide = new Splide( '.splide', {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    arrows: false,
    pagination: false,
    autoWidth: true,
    gap        : '2rem',
    autoScroll: {
      speed: 0.5,
    },
  } );

splide.mount(window.splide.Extensions);