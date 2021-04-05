

$(document).ready(function () {


  //==================================================================================== menu
  $(".menu_list").click(function () {
    $(this).toggleClass("active")
  });


  $(".navbar-toggler").click(function () {
    $(".mobile_menu").toggleClass("active");
    $(".mobile_menu_bg").toggleClass("active");
    $(".site_bg").toggleClass("active");
    $(".togbars").toggleClass("fa-bars");
    $(".togbars").toggleClass("fa-times");
    return false;
  });

  $(".mobile_menu_close").click(function () {
    $(".site_bg").removeClass("active");
    $(".mobile_menu_bg").removeClass("active");
    $(".mobile_menu").removeClass("active");

    return false;
  });

  $(".site_bg").click(function () {
    $(".site_bg").removeClass("active");
    $(".mobile_menu_bg").removeClass("active");
    $(".mobile_menu").removeClass("active");
    $(".togbars").toggleClass("fa-bars");
    $(".togbars").toggleClass("fa-times");
    return false;
  });



  $(".mobile_menu li").each(function () {
    if ($(this).has(" > ul")) {
      $(this).find(" > ul").prev().attr({ href: "javascript: void(0)" });
    }
  });

  $(".mobile_menu li > a").click(function () {

    var my_obj = $(this);


    $(this).parent().parent().find("ul").not($(this).next()).slideUp(200);
    $(this).next().slideToggle(200, function () {
      $('html, body').animate({
        scrollTop: $(my_obj).position().top
      }, 250);
    });

    $(this).parent().parent().find("a").not($(this)).removeClass("has_children");


  });





  var $root = $('html, body');

  $('a[href^="#"]').click(function () {
    var href = $.attr(this, 'href');

    $root.animate({
      scrollTop: $(href).offset().top - 60
    }, 500, function () {
      window.location.hash = href;

    });
    $(".site_bg").removeClass("active");
    $(".mobile_menu_bg").removeClass("active");
    $(".mobile_menu").removeClass("active");
    $(".togbars").toggleClass("fa-bars");
    $(".togbars").toggleClass("fa-times");

  });

  $('.counter').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 3000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });

  $('.quotesSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed:300,
    arrows: true,
    prevArrow: ".chevRight",
    nextArrow: ".chevLeft",

  });

});


window.addEventListener('load', () => {
  //============================= gsap  ===========================================//
  // let tl = new TimelineLite({ paused: true, reversed: true });
  // gsap.registerPlugin(ScrollTrigger);

  gsap.timeline({
    scrollTrigger: {
      trigger: ".topCateguries",
      toggleActions: "reverse pause restart pause",
      start: 'top +20%',
      // end: () => {
      //   "+=" + document.querySelector('.categuryItem').offsetWidth;
      //   console.log(document.querySelector('.categuryItem').offsetWidth);
      // },
      // endTrigger: '.whyChooseUs',
      end: 'center center',
      scrub: true,
    },
  }).from('.categuryItem', {
    duration: 2,
    ease: "power4",
    opacity: 0,
    y: innerHeight * 0.25
  });

  // gsap.defaults({
  //   scrollTrigger: {
  //     trigger: ".categuryItem",
  //     toggleActions: "reverse ",
  //   },
  //   x: 0,
  // })

  // gsap.to('.categuryItem', {

  //   y: -35,
  //   // rotate: 360,
  //   ease: Power2.easeOut,
  //   duration: 10
  // });
  // gsap.registerPlugin(ScrollTrigger);
  // gsap.to('.topCateguries .col-6:nth-child(-n+3) .categuryItem', {
  //   scrollTrigger: {
  //     trigger: ".topCateguries .col-6:nth-child(-n+3) .categuryItem",
  //     toggleActions: "restart pause reverse pause",
  //     start:'top center',
  //     markers:true
  //   },
  //   x: -600,
  //   rotate: -360,
  //   duration: 4
  // })

  // window.addEventListener('scroll', (e) => {

  //   if (window.scrollY >= 150) {
  //     if (tl.isActive()) {
  //       e.preventDefault();
  //       e.stopImmediatePropagation();
  //       return false
  //     }
  //     tl.fromTo('.topCateguries .col-6:nth-child(n+4) .categuryItem', 1, {
  //       opacity: 0,
  //       x: "+=500",
  //       ease: Power2.easeOut,
  //       immediateRender: false
  //     }, {
  //       opacity: 1,
  //       x: 0,
  //       onCompelte: function () {
  //         // navOpen.style.pointerEvents = 'auto';
  //         console.log('done');
  //       }
  //     }).fromTo('.topCateguries .col-6:nth-child(n-4) .categuryItem', 1, {
  //       opacity: 0,
  //       x: "-=500",
  //       ease: Power2.easeOut,
  //       immediateRender: false
  //     }, {
  //       opacity: 1,
  //       x: 0,
  //       onCompelte: function () {
  //         // navOpen.style.pointerEvents = 'auto';
  //         console.log('done');
  //       }
  //     });
  //     tl.play();
  //   }
  // })

})


