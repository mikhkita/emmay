var progress,
    changeCity = false;
(function ($, $document, $window) {
    $(".fancy-ajax").each(function(){
        $(this).attr("href",$(this).attr("data-href"));
    });

    bindFancy();

    progress = new KitProgress("#f98411",2);

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

        if(winW < 768) $("#KitProgressBar").css("height",7);
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

    $("body").on('click',".b-topmenu-basket", function(){
        if( $(this).hasClass("empty") ) return false;
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

    // $(".b-cart-menu .close-button").click(function(){
    //     $(this).parents("li").remove();
    //     if( !checkCart() ){
    //         if( winW > 768 ){
    //             toggleCartMenu(true);
    //         }else{
    //             $.fancybox.close();
    //         }
    //     }  

    //     if( winW < 768 ) $.fancybox.update();

    //     return false;
    // });

    $(".b-cart-menu *, .b-cart-menu, .b-topmenu-basket, .b-topmenu-basket *, .ajax-href").bind("mouseup",function(){
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
        if( $(this).parents(".count-cont").hasClass("disabled") ) return false;

        // var input = $(this).closest(".count-cont").find("input");
        // count = input.val()*1;
        // if(count<999) {
        //     input.val(count+1);
        // }
    });
    $(".minus").click(function(){
        if( $(this).parents(".count-cont").hasClass("disabled") ) return false;

        // var input = $(this).closest(".count-cont").find("input");
        // count = input.val()*1;
        // if(count>1) {
        //     input.val(count-1);
        // }
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

    progress.setColor( ($("body").scrollTop()>$(".b-navigation").offset().top)?"#FFF":"#EC5973");

    $(document).scroll(function(){
        progress.setColor( ($("body").scrollTop()>$(".b-navigation").offset().top)?"#FFF":"#EC5973");
    });

    $("body").on("click",".tooltip-close",function() {
        $(this).closest(".tooltip").fadeOut();
    });

    $(".pay-desc").find("."+$(".pay-type .active").attr("id")).show();
    $(".pay-type div").click(function(){
        $(".pay-type div").removeClass("active");
        $(".pay-desc > div").hide();
        if( $(this).index() == 0 ){
            $(".pay-desc").addClass("first");
        }else{
            $(".pay-desc").removeClass("first");
        }
        $(".pay-desc").find("."+$(this).attr("id")).show();
        $(this).addClass("active");
    });

    $("#promo-butt").click(function(){
        if($("#promo-code").val() != "" && !$(this).hasClass("disabled")) {
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
        minDate: 0,
        onClose: function() {
            $( "#datepicker" ).valid();
        }
    }).datepicker( $.datepicker.regional[ "ru" ] );

    function filter_ajax(first,filter_change,filter_url) {
        progress.setColor( ($("body").scrollTop()>$(".b-navigation").offset().top)?"#FFF":"#EC5973");
        progress.start(1.5);
        var filter_data = $("input[name=PAGEN_1]").serialize();
        if(filter_change) filter_data = filter_data+"&"+$("#filter-form").serialize();
        $.ajax({
            type: "POST",
            url: filter_url,
            data:  filter_data,
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
                        generateList(msg);
                    });
                }else{
                    generateList(msg);
                }
            },
            complete: function() {
                progress.end();
                $(".b-catalog-refresh").removeClass("preloading");
            }
        });
    }

    function generateList(msg){
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
            $("input[name=PAGEN_1]").val(obj.PAGEN_1);
            $(".b-catalog-refresh").show();
        } else {
            $(".b-catalog-refresh").hide();
        }
    }
    var filter_change = false;
    $(".b-filters input[type=radio]").change(function(){ 
        filter_change = true;
        $("input[name=PAGEN_1]").val(1);
        filter_ajax(true,filter_change,$("#filter-form").attr("action"));   
        $(".b-catalog-refresh .b-more-items").attr("data-href",$("#filter-form").attr("action")); 
    });
    
    $(".b-catalog-refresh .b-more-items").click(function(){
        if( $(".b-catalog-refresh").hasClass("preloading") ) return false;

        filter_ajax(false,filter_change,$(this).attr("data-href"));
        return false;
    });

    $(".b-page-refresh .b-more-items").attr("data-cur",1);

    checkLastPage();

    $(".b-page-refresh .b-more-items").click(function(){
        if( $(".b-page-refresh").hasClass("preloading") ) return false;

        var url = $(this).attr("data-href");

        $(".b-page-refresh").addClass("preloading");

        $(".b-page-refresh .b-more-items").attr("data-cur",$(".b-page-refresh .b-more-items").attr("data-cur")*1+1);
        checkLastPage();

        $.ajax({
            type: "GET",
            url: url+( (url.split("?").length>1)?"&":"?" )+"PAGEN_1="+$(".b-page-refresh .b-more-items").attr("data-cur"),
            success: function(msg){
                progress.end();
                $(".b-page-refresh").removeClass("preloading");
                $(".append-to").append(msg);
            }
        });
        return false;
    });

    function checkLastPage(){
        if( $(".b-page-refresh .b-more-items").attr("data-cur")*1 >= $(".b-page-refresh .b-more-items").attr("data-last") ){
            $(".b-page-refresh").hide();
        }else{
            $(".b-page-refresh").show();
        }

    }

    function select_tooltip() {
        for (var i = 0; i <= $("#time-select option").length; i++) {
            if($("#time-select option").eq(i).prop("selected")) {
                $("#select-tooltip-2").val("").removeClass("error valid");
                $(".select-tooltip:visible").hide();
                $("#select-tooltip-"+i).show();
            } 
        };     
    }

    setTimeout(function(){
        for (var i = 0; i <= $("#time-select option").length; i++) {
            if($("#time-select option").eq(i).prop("selected")) {
                $("#select-tooltip-2").removeClass("error valid");
                $(".select-tooltip:visible").hide();
                $("#select-tooltip-"+i).show();
            } 
        }; 
    },150);

    $("#time-select").change(function(){ 
        select_tooltip();
    });

    $(".input-cont input,.input-cont textarea").focus(function(){   
        $(this).closest(".input-cont").find(".email-tooltip").fadeIn();
    });
    $(".input-cont input,.input-cont textarea").blur(function() {
        $(".input-cont .email-tooltip:visible").fadeOut();
    });

    customHandlers["cityBefore"] = function(){
        changeCity = true;
    };

    customHandlers["cityAfter"] = function(){
        changeCity = false;
    };

    $("body").on("click",".city-list a",function(){
        if( changeCity ){
            $("#order-form input[name='BasketRefresh']").remove();
            $("#order-form").attr("action",$(this).attr("href")+"cart/").attr("method","POST").append("<input type='hidden' name='change_order_city' value='Y'>");
            $("#order-form")[0].submit();
            return false;
        }
    });

    $("input[name='ORDER_PROP_10']").change(checkSelf);

    checkSelf();

    function checkSelf(){
        if($("input[name='ORDER_PROP_10']").prop("checked")){
            $("input[name='ORDER_PROP_8'],input[name='ORDER_PROP_9']").val("").removeClass("valid error").prop("disabled",true);
        } else {
            $("input[name='ORDER_PROP_8'],input[name='ORDER_PROP_9']").prop("disabled",false);
        }
    }

    $("body").on("click",".ajax-href",function(){
        progress.setColor( ($("body").scrollTop()>$(".b-navigation").offset().top)?"#FFF":"#EC5973");
        progress.setColor( ($("body").scrollTop()>$(".b-navigation").offset().top || $("body").width() < 768)?"#FFF":"#EC5973");
        progress.start(1.5);

        var opened = $("#minicart .b-cart-menu").hasClass("opened");

        $.ajax({
            type: "POST",
            url: $(this).attr("data-href"),
            success: function(msg){
                progress.end(function(){
                    var cart = $("#minicart .b-cart-menu").attr("class"),
                        opened = $("#minicart .b-cart-menu").hasClass("opened") || ( ($(".fancybox-inner").length)?true:false );

                    $("#minicart").html(msg);
                    $("#minicart .b-cart-menu").attr("class",cart);
                    $("#minicart .b-cart-menu.opened").show();

                    $(".b-cart-menu").html($("#minicart .b-cart-menu").html());

                    $.fancybox.update();

                    $(".b-small-cart-icon").addClass("fancy");

                    bindFancy();

                    if( !opened ) {
                        toggleCartMenu();
                        if( winW < 768 ) $(".b-small-cart-icon").click();
                    }

                    if( $("#minicart .b-topmenu-basket").hasClass("empty") ){
                        $(".b-topmenu-basket").addClass("empty");
                    }else{
                        $(".b-topmenu-basket").removeClass("empty");
                    }
                    $(".b-top-basket-count").text($("#minicart .b-top-basket-count").text());
                });
            }
        });
        return false;
    });

    $(".fancy-ajax").each(function(){
        var $this = $(this);
        $this.removeClass(".fancy-ajax");
        $this.fancybox({
            padding : 0,
            type : "ajax",
            helpers: {
                overlay: {
                    locked: true 
                }
            },
            beforeShow: function(){
                
            },
            afterShow: function(){
                
            },
            beforeClose: function(){
                
            },
            afterClose: function(){
                
            }
        });
    });

    $("#select-tooltip-2").hide();
    $(".b-order-nav li,.next").click(function(){
        var step;
        step = $(this).attr("data-step");
        if(!$(step).hasClass("active")) {
            var show = true;
            if( step == "#order-payment" ){
                $("#order-form").submit();
                show = $("#order-form").valid();
            }
            if( show ){
                var oldstep = $("#order-form >div.active").attr("id");
                if( $("input.valid:visible[required='required']").length == $("input:visible[required='required']").length || $("input:visible[required='required']").length == $("input:visible[disabled='disabled']").length) {
                    $(".b-order-nav li[data-step='#"+oldstep+"']").addClass("complete");
                } else $(".b-order-nav li[data-step='#"+oldstep+"']").removeClass("complete");
                $("#order-form >div.active").hide().removeClass("active");
                $(step).show().addClass("active");
                $(".b-order-nav li.active").removeClass("active");
                $(".b-order-nav li[data-step='"+step+"']").addClass("active");
            }
        }
    });
    $("#order-form").submit(function(){
        // if( $(this).hasClass("loaded") ) return false;

        if($('.b-order-nav li:not(.complete)').length) {
            $('.b-order-nav li:not(.complete)').eq(0).click();       
        }
        // $("#order-form").validate();
        if( $("#order-form").valid() ){
            var $form = $(this);

            progress.start(1.5);

            $(".b-payment-desc .btn").hide();

            $.ajax({
                type: $form.attr("method"),
                url: $form.attr("action"),
                data:  $form.serialize(),
                success: function(msg){
                    var json = JSON.parse(msg);

                    if( json.result == "success" ){
                        $form.addClass("loaded");
                        $(".tooltip-cont .tooltip").html(json.text+'<span class="tooltip-close"></span>').fadeIn(300);
                        $(".b-change-order").show();

                        $(".count-cont, .b-cart-delete, .flower-add-button, #promo-butt, #promo-code").addClass("disabled");
                        $(".count-cont input,#promo-code").attr("disabled","disabled");

                        $(".b-change-city-butt").hide();
                        $(".b-change-city-butt-disabled").show();

                        $("#order-number").val(json.id);
                        $("#sum").val(json.sum);

                        $(".b-payment-desc .btn").fadeIn();

                        $(".b-sber-pay").attr("data-href",json.sber);

                        $("#robokassa-form").remove();
                        $(".b-allwrap").append(json.robo);
                    }else{
                        alert( (json.message)?json.message:"Ошибка создания заказа" );
                    }
                },
                error: function(){
                    alert( "Ошибка создания заказа" );
                },
                complete: function() {
                    progress.end();
                }
            });
        }
        return false;
    });

    $(".b-cart-delete, .flower-add-button").click(function(){
        if( $(this).hasClass("disabled") ) return false;
    });

    $(".b-change-city-butt-disabled").click(function(){
        return false;
    });

    $(".b-robo-pay").click(function(){
        $("#robokassa-form").submit();
        return false;
    });

    $(".b-sber-pay").click(function(){
        if( !$(this).attr("data-href") ) return false;
        var $this = $(this);

        $this.parent().find("p").fadeOut();

        progress.start(1.5);

            $.ajax({
                type: "GET",
                url: $this.attr("data-href"),
                success: function(msg){
                    $(".b-payment-desc iframe").attr("src",msg).show();
                    $(".b-sber-pay").hide();
                },
                error: function(){
                    alert( "Ошибка получения формы оплаты" );
                },
                complete: function() {
                    progress.end();
                }
            });

        return false;
    });

    $(".change-order").click(function(){
        $("#order-form input[name='BasketRefresh']").remove();
        $("#order-form").attr("action","").attr("method","POST").append("<input type='hidden' name='change_current_order' value='Y'>");
        $("#order-form")[0].submit();
        return false;
    });

    
})(jQuery, jQuery(document), jQuery(window));

