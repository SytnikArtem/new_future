$(document).ready(function() {

    //Скрипт для удаления скролл

    var $body = $(window.document.body);
    function bodyFreezeScroll() {
        $body.css({'overflow': 'hidden', 'position': 'relative'});
    }

    function bodyUnfreezeScroll() {
        $body.css({'overflow': 'auto', 'position': 'relative'});
    }

    //Инициализация wow.js

  var wow = new WOW(
    {
      boxClass:     'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
      animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
      offset:       200,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
      mobile:       false,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
      live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
      scrollContainer: null, // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
      resetAnimation: true
    }
  );
  wow.init();

  // Плавный скрол "Покрутить вниз"

    $(".scroll-link").click(function (event) {
        console.log('aaa');
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });

    // Функция трансформа лого (пока не готовая)

  function logoTransform(){
    let logo = $('.first-main-img');
    let phone = $('.header-phone');
    let topPosition = logo.offset().top + 60;
    let thisPosition = $(window).scrollTop();
    if (topPosition <= thisPosition) {
      $('.header-logo').addClass('active');
      $('.header-phone').addClass('active');
    }
    else {
      $('.header-logo').removeClass('active');
      $('.header-phone').removeClass('active');
    }
  }
  // logoTransform();
  // $(window).scroll(function () {
  //   logoTransform();
  // });

    //Меню на мобильном

  $('.menu-btn').click(function(){
     $(this).toggleClass('active');
     $('.menu-list').toggleClass('active');
     $('.menu-overlay').toggleClass('active');
     if($(window).width() < 993) {
         if($(this).hasClass('active')){
             bodyUnfreezeScroll();
         }
         else {
             bodyFreezeScroll();
         }
     }

  });
  // function randomInteger(min, max) {
  //   let rand = min - 0.5 + Math.random() * (max - min + 1)
  //   rand = Math.round(rand);
  //   return rand;
  // }
  // function changeColor(){
  //     let colors = ['#66bb46', '#ffd800', '#e90e47', '#30a275', '#199bdb', '#4b2d83', '#c0327e', '#199bdb', '#ffd800', '#ce0814', '#bc3c99', '#192b85', '#66bb46', '#e90e47', '#30a275', '#4b2d83', '#c0327e', '#ce0814'];
  //     let numberColor = colors.length - 1;
  //     let circle = $('.mask-circle');
  //     setInterval(function(){
  //       for (i = 0; i < numberColor; i++) {
  //         let randomNumber = randomInteger(1, numberColor);
  //         circle.eq(i).css('background-color', colors[randomNumber]);
  //       }
  //     }, 5000)
  // }
  // changeColor();
  function logoSwitch () {
    $('.altLogo').each(function() {
      let height = $('.altLogo').width();
      $(this).css('top',
        $('.startLogo').offset().top - $(this).closest('.row').offset().top + height
      );
    });
    $('.altLogo2.header').each(function() {
      $(this).css('top',
        $('.startLogo2').offset().top - $(this).closest('.row').offset().top
      );
    });
  };
  // $(document).scroll(function() {logoSwitch();});
  // logoSwitch();
  $('.first-main-lang.active').hover(

    function(){
      if($(this).hasClass('lang')) {
        $('.lang.active').addClass('transform')
      }
      else {
        $('.contact.active').addClass('transform')
      }
    },
    function(){
      if($(this).hasClass('lang')) {
        $('.lang.active').removeClass('transform')
      }
      else {
        $('.contact.active').removeClass('transform')
      }
    }
  );

  //Скрытие меню после 2сек

  if($(window).width() > 992) {
      setTimeout(function(){
          $('.menu-list').removeClass('active');
          $('.menu-btn').removeClass('active');
      }, 2000);
  }

  //Паралакс для кругов

    function parallaxBlock() {
        var parallaxController = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onEnter", duration: "500%" } });

        $('.parallax').each(function () {
            var trigg = this.parentNode,
                parallax = this.getAttribute('data-parallax'),
                speed = parallax * 100 + '%';
            new ScrollMagic.Scene({ triggerElement: trigg }).setTween(this, { y: speed, ease: Linear.easeNone }).addTo(parallaxController);
        });
    }
    parallaxBlock();

   //Фиксация блока на странице services-item
    if($(window).width() > 992) {
        var controller = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: 'onLeave'
            }
        });

        var fixedHeight = $('.visit-content').height() - $('.visit-right').height();
        //pin the navigation
        var pin = new ScrollMagic.Scene({
            triggerElement: '.visit-content',
            duration: fixedHeight,
            offset: '-20px'
        }).setPin('.visit-right', {pushFollowers: false}).addTo(controller);
    }
});
if($('.visit-animate_left').length > 0) {
    var leftPosition = $('.visit-animate_left').offset().left;
    var leftWidth = $('.visit-animate_left').width();
    var leftAnimate = -leftPosition - leftWidth + 'px';
}
if($('.visit-animate_right').length > 0) {
    var rightPosition = $(window).width() - $('.visit-animate_right').offset().left;
    var rightAnimate = rightPosition + 'px';
}
if($('.visit-animate_top').length > 0) {
    var topPosition = $('.visit-animate_top').offset().top;
    var topHeight = $('.visit-animate_top').height();
    var topAnimate = -topPosition - topHeight + 'px';
}


