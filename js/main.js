
!(function($) {
  "use strict";
// Security

  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(300).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

// Counter.js
$('[data-toggle="counter-up"]').counterUp({
  delay: 10,
  time: 4000
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

// Back to Home button
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.back-to-home').fadeIn('slow');
  } else {
    $('.back-to-home').fadeOut('slow');
  }
});

//Vision carousel
  $(".vision-carousel").owlCarousel({
    loop:true,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 50,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2,
            loop:false
        }
    }
  });
  //team-carousel
  $(".team-carousel").owlCarousel({
    loop:false,
    margin: 50,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });
//Service-carousel
$(".service-owl").owlCarousel({
  nav:false,
    autoplaySpeed: 1600,
    autoplayHoverPause: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
});

  // Clients carousel
  $(".clients-carousel").owlCarousel({
    margin: 20,
    nav:false,
    slideTransition: 'linear',
    autoplayTimeout: 1500,
    autoplaySpeed: 1600,
    autoplayHoverPause: true,
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      900: {
        items: 6
      }
    }
  });
// Port Owl
$(".port-owl").owlCarousel({
  nav:false,
  margin: 50,
  autoplayHoverPause: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    900: {
      items: 3
    }
  }
});
  // Projects
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Venobox
    $(document).ready(function() {
      $('.venobox').venobox({
        'share': false
      });
    });
  });
  // Testimonials carousel 
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    items: 1
  });
  // Project details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init Animate On Scroll.js
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);