function getNextField($form){
	var j = 1;
	while( $form.find("input[name="+j+"]").length ){
		j++;
	}
	return j;
}

var customHandlers = [];

$(document).ready(function(){	
	var rePhone = /^\+\d \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
		tePhone = '+7 (999) 999-99-99';

	$.validator.addMethod('customPhone', function (value) {
		return rePhone.test(value);
	});

	$("form").each(function(){
		$(this).validate({
			rules: {
				date : {
                	date : false
            	},
				email: 'email',
				phone: 'number',
				phone2: 'number'
			}
		});
		// if( $(this).find("input.phone").length ){
			// $(this).find("input.phone").mask(tePhone,{placeholder:"_"});
		// }
		$("input[type=text],textarea").blur(function(){
			if((!$(this).prop("required") && $(this).val()=="") || $(this).attr("id")=="promo-code" || $(this).hasClass("count")) {
				$(this).removeClass("error valid");
			}	
			if($(this).prop("required") && $(this).val()=="") {
				$(this).removeClass("valid").addClass("error");
			}
		});
	});

	function whenScroll(){
		var scroll = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
		if( customHandlers["onScroll"] ){
			customHandlers["onScroll"](scroll);
		}
	}
	$(window).scroll(whenScroll);
	whenScroll();


	$(".b-go").click(function(){
		var block = $( $(this).attr("data-block") ),
			off = $(this).attr("data-offset")||0;
		$("body, html").animate({
			scrollTop : block.offset().top-off
		},800);
		return false;
	});

	$(".fancy-img").fancybox({
		padding : 0
	});

	$(".ajax-form").parents("form").submit(function(){
        if( $(this).find("input.error,select.error,textarea.error").length == 0 ){
            var $this = $(this),
                $thanks = $($this.attr("data-block"));

            if( $this.find(".ajax-form").hasClass("blocked") ) return false;

            if( $this.attr("data-beforeAjax") && customHandlers[$this.attr("data-beforeAjax")] ){
                customHandlers[$this.attr("data-beforeAjax")]($this);
            }

            $this.find(".ajax-form").addClass("blocked");

            $.ajax({
                type: $(this).attr("method"),
                url: $(this).attr("action"),
                data:  $this.serialize(),
                success: function(msg){
                    var $form = $this,
                        json = JSON.parse(msg);

                    $form.find(".b-first-step").hide();

                    $this.find(".ajax-form").removeClass("blocked");

                    if( json.result == "success" ){
                        if( json.number ) $form.find(".b-order-number").text(json.number);
                        $form.find(".b-second-step").show();
                    }else{
                        $form.find(".b-third-step").show();
                    }

                    if( $this.attr("data-afterAjax") && customHandlers[$this.attr("data-afterAjax")] ){
                        customHandlers[$this.attr("data-afterAjax")]($this);
                    }

                    $this.find("input[type=text],textarea").val("").removeClass("error").removeClass("valid");
                },
            });
        }
        return false;
    });

	$(".ajax").parents("form").submit(function(){
  		if( $(this).find("input.error,select.error,textarea.error").length == 0 ){
  			var $this = $(this),
  				$thanks = $($this.attr("data-block"));

  			if( $this.attr("data-beforeAjax") && customHandlers[$this.attr("data-beforeAjax")] ){
				customHandlers[$this.attr("data-beforeAjax")]($this);
			}

  			$.ajax({
			  	type: $(this).attr("method"),
			  	url: $(this).attr("action"),
			  	data:  $this.serialize(),
				success: function(msg){
					var $form;
					if( msg == "1" ){
						$form = $thanks;
					}else{
						$form = $("#b-popup-error");
					}

					if( $this.attr("data-afterAjax") && customHandlers[$this.attr("data-afterAjax")] ){
						customHandlers[$this.attr("data-afterAjax")]($this);
					}

					$this.find("input[type=text],textarea").val("");
					$.fancybox.open({
						content : $form,
						padding : 0
					});	
				}
			});
  		}
  		return false;
  	});
});