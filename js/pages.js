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
    };
    $window.resize(function () {
        resizePort();
    });
    resizePort();

    $('.burger-link').click(function() {

        $(this).toggleClass('active');
        if (winW < MENUPX) {
            if($('.b-aside-nav').hasClass('active-aside')){
                $('.all-overlay').removeClass('active-overlay');
                $('.b-aside-nav').removeClass('active-aside');
                $('.b-allwrap').removeClass('active-main');
            }
            else{
                $('.all-overlay').addClass('active-overlay');
                $('.b-aside-nav').addClass('active-aside');
                $('.b-allwrap').addClass('active-main');
            }
        }
        else{
            if ($('.tablet-menu').hasClass('active'))
            {
                $('.all-overlay').removeClass('active-overlay');
                $('.tablet-menu').removeClass('active').fadeOut();
                $('.b-close-tablet-menu').removeClass('active');
            }
            else
            {
                $('.all-overlay').addClass('active-overlay');
                $('.b-close-tablet-menu').addClass('active');
                $('.tablet-menu').addClass('active').slideDown();
            }
        }
    });
    $('.b-close-tablet-menu').click(function() {
        $('.burger-link').trigger('click');
    });
    $('.all-overlay, .close-menu').click(function() {
        $('.burger-link').trigger('click');
    });


	//основное меню
	$('li.dropdown').hover(function() {
		$('.b-subblock').slideDown();
		$(this).addClass('active')
	}, function() {		
		$('.b-subblock').bind("mouseleave",function() {
            $('.b-subblock').unbind("mouseleave");
			$('.b-subblock').slideUp();
			$('li.dropdown.active').removeClass('active')		
		});
		
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


})(jQuery, jQuery(document), jQuery(window));

