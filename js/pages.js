(function ($, $document, $window) {
    var progress = new KitProgress("#f98411",2);

    progress.endDuration = 0.1;

    var winW = 0;

    var MENUPX = 1280;

    var topMenuHeight = 62;

    $(".b-issue").attr("data-default",$(".b-issue").val());

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
        if( $(".b-issue").length )
            $(".b-issue").each(function(){
                $(this).val(( winW < $(this).attr("data-width")*1 )?$(this).attr("data-value"):$(this).attr("data-default"));
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
            if( winW > 768 ){
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

    $("body").on('click',".b-radio>*",function(){
        $(this).parents(".b-radio").find(".active").removeClass("active");
        $(this).addClass("active");
        // return false;
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
        return false;
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
            // header.css('top','');
            isSuvlak = false;
        });
    });

    $(".tooltip-close").click(function() {
        $(this).closest(".tooltip").fadeOut();
    });

    $(".pay-desc").find("."+$(".pay-type .active").attr("id")).show();
    $(".pay-type div").click(function(){
        $(".pay-type div").removeClass("active");
        $(".pay-desc > div").hide();
        $(".pay-desc").find("."+$(this).attr("id")).show();
        $(this).addClass("active");
    });

    $("#promo-butt").click(function(){
        if($("#promo-code").val() != "") {
            $.ajax({
                type: "POST",
                url: "ajax/promo-code.php",
                data:  $("#promo-code").serialize(),
                success: function(msg){
                    $("#promo-code").removeClass("error valid");
                    if(msg == '1') {
                        $("#promo-code").addClass("valid");
                        $("#promo-code,#promo-butt").prop("disabled",true);
                    }else{
                        $("#promo-code").addClass("error");
                    }
                }
            });
        }
    });
   
    $( "#datepicker" ).datepicker({
        onClose: function() {
            $( "#datepicker" ).valid();
        }
    }).datepicker( $.datepicker.regional[ "ru" ] );

    function filter_ajax(first) {
        progress.setColor( ($("body").scrollTop()>$(".b-navigation").offset().top)?"#FFF":"#EC5973");
        progress.start(1.5);

        $.ajax({
            type: "POST",
            url: $("#filter-form").attr("action"),
            data:  $("#filter-form").serialize(),
            beforeSend: function() {
                $(".b-catalog-refresh").addClass("preloading").show();
                if(first) {
                    $(".b-catalog-refresh").hide();
                }
                
            },
            success: function(msg){
                if( first ){
                    $(".b-catalog-list").fadeOut(300,function(){
                        $(".b-catalog-list").empty();
                        generateList(first,msg);
                    });
                }else{
                    generateList(first,msg);
                }
            },
            complete: function() {
                progress.end();
                $(".b-catalog-refresh").removeClass("preloading");
            }
        });
    }

    function generateList(first,msg){
        var obj = jQuery.parseJSON( msg ),discount="",discount_val="",hit="",hit_val="",old_price="";
        
        if(obj.result == "success") {
            $(obj.items).each(function( index, item ){
                if(item.discount) {
                    discount = "discount";
                    discount_val = '<div class="b-discount">'+item.discount+'%</div>';
                }
                if(item.hit) {
                    hit = "hit";
                    hit_val = '<div class="b-hit">ХИТ</div>';
                } 
                if(item.old_price) {
                    old_price = '<small>'+item.old_price+'</small>';
                } 
                var str = '<li><div class="b-catalog-item '+discount+' '+hit+'">'+discount_val+hit_val+'<a class="b-cat-pic" href="'+item.url+'"><img alt="" src="'+item.image+'"><span>'+item.name+'</span></a><p>'+item.desc+'</p><div class="b-buy"><a href="#" class="btn btn-g"><span>Купить</span></a><p class="b-item-price">'+old_price+'<span>'+item.price+'</span><span class="rub">руб.</span></p></div></div></li>';

                $(".b-catalog-list").append(str);
                discount="",discount_val="",hit="",hit_val="",old_price="";
            });
        }
        $(".b-catalog-list").fadeIn(300);
        if(obj.more) {
            $("input[name=page]").val(obj.page);
            $(".b-catalog-refresh").show();
        } else {
            $(".b-catalog-refresh").hide();
        }
    }

    $(".b-filters input[type=radio]").change(function(){ 
        filter_ajax(true);    
    });
    
    $(".b-catalog-refresh").click(function(){
        filter_ajax();
        return false;
    });

    function select_tooltip() {
        for (var i = 0; i <= $("#time-select option").length; i++) {
            if($("#time-select option").eq(i).prop("selected")) {
                $("#select-tooltip-2").val("").removeClass("error valid");
                $(".select-tooltip:visible").hide();
                $("#select-tooltip-"+i).show();
            } 
        };     
    }

    select_tooltip();

    $("#time-select").change(function(){ 
        select_tooltip();
    });

    $(".input-cont input,.input-cont textarea").focus(function(){   
        $(this).closest(".input-cont").find(".email-tooltip").fadeIn();
    });
    $(".input-cont input,.input-cont textarea").blur(function() {
        $(".input-cont .email-tooltip:visible").fadeOut();
    });

    $("input[name='self']").change(function(){
        if($(this).prop("checked")){
            $("input[name='name2'],input[name='phone2']").val("").removeClass("valid error").prop("disabled",true);
        } else {
            $("input[name='name2'],input[name='phone2']").prop("disabled",false);
        }
        
    });

    
    
    
})(jQuery, jQuery(document), jQuery(window));

