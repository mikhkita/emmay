(function ($, $document, $window) {
    var winW = 0;

    var MENUPX = 1280;

    var topMenuHeight = 62

    var resizePort = function () {
		winW = $window.width();
        if (winW < 1000) {
            $('body').addClass('viewTablet');
        }
        else {
            $('body').removeClass('viewTablet');
        }
        $window.trigger('resize.md');

        if(winW < MENUPX){
            if($('.tablet-menu').hasClass('active')){
                $('.tablet-menu').removeClass('active').fadeOut();
                $('.burger-link').removeClass('active').trigger('click');
            }
        }
        else{
            if($('.b-aside-nav').hasClass('active-aside')){
                $('.b-aside-nav').removeClass('active-aside');
                $('.b-allwrap').removeClass('active-main');
                $('.burger-link').removeClass('active').trigger('click');
            }
        }
        $(".b-nav-list .b-submenu").css({
            "width":winW,
            "margin-left":$(".b-wrap").offset().left*-1
        });
    };
    $window.resize(function () {
        resizePort();
    });
    resizePort();

    var timeout,
        open = false;

    $(".b-topmenu-basket").click(function(){
        toggleCartMenu();
        return false;
    });

    function toggleCartMenu(tog){
        if( winW < 768 ) return false;
        if( $(".b-cart-menu").hasClass("opened") || tog ){
            $(".b-cart-menu").removeClass("opened");
            timeout = setTimeout(function(){
                $(".b-cart-menu").hide(0);
            },300);
        }else{
            if( checkCart() ){
                clearTimeout(timeout);
                $(".b-cart-menu").show(0).addClass("opened");
            }
        }
    }

    $(window).load(function(){
        $(".b-item-gallery").fadeTo(300,1);
    });

    function checkCart(){
        return $(".b-cart-menu li").length;
    }

    $(".b-cart-menu .close-button").click(function(){
        $(this).parents("li").remove();
        if( !checkCart() ){
            if( winW < 768 ){
                toggleCartMenu(true);
            }else{
                $.fancybox.close();
            }
        }  

        if( winW < 768 ) $.fancybox.update();

        return false;
    });

    $(".b-cart-menu *, .b-cart-menu, .b-topmenu-basket, .b-topmenu-basket *").bind("mouseup",function(){
        open = true;
    });

    $("body").bind("mousedown",function() {
        open = false;
    }).bind("mouseup",function(){
        if( !open )
            toggleCartMenu(true);
    });

    $('.burger-link').click(function(e,custom) {

        $(this).toggleClass('active');
        if (winW < MENUPX) {
            if($('.b-aside-nav').hasClass('active-aside') || custom == true){
                $("html").css("overflow","visible");
                $("body").css("overflow","auto");
                $('.all-overlay').removeClass('active-overlay');
                $('.b-aside-nav').removeClass('active-aside');
                $('.b-allwrap').removeClass('active-main');
            }else{
                $("body").css("overflow","hidden");
                $("html").css("overflow","initial");
                $('.all-overlay').addClass('active-overlay');
                $('.b-aside-nav').addClass('active-aside');
                $('.b-allwrap').addClass('active-main');
            }
        }
        else{
            if ($('.tablet-menu').hasClass('active')){
                $("body").css("overflow","auto");
                $('.all-overlay').removeClass('active-overlay');
                $('.tablet-menu').removeClass('active').fadeOut();
                $('.b-close-tablet-menu').removeClass('active');
            }else{
                $("body").css("overflow","hidden");
                $('.all-overlay').addClass('active-overlay');
                $('.b-close-tablet-menu').addClass('active');
                $('.tablet-menu').addClass('active').slideDown();
            }
        }
        return false;
    });
    $('.b-close-tablet-menu').click(function() {
        $('.burger-link').trigger('click');
    });
    $('.all-overlay, .close-menu').click(function() {
        $('.burger-link').trigger('click',true);
    });


	//основное меню
	// $('li.dropdown').hover(function() {
	// 	$('.b-subblock').slideDown();
	// 	$(this).addClass('active')
	// }, function() {		
	// 	$('.b-subblock').bind("mouseleave",function() {
 //            $('.b-subblock').unbind("mouseleave");
	// 		$('.b-subblock').slideUp();
	// 		$('li.dropdown.active').removeClass('active')		
	// 	});
		
	// });

    $(".b-nav-list > li").hover(function(){
        $(this).find(".b-submenu").stop().slideDown(250).addClass("opened");
    },function(){
        $(this).find(".b-submenu").stop().slideUp(250).removeClass("opened");
    });

    $(".b-radio>*").click(function(){
        $(this).parents(".b-radio").find(".active").removeClass("active");
        $(this).addClass("active");
        return false;
    });

    $('.count').bind("change keyup input click", function() {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });
    $(".count").keyup(function(){
        if($(this).val()=='0') $(this).val("1");
    });
    $(".count").focusout(function(){
        if($(this).val()=='') $(this).val("1");
    });
    $(".plus").click(function(){
        var input = $(this).closest(".count-cont").find("input");
        count = input.val()*1;
        if(count<999) {
            input.val(count+1);
        }
    });
    $(".minus").click(function(){
        var input = $(this).closest(".count-cont").find("input");
        count = input.val()*1;
        if(count>1) {
            input.val(count-1);
        }
    });

    var availableTags = [
        "Москва",
        "Санкт-Петербург",
        "Астрахань",
        "Барнаул",
        "Владивосток",
        "Волгоград",
        "Воронеж",
        "Екатеринбург",
        "Ижевск",
        "Иркутск",
        "Казань",
        "Кемерово",
        "Краснодар",
        "Красноярск",
        "Липецк",
        "Набережные Челны",
        "Новокузнецк",
        "Нижний Новгород",
        "Новокузнецк",
        "Новосибирск",
        "Омск",
        "Оренбург"
    ];
    $( "#tags" ).autocomplete({
        source: availableTags
    });

    $("#show-btn").click(function(){
        if($(".city-list").hasClass("overflow")) {
            $(".city-list").removeClass("overflow");
            $("#show-btn").text("Показать все города");
        } else {
            $(".city-list").addClass("overflow");
            $("#show-btn").text("Скрыть");
        }
        
    });

    var suvlakSide = $('.suvlak-side');

    $('.suvlak-side').each(function() {
        var ss = $(this);

        ss.find('.ss-nav-cat-1 > a,.ss-nav-cat-2 > a').click(function() {
            var li = $(this).parent();
            if (!li.hasClass('active')) {
                li.parent().find('> .active > a').trigger('click');
                li.addClass('active');
                li.find('> ul').slideDown(200, function() {
                    var scrollTop = suvlakSide.scrollTop();
                    var top = li.offset().top + scrollTop;
                    if (top < scrollTop) {
                        suvlakSide.animate({
                            scrollTop: top
                        }, 200);
                    };
                });
            } else {
                li.removeClass('active');
                li.find('> ul').slideUp(200);
            };
            return false;
        });

        $('header .suvlak').click(function() {
            if (!isSuvlak) {
                isSuvlak = true;
                var width = parseInt(wndw.width() * 0.75);
                suvlakSide.css({
                    width: width,
                    left: - width
                });
                mw.add(suvlakSide).transit({
                    x: width
                }, 200);
                var scrollTop = wndw.scrollTop();
                wndw.scrollTop(0);
                header.css({
                    position: 'absolute',
                    top: scrollTop
                });
                $('html').addClass('suvlak-menu');
                mwInner.css('top', - scrollTop);
                blindSuvlak.show().transit({
                    opacity: 0.4
                }, 200);
            };
        });
        $('.suvlak-close').click(function() {
            var scrollTop = parseInt(mwInner.css('top'));
            $('html').removeClass('suvlak-menu');
            mwInner.css('top', '');
            mw.add(suvlakSide).transit({
                x: 0
            }, 200, function() {
                mw.removeAttr('style');
                header.css({
                    position: '',
                    top: ''
                });
            });
            wndw.scrollTop( - scrollTop);
            blindSuvlak.transit({
                opacity: 0
            }, 200, function() {
                blindSuvlak.hide();
            });
            // header.css('top','');
            isSuvlak = false;
        });
        blindSuvlak.click(function() {
            $('.suvlak-close').triggerHandler('click');
        });
    });

})(jQuery, jQuery(document), jQuery(window));

