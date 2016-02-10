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
	var delivery_id = false,delivery=false;
    sliders_init();
    var blocked = true;

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
		rsCase = $('.b-item-gallery').find('.royalSlider').royalSlider({
	    	controlNavigation: 'thumbnails',
		    // autoScaleSlider: true, 
		    loop: true,
		    imageScaleMode: 'fit-if-smaller',
		    imageScalePadding: 0,
		    navigateByClick: true,
		    numImagesToPreload:2,
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
		      firstMargin: true
		    }
	    }).data('royalSlider');

		rsCase.ev.on('rsAfterSlideChange', function(event) {
		    $(".rsThumb").css("border","2px solid rgba(0,0,0,0)");
			$(".rsThumb.rsNavSelected").css("border","2px solid #00cd71");
		});

	    rsCase.ev.on('rsAfterContentSet', function(e, slideObject) {
	  //   	if(!delivery) {
	  //   		$(slideObject.content[0]).attr("data-large",$(slideObject.thumbnail).attr("data-large"));
		 //    	$(slideObject.content[0]).imagezoomsl({
			// 		innerzoom: true,
			// 		magnifierborder: "fit-if-smaller",
			// 		magnifiereffectanimate: "fadeIn",
			// 		zindex: 99,
			// 		switchsides: false,
			// 		leftoffset: 0,
			// 		rightoffset: 0	 
			// 	});

			// } else delivery = false;
		    if( $(".rsThumbs img").length <= 1 ){
		    	$(".rsThumbs, .b-item-gallery-arrow").hide();
		    	$(".rsArrow").addClass("hidden");
		    }
		});
		
		$("body").on("click",".delivery-link", function(){
			if(!$(this).hasClass("active")) {
				$(".b-photo-delivery").show();
				$(".b-photo-delivery").slick('setPosition');	
				$(this).addClass("active");
			} else { 
				$(this).removeClass("active");
				$(".b-photo-delivery").hide();
			}
			return false;
		});


		$("body").on("click",".b-photo-delivery .dev-slide", function(){
			$(".rsContainer,.rsArrow,.rsGCaption,.zoom").hide();
			$(".slick-big").show();
			$(".slick-big").slick('setPosition');
			$(".rsThumb").css("border","2px solid rgba(0,0,0,0)");
			$(".b-photo-delivery .slick-slide").css("border","2px solid rgba(0,0,0,0)");
			$(".b-photo-delivery .slick-current").css("border","2px solid #00cd71");
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
			$(".b-photo-delivery .slick-slide").css("border","2px solid rgba(0,0,0,0)");
			$(".rsContainer,.rsArrow,.rsGCaption,.zoom").show();
			$(".slick-big").hide();
		});

		$('.slick-big').slick({
  			prevArrow: '<span class="slick-arrow slick-prev"></span>',
            nextArrow: '<span class="slick-arrow slick-next"></span>',
            asNavFor: '.b-photo-delivery'
		});
		$('.b-photo-delivery').slick({
			arrows: false,
			slidesToShow: 6,
			slidesToScroll: 1,
			asNavFor: '.slick-big',
			focusOnSelect: true,
			 responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
		});

		rsCase.ev.on('rsBeforeMove', function(event, type, userAction ) {
			if(delivery_id != false) {
	    		rsCase.removeSlide(delivery_id);
	    		delivery_id = false;
	    		$(".b-item-gallery .zoom").show();
	    	}
		});
		
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

	