$(window).scroll(function () {
    if($(window).width() > 992) {
        var thisScroll = $(this).scrollTop();
        var paralaxScroll = thisScroll/20 + 'px';

        console.log(rightPosition);
        if (thisScroll < 200) {
            $('.visit-animate_left').css({'transform': 'translate(0, ' + paralaxScroll + ')'});
            $('.visit-animate_top').css({'transform': 'translate(0, ' + paralaxScroll + ')'});
            $('.visit-animate_right').css({'transform': 'translate(0, ' + paralaxScroll + ')'});
        }
        else if(thisScroll > 200) {
            console.log('aaa');
            $('.visit-animate_left').css({'transform': 'translate(' + leftAnimate + ', ' + paralaxScroll + ')'});
            $('.visit-animate_top').css({'transform': 'translate(0, ' + topAnimate + ')'});
            $('.visit-animate_right').css({'transform': 'translate(' + rightAnimate + ', ' + paralaxScroll + ')'});
        }
    }

    // else if (thisScroll > secondStep && thisScroll < thirdStep) {
    //     $('.visit-circle_big').css({'left': '0', 'z-index': '2', 'top': '14%', 'transform': 'translate(45px, ' + paralaxScroll + ') scale(0.28)'});
    //     $('.visit-circle_sm').css({'right': '87%', 'top': '7%', 'transform': 'translate(0%, ' + paralaxScroll + ') scale(1.04)'});
    // }
    // else if (thisScroll > thirdStep && thisScroll < fourthStep) {
    //     $('.visit-circle_big').css({'left': '0', 'z-index': '2', 'transform': 'translate(-100%, ' + paralaxScroll + ') scale(0.28)'});
    //     $('.visit-circle_sm').css({'right': '0%', 'transform': 'translate(100%, ' + paralaxScroll + ') scale(1.04)'});
    // }
    // else if (thisScroll > fourthStep && thisScroll < fifthStep) {
    //     $('.visit-circle_big').css({'left': '84%', 'z-index': '1', 'top': '-100px', 'transform': 'translate(0, ' + paralaxScroll + ') scale(0.66)'});
    //     $('.visit-circle_sm').css({'right': '-3%', 'z-index': '2', 'top': '150px', 'transform': 'translate(0%, ' + paralaxScroll + ') scale(0.45)'});
    // }
    // else if (thisScroll > fifthStep && thisScroll < sixthStep) {
    //     $('.visit-circle_big').css({'left': '0%', 'z-index': '1', 'top': '-100px', 'transform': 'translate(-100%, ' + paralaxScroll + ') scale(0.66)'});
    //     $('.visit-circle_sm').css({'right': '0%', 'z-index': '2', 'top': '150px', 'transform': 'translate(100%, ' + paralaxScroll + ') scale(0.45)'});
    // }
    // else if (thisScroll > sixthStep) {
    //     $('.visit-circle_big').css({'left': '10%', 'z-index': '1', 'top': '-100px', 'transform': 'translate(0, ' + paralaxScroll + ') scale(0.18)'});
    //     $('.visit-circle_sm').css({'right': '80%', 'z-index': '2', 'top': '-120px', 'transform': 'translate(0, ' + paralaxScroll + ') scale(0.55)'});
    // }
    // var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onCenter", duration: blockHeight}});
    // $('.parallax').each(function() {
    //     var trigg = this.parentNode,
    //         parallax = this.getAttribute('data-parallax'),
    //         speed = parallax;
    //     new ScrollMagic.Scene({triggerElement: trigg})
    //         .setTween(this, {y: speed, ease: Linear.easeNone})
    //         .addTo(controller);
    // });

});