function bindFancy(){
    $(".fancy").each(function(){
        var $popup = $($(this).attr("data-block")),
            $this = $(this);

        $this.removeClass("fancy");
        $this.fancybox({
            padding : 0,
            content : $popup,
            helpers: {
                overlay: {
                    locked: true 
                }
            },
            beforeShow: function(){
                $popup.find(".b-first-step").show();
                $popup.find(".b-second-step, .b-third-step").hide();
                $popup.find(".custom-field").remove();
                if( $this.attr("data-value") ){
                    var name = getNextField($popup.find("form"));
                    $popup.find("form").append("<input type='hidden' class='custom-field' name='"+name+"' value='"+$this.attr("data-value")+"'/><input type='hidden' class='custom-field' name='"+name+"-name' value='"+$this.attr("data-name")+"'/>");
                }
                if( $this.attr("data-beforeShow") && customHandlers[$this.attr("data-beforeShow")] ){
                    customHandlers[$this.attr("data-beforeShow")]($this);
                }
            },
            afterShow: function(){
                if( $this.attr("data-afterShow") && customHandlers[$this.attr("data-afterShow")] ){
                    customHandlers[$this.attr("data-afterShow")]($this);
                }
            },
            beforeClose: function(){
                if( $this.attr("data-beforeClose") && customHandlers[$this.attr("data-beforeClose")] ){
                    customHandlers[$this.attr("data-beforeClose")]($this);
                }
            },
            afterClose: function(){
                if( $this.attr("data-afterClose") && customHandlers[$this.attr("data-afterClose")] ){
                    customHandlers[$this.attr("data-afterClose")]($this);
                }
            }
        });
    });

    $(".fancy-ajax").each(function(){
        var $this = $(this);
        $this.removeClass("fancy-ajax");
        $this.fancybox({
            padding : 0,
            type : "ajax",
            helpers: {
                overlay: {
                    locked: true 
                }
            },
            beforeShow: function(){
                
            },
            afterShow: function(){
                
            },
            beforeClose: function(){
                
            },
            afterClose: function(){
                
            }
        });
    });
}
