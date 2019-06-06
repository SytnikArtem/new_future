$(document).ready(function() {

    //РЎРєСЂРёРїС‚ РґР»СЏ СѓРґР°Р»РµРЅРёСЏ СЃРєСЂРѕР»Р»

    var $body = $(window.document.body);
    function bodyFreezeScroll() {
        $body.css({'overflow': 'hidden', 'position': 'relative'});
    }

    function bodyUnfreezeScroll() {
        $body.css({'overflow': 'auto', 'position': 'relative'});
    }

    //РРЅРёС†РёР°Р»РёР·Р°С†РёСЏ wow.js

  var wow = new WOW(
    {
      boxClass:     'wow',      // РєР»Р°СЃСЃ, СЃРєСЂС‹РІР°СЋС‰РёР№ СЌР»РµРјРµРЅС‚ РґРѕ РјРѕРјРµРЅС‚Р° РѕС‚РѕР±СЂР°Р¶РµРЅРёСЏ РЅР° СЌРєСЂР°РЅРµ (РїРѕ СѓРјРѕР»С‡Р°РЅРёСЋ, wow)
      animateClass: 'animated', // РєР»Р°СЃСЃ РґР»СЏ Р°РЅРёРјР°С†РёРё СЌР»РµРјРµРЅС‚Р° (РїРѕ СѓРјРѕР»С‡Р°РЅРёСЋ, animated)
      offset:       0,          // СЂР°СЃСЃС‚РѕСЏРЅРёРµ РІ РїРёРєСЃРµР»СЏС… РѕС‚ РЅРёР¶РЅРµРіРѕ РєСЂР°СЏ Р±СЂР°СѓР·РµСЂР° РґРѕ РІРµСЂС…РЅРµР№ РіСЂР°РЅРёС†С‹ СЌР»РµРјРµРЅС‚Р°, РЅРµРѕР±С…РѕРґРёРјРѕРµ РґР»СЏ РЅР°С‡Р°Р»Р° Р°РЅРёРјР°С†РёРё (РїРѕ СѓРјРѕР»С‡Р°РЅРёСЋ, 0)
      mobile:       false,       // РІРєР»СЋС‡РµРЅРёРµ/РѕС‚РєР»СЋС‡РµРЅРёРµ WOW.js РЅР° РјРѕР±РёР»СЊРЅС‹С… СѓСЃС‚СЂРѕР№СЃС‚РІР°С… (РїРѕ СѓРјРѕР»С‡Р°РЅРёСЋ, РІРєР»СЋС‡РµРЅРѕ)
      live:         true,       // РїРѕРґРґРµСЂР¶РєР° Р°СЃРёРЅС…СЂРѕРЅРЅРѕ Р·Р°РіСЂСѓР¶РµРЅРЅС‹С… СЌР»РµРјРµРЅС‚РѕРІ (РїРѕ СѓРјРѕР»С‡Р°РЅРёСЋ, РІРєР»СЋС‡РµРЅР°)
      scrollContainer: null, // СЃРµР»РµРєС‚РѕСЂ РїСЂРѕРєСЂСѓС‡РёРІР°СЋС‰РµРіРѕСЃСЏ РєРѕРЅС‚РµР№РЅРµСЂР° (РѕРїС†РёРѕРЅР°Р»СЊРЅРѕ, РїРѕ СѓРјРѕР»С‡Р°РЅРёСЋ, window)
      resetAnimation: true
    }
  );
  wow.init();

  // РџР»Р°РІРЅС‹Р№ СЃРєСЂРѕР» "РџРѕРєСЂСѓС‚РёС‚СЊ РІРЅРёР·"

    $(".scroll-link").click(function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });

    // Р¤СѓРЅРєС†РёСЏ С‚СЂР°РЅСЃС„РѕСЂРјР° Р»РѕРіРѕ (РїРѕРєР° РЅРµ РіРѕС‚РѕРІР°СЏ)

    //РњРµРЅСЋ РЅР° РјРѕР±РёР»СЊРЅРѕРј

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

  //РџР°СЂР°Р»Р°РєСЃ РґР»СЏ РєСЂСѓРіРѕРІ

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

   //Р¤РёРєСЃР°С†РёСЏ Р±Р»РѕРєР° РЅР° СЃС‚СЂР°РЅРёС†Рµ services-item
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
    $('.contact-btn').click(function(e){
        e.preventDefault();
        bodyFreezeScroll();
        $('.contact-popup').addClass('active');
        $('.close-btn').addClass('active');
        $('.contact-popup-content').eq(0).addClass('active');
    });
    $('.contact-popup-form').submit(function(e){
        e.preventDefault();
        $('.thank').addClass('active').prev().removeClass('active');
    });
    $('.close-btn').click(function(){
        $(this).removeClass('active');
        $('.contact-popup, .contact-popup-write, .contact-popup-calc').removeClass('active');
        setTimeout(function(){
            $('.thank').removeClass('active').prev().addClass('active');
        }, 1000);
        bodyUnfreezeScroll();
    });
    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            // "zoom",
            //"share",
            // "slideShow",
            //"fullScreen",
            //"download",
            // "thumbs",
            "close"],
        infobar: false,
        gutter: 0
    });
    $('.gallery-main').masonry({
        // options
        itemSelector: '.gallery-item',
        gutter: 30,
        percentPosition: true
    });

    $('.gallery-main').imagesLoaded().progress( function() {
        $('.gallery-main').masonry();
    });
    $('.fifth-form').submit(function(){
        $('.contact-popup-write').addClass('active');
        $('.contact-popup-write .thank-write').addClass('active');
        $('.close-btn').addClass('active');
    });
});

function checkMenu(){
    if($(window).width() > 992) {
        setTimeout(function(){
            $('.menu-list').removeClass('active');
            $('.menu-btn').removeClass('active');
        }, 2000);
    }
}
var blockIsActive = localStorage.getItem("blockIsActive");

$('.menu-btn').click(function(){
    localStorage.setItem("blockIsActive", true);
});
if(blockIsActive !== "true") {
    console.log(blockIsActive);
    checkMenu();
}



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

        if (thisScroll < 200) {
            $('.visit-animate_left').css({'transform': 'translate(0, ' + paralaxScroll + ')'});
            $('.visit-animate_top').css({'transform': 'translate(0, ' + paralaxScroll + ')'});
            $('.visit-animate_right').css({'transform': 'translate(0, ' + paralaxScroll + ')'});
        }
        else if(thisScroll > 200) {
            $('.visit-animate_left').css({'transform': 'translate(' + leftAnimate + ', ' + paralaxScroll + ')'});
            $('.visit-animate_top').css({'transform': 'translate(0, ' + topAnimate + ')'});
            $('.visit-animate_right').css({'transform': 'translate(' + rightAnimate + ', ' + paralaxScroll + ')'});
        }
    }
});