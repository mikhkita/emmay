(function ($, $document, $window) {

    $(".b-item-gallery-arrow.right-arrow").click(function(){
    	$(".rsThumbsArrowRight").trigger("click"); return false;
    });

    $(".b-item-gallery-arrow.left-arrow").click(function(){
    	$(".rsThumbsArrowLeft").trigger("click"); return false;
    });


    $(function() {
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
	//фильтры товаров
	
	
	// фото с доставок
	var rsCase = $('.b-item-gallery').find('.royalSlider').royalSlider({
    	controlNavigation: 'thumbnails',
	    autoScaleSlider: true, 
//	    autoScaleSliderWidth: 960,     
//	    autoScaleSliderHeight: 500,
	    loop: true,
	    imageScaleMode: 'fit-if-smaller',
	    navigateByClick: true,
	    numImagesToPreload:2,
	    arrowsNav:true,
	    arrowsNavAutoHide: true,
	    arrowsNavHideOnTouch: true,
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
	var rsCase = $('.b-catalog-relative').find('.royalSlider').royalSlider({
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
	

})(jQuery, jQuery(document), jQuery(window));

