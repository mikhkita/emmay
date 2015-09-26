(function ($, $document, $window) {
	var progress = new KitProgress("#f98411",2),rsCase1,rsCase2;
    progress.endDuration = 0.1;
    $("body").on('click',".b-item-gallery-arrow.right-arrow",function(){
    	$(".rsThumbsArrowRight").trigger("click"); return false;
    });

    $("body").on('click',".b-item-gallery-arrow.left-arrow",function(){
    	$(".rsThumbsArrowLeft").trigger("click"); return false;
    });

	//фильтры товаров
	$("body").on('change',"input[name='item-color'],input[name='item-count']",function(){
		progress.start(1.5);
        $.ajax({
            type: $("#item-form").attr("method"),
            url: $("#item-form").attr("action"),
            data:  $("#item-form").serialize(),
            success: function(msg){
            	progress.end(function(){
            		$(".ajax-container").html(msg);		
            		sliders_init();
            		history.pushState(null,null,this.href);
            		history.replaceState(null,null,$(".b-container.item").attr("data-href"));
                });
            	
            }
        });

    });
    sliders_init();

    window.onpopstate = function(event) {
    	window.location.assign(document.location);
	};
    function sliders_init() {
		// фото с доставок
		rsCase1 = $('.b-item-gallery').find('.royalSlider').royalSlider({
	    	controlNavigation: 'thumbnails',
		    autoScaleSlider: true, 
	//	    autoScaleSliderWidth: 960,     
	//	    autoScaleSliderHeight: 500,
		    loop: true,
		    imageScaleMode: 'fit-if-smaller',
		    navigateByClick: true,
		    numImagesToPreload:2,
		    arrowsNav:true,
		    arrowsNavAutoHide: false,
		    arrowsNavHideOnTouch: false,
		    keyboardNavEnabled: true,
		    fadeinLoadedSlide: true,
		    globalCaption: false,
		    globalCaptionInside: false,
		    thumbs: {
		      appendSpan: true,
		      firstMargin: true,
		      paddingBottom: 4
		    }
	    }).data('royalSlider');
		
		
		//похожие товары 
		rsCase2 = $('.b-catalog-relative').find('.royalSlider').royalSlider({
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

	