$(document).ready(function(){
    $('.review-slider').slick({
      arrows: true,
      dots: true
    });
  });

  $(document).ready(function(){
    $('.sale-slider').slick({
      slidesToShow: 5,
      arrows: false,
      dots: false,
      Infinity: true,
      autoplay:false,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow:4,
            dots: true, 
          }
        },

        {
          breakpoint: 769,
          settings: {
            slidesToShow:3,
            dots: true, 
          }
        },
        {
          breakpoint: 426,
          settings: {
            slidesToShow:1,
            dots: true, 
            
          }
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow:1,
            dots: true, 
            
          }
        },

        {
          breakpoint: 320,
          settings: {
            slidesToShow:1,
            dots: true, 
            
          }
        },
      ]
    });
  });

  $(document).ready(function(){
    $('.title-slider').slick({
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 426,
          settings: {
            dots: true, 
          }
        },
        {
          breakpoint: 376,
          settings: {
            dots: true, 
          }
        },
        {
          breakpoint: 321,
          settings: {
            dots: true, 
          }
        },
      ]
    });
  });