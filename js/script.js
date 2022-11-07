$(function($){
    $('.about-slider').slick({
      arrows: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      autoplay: true,
      responsive: [
        
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 1324,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            infinite: true,
          }
        }
        
      ]
    });
});