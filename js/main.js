(function ($, $document, $window) {
	
	//фильтры товаров
	
	
	// фото с доставок
	var rsCase = $('.b-photos-gallery').find('.royalSlider').royalSlider({
    	keyboardNavEnabled: true,
        controlNavigation: 'bullets',
        loop: true,
        startSlideId: 0,
		imageScalePadding: 0,
		firstMargin: 0,
		transitionSpeed: 350,
        navigateByClick: false,
		easeInOut: 'easeInOutQuint',		
		easeOut: 'easeOutQuint',
        slidesSpacing: 0,
		autoHeight: true,
		autoScaleSlider:false,
		imageScaleMode:'none',
		imageAlignCenter: false,
        arrowsNav: false,
        arrowsNavAutoHide: false
    }).data('royalSlider');
	
	
	//отзывы клиентов 
	var rsCase = $('.b-review-gallery').find('.royalSlider').royalSlider({
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
	
	
/*	// отзывы клиентов
	$.fn.gallery = function () {
        if (this.length) {
            this.each(function () {
                var t = $(this);
                var rsCase = t.find('.royalSlider').royalSlider({
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
            });
        }
        return this;
    };
	$(window).load(function() {
		$('.b-photos-gallery, , .b-banner-gallery').gallery();
	});
*/
	
	// фото-баннер	
	var rsCase = $('.b-banner-gallery').find('.royalSlider').royalSlider({
    	keyboardNavEnabled: true,
        controlNavigation: 'bullets',
        loop: true,
        startSlideId: 0,
		imageScalePadding: 0,
		firstMargin: 0,
		transitionSpeed: 350,
        navigateByClick: false,
		easeInOut: 'easeInOutQuint',		
		easeOut: 'easeOutQuint',
        slidesSpacing: 0,
        arrowsNav: true,
        arrowsNavAutoHide: true,
		autoHeight: true,
		autoScaleSlider:false,
		imageScaleMode:'none',
		imageAlignCenter: false
    }).data('royalSlider');
	
})(jQuery, jQuery(document), jQuery(window));

