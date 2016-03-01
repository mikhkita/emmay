(function ($, $document, $window) {
    $("body").on('click',".b-item-gallery-arrow.right-arrow",function(){
    	$(".rsThumbsArrowRight").trigger("click"); return false;
    });

    $("body").on('click',".b-item-gallery-arrow.left-arrow",function(){
    	$(".rsThumbsArrowLeft").trigger("click"); return false;
    });

	//фильтры товаров
	$("body").on('change',"input[name='item-color'],input[name='item-count']",function(){
		var item = $(this).val();
		progress.start(1.5);
		$("body, html").animate({
			scrollTop : $(".b-item-left").offset().top-80
		},400);
        $.ajax({
            type: $("#item-form").attr("method"),
            url: $("#item-form").attr("action"),
            data:  { item: item },
            success: function(msg){
            	progress.end();
        		$(".ajax-container").html(msg);		
        		sliders_init();
        		img_load();
        		history.pushState(null,null,this.href);
        		history.replaceState(null,null,$(".b-container.item").attr("data-href"));
        		bindFancy();
            }
        });

    });
	

	var myWidth,myHeight;
	function resize(){
       if( typeof( window.innerWidth ) == 'number' ) {
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        } else if( document.documentElement && ( document.documentElement.clientWidth || 
        document.documentElement.clientHeight ) ) {
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }	
    };
  	$(window).resize(resize);
  	resize();

  	
    sliders_init();

    $(document).load(function(){
    	window.onpopstate = function(event) {
	    	window.location.assign(document.location);
		};
    });
    
    function img_load() {
		var imgs = document.getElementById('dev-photo').getElementsByTagName('img');
        for (var i = 0; i < imgs.length; i++) {
          var url = imgs[i].parentNode.href;
          var img = document.createElement('img');
          img.src = url;
        }
	}    
 	function sliders_init() {
		// фото с доставок
		var init=true;
		$(".b-item-left .slick-slider,.b-item-left .b-item-gallery,.b-item-left .delivery-link").css("opacity",0);
		$(".b-item-gallery .pre-init").show();
		rsCase = $('.b-item-gallery').find('.royalSlider').royalSlider({
	    	controlNavigation: 'thumbnails',
		    // autoScaleSlider: true, 
		    loop: true,
		    imageScaleMode: 'fit-if-smaller',
		    imageScalePadding: 0,
		    navigateByClick: true,
		    numImagesToPreload:2,
		    transitionSpeed: 300,
		    arrowsNav:true,
		    arrowsNavAutoHide: false,
		    arrowsNavHideOnTouch: false,
		    keyboardNavEnabled: true,
		    fadeinLoadedSlide: true,
		    globalCaption: true,
		    globalCaptionInside: true,
		    addActiveClass: true,
		    thumbs: {
		      appendSpan: true,
		      firstMargin: true,
		      transitionSpeed: 300
		    }
	    }).data('royalSlider');
		

		rsCase.slides[0].holder.on('rsAfterContentSet', function() {
			if(init) {
		    	$(".b-item-left .slick-slider,.b-item-left .b-item-gallery,.b-item-left .delivery-link").css("opacity",1);
		    	$(".b-item-gallery .pre-init").hide();
		    	init = false;
		    }
		});

		rsCase.ev.on('rsAfterSlideChange', function(event) {
		    $(".rsThumb").css("border","2px solid rgba(0,0,0,0)");
			$(".rsThumb.rsNavSelected").css("border","2px solid #00cd71");
			$(".slide-text").show();
			// $(".zoomContainer").remove();
			// $(".rsSlide.rsActiveSlide img").elevateZoom({
			//   zoomType				: "inner",
			//   cursor: "crosshair"
			// });

		});

	    rsCase.ev.on('rsAfterContentSet', function(e, slideObject) {
	    	if( myWidth >= 768) {
	    		$(slideObject.content[0]).attr("data-large",$(slideObject.thumbnail).attr("data-large"));
	    		// $(".zoomContainer").remove();
	    // 		if(slideObject.id==0) {
		   //  		$(slideObject.content[0]).elevateZoom({
					//   zoomType				: "inner",
					//   cursor: "crosshair"
					// });
	    // 		}

		    	$(slideObject.content[0]).imagezoomsl({
					innerzoom: true,
					scrollspeedanimate: 2,
					magnifierborder: "1px solid rgba(0,0,0,0)",
					magnifiereffectanimate: "fadeIn",
					zindex: 98,
					switchsides: false,
					leftoffset: 0,
					rightoffset: 0	 
				});
				// $(slideObject.content[0]).elevateZoom({
				//   zoomType				: "inner",
				//   cursor: "crosshair"
				// });
			}
		    if( $(".rsThumbs img").length <= 1 ){
		    	$(".rsThumbs, .b-item-gallery-arrow").hide();
		    	$(".rsArrow").addClass("hidden");
		    }
		});
		rsCase.ev.on('rsVideoPlay', function() {
		    $(".slide-text").hide();

		});
		$("body").on("click",".delivery-link", function(){
			if(!$(this).hasClass("active")) {
				$(".b-photo-delivery").slideDown();	
				$(this).addClass("active");
			} else { 
				$(this).removeClass("active");
				$(".b-photo-delivery").slideUp();
			}
			return false;
		});

		$("body").on("click",".b-photo-delivery img", function(){
			$(".rsContainer,.rsArrow,.rsGCaption,.zoom").hide();
			$(".slick-big").show();
			$(".slick-big").slick('setPosition');
			$(".rsThumb").css("border","2px solid rgba(0,0,0,0)");
			$(".b-photo-delivery img").css("border","2px solid rgba(0,0,0,0)");
			$(this).css("border","2px solid #00cd71");
			$('.slick-big').slick('slickGoTo',$(this).index());
			// if(!$(this).hasClass("active")) {
			// 	$(".b-photo-delivery a.active").removeClass("active");
			// 	$(this).addClass("active");
			// 	var id = rsCase.currSlideId;
			// 	if(!$(".b-item-gallery .zoom:visible").length) { 
			// 		rsCase.removeSlide(id);
			// 		delivery_id = false;
			// 	} else id++;
			// 	rsCase.appendSlide($(this).clone(),id);
			// 	$(".b-item-gallery .zoom").hide();
			// 	delivery = true;
			// 	rsCase.goTo(id);
			// 	delivery_id = id;
			// }
			// return false;
		});
		$("body").on("click",".rsThumb",function(){
			$(".rsThumb").css("border","2px solid rgba(0,0,0,0)");
			$(".rsThumb.rsNavSelected").css("border","2px solid #00cd71");
			$(".b-photo-delivery img").css("border","2px solid rgba(0,0,0,0)");
			$(".rsContainer,.rsArrow,.rsGCaption,.zoom").show();
			$(".slick-big").hide();
		});

		$('.slick-big').slick({
  			prevArrow: '<span class="slick-arrow slick-prev"></span>',
            nextArrow: '<span class="slick-arrow slick-next"></span>',
            // asNavFor: '.b-photo-delivery',
            speed: 300
		});
		// $('.b-photo-delivery').slick({
		// 	arrows: false,
		// 	slidesToShow: 6,
		// 	slidesToScroll: 1,
		// 	asNavFor: '.slick-big',
		// 	focusOnSelect: true
		// });

		$('.slick-big').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$(".b-photo-delivery img").eq(nextSlide).click();
			// $('.b-photo-delivery').slick('slickGoTo',nextSlide,false);
		});

		// rsCase.ev.on('rsBeforeMove', function(event, type, userAction ) {
		// 	if(delivery_id != false) {
	 //    		rsCase.removeSlide(delivery_id);
	 //    		delivery_id = false;
	 //    		$(".b-item-gallery .zoom").show();
	 //    	}
		// });
		
		//похожие товары 
		rsCase1 = $('.b-catalog-relative').find('.royalSlider').royalSlider({
	    	keyboardNavEnabled: true,
	        controlNavigation: 'bullets',
	        loop: true,
	        startSlideId: 0,
			imageScalePadding: 0,
			firstMargin: 0,
			transitionSpeed: 350,
	        navigateByClick: true,
			autoHeight: true,
			easeInOut: 'easeInOutQuint',		
			easeOut: 'easeOutQuint',
	        slidesSpacing: 0,
			autoScaleSlider: false,
	//		autoScaleSliderWidth: 232,
	        arrowsNav: false,
	        arrowsNavAutoHide: false
	    }).data('royalSlider');
	    
	}

	

})(jQuery, jQuery(document), jQuery(window));

	