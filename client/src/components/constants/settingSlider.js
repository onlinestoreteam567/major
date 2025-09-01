export const commentsSettings = {
  accessibility: true,
  dots: false,
  infinite: false,
  variableWidth: true,
  arrows: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  draggable: false,
  swipe: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
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
};

export const mainSettings = {
  accessibility: true,
  dots: false,
  infinite: false,
  adaptiveHeight: true,
  arrows: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  lazyLoad: true,
  variableWidth: true,
  draggable: false,
  swipe: true,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
      },
    },
  ],
};

export const oneElement = {
  accessibility: true,
  dots: false,
  infinite: true,
  adaptiveHeight: true,
  arrows: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: true,
  variableWidth: true,
  draggable: false,
  swipe: true,
};
