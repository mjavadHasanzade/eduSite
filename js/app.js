$(document).ready(function () {



  $('.property-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    // rtl:true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.technologies-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    // rtl:true,
    autoplay: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5.5,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

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

  // document.querySelectorAll('a[href^="#services"]').forEach(anchor => {
  //   anchor.addEventListener('click', function (e) {
  //     e.preventDefault();

  //     document.querySelector(this.getAttribute('href')).scrollIntoView({
  //       behavior: 'smooth'
  //     });
  //   });
  // });

  // document.querySelectorAll('a[href^="#tryPaasino"]').forEach(anchor => {
  //   anchor.addEventListener('click', function (e) {
  //     e.preventDefault();

  //     document.querySelector(this.getAttribute('href')).scrollIntoView({
  //       behavior: 'smooth'
  //     });
  //   });
  // });

  // document.querySelectorAll('a[href^="#paasinoStory"]').forEach(anchor => {
  //   anchor.addEventListener('click', function (e) {
  //     e.preventDefault();

  //     document.querySelector(this.getAttribute('href')).scrollIntoView({
  //       behavior: 'smooth'
  //     });
  //   });
  // });

  // document.querySelectorAll('a[href^="#getPrice"]').forEach(anchor => {
  //   anchor.addEventListener('click', function (e) {
  //     e.preventDefault();

  //     document.querySelector(this.getAttribute('href')).scrollIntoView({
  //       behavior: 'smooth'
  //     });
  //   });
  // });
  // var passVisiblity=document.getElementById('');

  var hiddenPass = true;

  $('.passwordVisibility').click(function (e) {

    if (hiddenPass) {
      $(this).siblings('.form-control').attr('type', 'string');
      $(this).addClass('fa-eye-slash');
      hiddenPass = false;
    } else {
      $(this).siblings('.form-control').attr('type', 'password');
      $(this).removeClass('fa-eye-slash');
      hiddenPass = true;
    }

  });

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  function validatePass(pass) {
    const nc = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
    return nc.test(pass);
  }


  let Regform = document.getElementById('RegisterForm');
  if ($('#RegisterForm').length != 0) {
    var emailErrors = document.getElementById('emailErrors');
    var confPassErrors = document.getElementById('confPassErrors');
    var passErrors = document.getElementById('passErrors');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confPassword = document.getElementById('confPassword');
    $('.formSubmiter').click(function () {
      if (!email.value) {
        emailErrors.innerHTML = " ایمیل نباید خالی باشد";
        return false;
      }
      if (!validateEmail(email.value)) {
        emailErrors.innerHTML = " ایمیل اشتباه وارد شده است";
        return false;
      }
      if (!password.value) {
        passErrors.innerHTML = "گذرواژه  نباید خالی باشد";
        return false;
      }
      if (!validatePass(password.value)) {
        passErrors.innerHTML = " .گذرواژه باید شامل حداقل یک حرف و یک عدد باشه";
        return false;
      }
      if (!confPassword.value) {
        confPassErrors.innerHTML = "تکرار گذرواژه نباید خالی باشد";
        return false;
      }
      if (confPassword.value != password.value) {
        confPassErrors.innerHTML = " گذرواژه ها  همخوانی ندارند";
        return false;
      }

      Regform.submit();

    });
    email.addEventListener('change', () => {
      emailErrors.innerHTML = "";
    })
    password.addEventListener('change', () => {
      passErrors.innerHTML = "";
    })
    confPassword.addEventListener('change', () => {
      confPassErrors.innerHTML = "";
    })
  }
  let Logform = document.getElementById('LogForm');
  if ($('#LogForm').length != 0) {
    var emailErrors = document.getElementById('emailErrors');
    var passErrors = document.getElementById('passErrors');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    $('.formSubmiter').click(function () {
      if (!email.value) {
        emailErrors.innerHTML = " ایمیل نباید خالی باشد";
        return false;
      }
      if (!validateEmail(email.value)) {
        emailErrors.innerHTML = " ایمیل اشتباه وارد شده است";
        return false;
      }
      if (!password.value) {
        passErrors.innerHTML = "گذرواژه  نباید خالی باشد";
        return false;
      }


      Logform.submit();

    });

    email.addEventListener('change', () => {
      emailErrors.innerHTML = "";
    })
    password.addEventListener('change', () => {
      passErrors.innerHTML = "";
    })

  }

  let resetPassForm = document.getElementById('resetPassForm');
  if ($('#resetPassForm').length != 0) {
    var confPassErrors = document.getElementById('confPassErrors');
    var passErrors = document.getElementById('passErrors');
    var confPassword = document.getElementById('confPassword');
    var password = document.getElementById('password');
    $('.formSubmiter').click(function () {

      if (!password.value) {
        passErrors.innerHTML = "گذرواژه  نباید خالی باشد";
        return false;
      }

      if (!validatePass(password.value)) {
        passErrors.innerHTML = " .گذرواژه باید شامل حداقل یک حرف و یک عدد باشه";
        return false;
      }
      if (!confPassword.value) {
        confPassErrors.innerHTML = "تکرار گذرواژه نباید خالی باشد";
        return false;
      }
      if (confPassword.value != password.value) {
        confPassErrors.innerHTML = " گذرواژه ها  همخوانی ندارند";
        return false;
      }

      resetPassForm.submit();

    });

    confPassErrors.addEventListener('change', () => {
      confPassErrors.innerHTML = "";
    })
    password.addEventListener('change', () => {
      passErrors.innerHTML = "";
    })

  }
  let resetPassFormEmail = document.getElementById('resetPassFormEmail');
  if ($('#resetPassFormEmail').length != 0) {
    
    var email = document.getElementById('email');
    var  emailErrors= document.getElementById('emailErrors');
    $('.formSubmiter').click(function () {

      if (!email.value) {
        emailErrors.innerHTML = " ایمیل نباید خالی باشد";
        return false;
      }
      if (!validateEmail(email.value)) {
        emailErrors.innerHTML = " ایمیل اشتباه وارد شده است";
        return false;
      }

      resetPassFormEmail.submit();

    });

    email.addEventListener('change', () => {
      emailErrors.innerHTML = "";
    })
    

  }

});


