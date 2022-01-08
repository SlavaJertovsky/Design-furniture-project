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
      dots: true,
      Infinity: true,
      autoplay:false,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow:4, 
          }
        },

        {
          breakpoint: 769,
          settings: {
            slidesToShow:3, 
          }
        },
        {
          breakpoint: 426,
          settings: {
            slidesToShow:1, 
            
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
            dots: false, 
          }
        },
      ]
    });
  });