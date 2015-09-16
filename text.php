<?

$useragent=$_SERVER['HTTP_USER_AGENT'];
$mobile = (preg_match('/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i',$useragent)||preg_match('/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i',substr($useragent,0,4)))

?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>	
	<meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title></title>
	
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width">

    <? if( $mobile ): ?>
	<meta name="viewport" content="width=750, user-scalable=no">
	<? endif; ?>
	
	<meta name="description" content="">

	<link rel="stylesheet" type="text/css" href="css/reset.css" />
	<link rel="stylesheet" type="text/css" href="js/fancybox/source/jquery.fancybox.css" />
	<link rel="stylesheet" type="text/css" href="css/jquery-ui.css" />	
    <link rel="stylesheet" type="text/css" href="css/layout.css" />	
    <link rel="stylesheet" type="text/css" href="css/retina.css" />	

	<link rel="stylesheet" media="screen and (min-width: 240px) and (max-width: 767px)" href="css/layout-mobile.css" />
	<link rel="stylesheet" media="screen and (min-width: 768px) and (max-width: 1024px)" href="css/layout-tablet.css" />
	<link rel="stylesheet" media="screen and (min-width: 1025px)" href="css/layout-desktop.css" />

	<link rel="stylesheet" type="text/css" href="css/royalslider.css" />	
	<link rel="stylesheet" type="text/css" href="css/rs-default.css" />	
	
	<link rel="icon" href="favicon.ico" type="image/x-icon"/>
	<link rel="shortcut icon" href="favicon.png" type="image/x-icon"/>
	
	<script src="js/modernizr-2.8.3.min.js"></script>	     

	<!--[if lte IE 9]>
		<link rel="stylesheet" type="text/css" href="css/lteIE9.css" />	
	<![endif]-->
</head>
<body>
	<!--[if lt IE 8]>
        <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
<div class="b-popups">
	<div class="popup-callback popup-wrap">
	</div>
	<div class="popup-fastorder popup-wrap">
	</div>
	<div class="popup-item popup-wrap">
	</div>
</div>	
<div id="all" class="page-main">	
	<div class="b-aside-nav">	
		<span class="b-nav-burger-span close-menu"><span class="b-nav-burger-ico"></span></span>
		<div class="b-aside-overflow">
			<div class="b-aside-nav-wrap">
				<ul class="b-menu-list">
					<li class="b-menu-item">
						<div class="suvlak-side">
							<ul class="ss-nav-cat">
								<li class="dropdown ss-nav-cat-1 drop-mobile">
									<a href="#">ЦВЕТЫ</a>
									<ul class="b-submenu">
										<li><a href="/catalog/rozy/">Розы</a></li>
										<li><a href="/catalog/alstromerii/">Альстромерии</a></li>
										<li><a href="/catalog/gvozdiki/">Гвоздики</a></li>
										<li><a href="/catalog/gerbery/">Герберы</a></li>
										<li><a href="/catalog/lilii/">Лилии</a></li>
										<li><a href="/catalog/orkhidei/">Орхидеи</a></li>
										<li><a href="/catalog/piony/">Пионы</a></li>
										<li><a href="/catalog/tyulpany/">Тюльпаны</a></li>
										<li><a href="/catalog/khrizantemy/">Хризантемы</a></li>									
									</ul>	
								</li>
								<li><a href="#">БУКЕТЫ</a></li>
								<li class="dropdown ss-nav-cat-1 drop-mobile"><a href="#">ПОВОД</a>
									<ul class="b-submenu">
										<li><a href="/catalog/14-fevralya/">14 февраля</a></li>
										<li><a href="/catalog/8-marta/">8 марта</a></li>
										<li><a href="/catalog/babushke/">Бабушке</a></li>
										<li><a href="/catalog/bukety-na-novyy-god/">Букеты на новый год</a></li>
										<li><a href="/catalog/den-rozhdeniya/">День рождения</a></li>
										<li><a href="/catalog/dlya-muzhchin/">Для мужчины</a></li>
										<li><a href="/catalog/lyubimoy-dochke/">Любимой дочке</a></li>
										<li><a href="/catalog/na-vypisku-iz-roddoma/">На выписку из роддома</a></li>	
										<li><a href="/catalog/na-pervoe-svidani/">На первое свидание</a></li>
										<li><a href="/catalog/podarok-kolleg/">Подарок коллеге</a></li>
										<li><a href="/catalog/podarki-na-svadbu/">Свадебные букеты</a></li><li><a href="/catalog/syurpriz-devushke/">Сюрприз девушке</a></li>
									</ul>
								</li>
								<li class="ss-nav-cat-1"><a href="#">ПОДАРКИ</a>
									<ul>
										<li><a href="/catalog/vozdushnye-shary/">Воздушные шары</a></li>
										<li><a href="/catalog/konfety/">Конфеты</a></li>
										<li><a href="/catalog/mishki/">Мишки</a></li>
										<li><a href="/catalog/fruktovye-korziny/">Фруктовые корзины</a></li>
									</ul>
								</li>
								<li><a href="#">СЕРДЦА</a></li>
								<li><a href="#">КОРЗИНЫ</a></li>
							</ul>
						</div>
					</li>			
					<li class="b-menu-item b-menu-item-search">
						<form action="">
							<input class="top-menu-search" type="Search" placeholder="search" value="" />
							<button class="top-menu-searcher" type="button"><span></span></button>
						</form>
					</li>
					<li class="b-menu-item">
						<p><span class="b-menu-phone"><a href="tel://8-800-775-93-00">8 (800) 775-93-80</a> - Круглосуточно</span></p>
						<p>Группа <a href="http://vk.com/yammeflowers">Вконтакте</a></p>
						<p>Напишите нам: <a href="mailtp:info@yamme.ru">info@yamme.ru</a></p>
						<p>© 2009-2015 yamme.ru</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="b-allwrap">	
		<div class="b-container b-topmenu">
			<div class="b-wrap clearfix">
				<div class="b-cart-menu-cont">
					<div class="b-cart-menu">
						<h3 class="popup-title">Корзина</h3>
						<ul class="b-cart-items">
							<li class="clearfix">
								<a href="#"><img src="i/basket-table.jpg" alt="" class="left"></a>
								<div class="b-desc right">
									<a href="#">Букет из 11 красных роз</a>
									<h4>5 200 руб.</h4>
									<span class="b-cart-item-count">2шт.</span>
								</div>
								<a href="#" class="close-button"></a>
							</li>
							<li class="clearfix">
								<img src="i/basket-table.jpg" alt="" class="left">
								<div class="b-desc right">
									<a href="#">Букет из 11 красных роз</a>
									<h4>5 200 руб.</h4>
								</div>
								<a href="#" class="close-button"></a>
							</li>
							<li class="clearfix">
								<img src="i/basket-table.jpg" alt="" class="left">
								<div class="b-desc right">
									<a href="#">Букет из 11 красных роз</a>
									<h4>5 200 руб.</h4>
								</div>
								<a href="#" class="close-button"></a>
							</li>
						</ul>
						<div class="b-cart-bottom clearfix">
							<div class="b-total-price left">10 400 <span class="rub">руб.</span></div>
							<a href="#" class="btn btn-g right"><span>Оформить</span></a>
						</div>
					</div>
				</div>
				<div class="b-topmenu-help">
					<a href="tel://8-800-775-93-00" class="topmenu-tel">8 (800) 775-93-80</a>
					<a href="#" class="b-topmenu-callback fancy" data-block="#b-callback">Заказать звонок</a>
				</div>				
				<a href="#" class="b-topmenu-basket">
					<span class="b-top-basket-name">КОРЗИНА</span>
					<span class="b-top-basket-count">4</span>
				</a>			
				<div class="b-topmenu-links">
					<ul>
						<li><a href="#">СТАТУС ЗАКАЗА</a></li>
						<li><a href="#">ОПЛАТА ПО НОМЕРУ</a></li>
					</ul>
				</div>
			</div>
		</div>	
		<div class="b-container b-header">
			<div class="b-wrap">
				<a href="main.php" class="b-logo"><span>Yamme</span></a>
				<div class="b-head-city">
					Город<font> доставки</font>: <a class="b-choose-city fancy" href="#" data-block="#b-city"><span>Санкт-Петербург</span></a>
				</div>
				<div class="b-head-features">
					<ul>
						<li><span class="b-feature-item f-ico-1"><span class="ico-item"></span><strong>Бесплатная доставка</strong></span></li>
						<li><span class="b-feature-item f-ico-2"><span class="ico-item"></span><strong>Бесплатное фото получателя</strong></span></li>
						<li><span class="b-feature-item f-ico-3"><span class="ico-item"></span><strong>Бесплатная открытка</strong></span></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="b-container b-navigation">
			<div class="b-container b-nav" data-spy="affix" data-child=".b-cart-menu" data-offset-top="181" data-offset-bottom="200">
				<div class="b-wrap">	
					<div class="b-mobile-nav clearfix">
						<a href="#" class="b-burger-button burger-link left"></a>
						<div class="b-phone">
							<a href="tel://8-800-775-93-00" class="topmenu-tel">8 (800) 775-93-80</a>
							<span class="b-nav-phone-time">24 ЧАСА 7 ДНЕЙ В НЕДЕЛЮ</span>
						</div>
						<a href="#" class="b-small-cart-icon right fancy" data-block=".b-cart-menu"></a>
					</div>
					<div class="b-nav-block">
						<ul class="b-nav-list">
							<li class="dropdown drop-mobile">
								<a href="#">ЦВЕТЫ</a>
								<div class="b-submenu">
									<ul class="clearfix">
										<li><a href="/catalog/rozy/">Розы</a></li>
										<li><a href="/catalog/alstromerii/">Альстромерии</a></li>
										<li><a href="/catalog/gvozdiki/">Гвоздики</a></li>
										<li><a href="/catalog/gerbery/">Герберы</a></li>
										<li><a href="/catalog/lilii/">Лилии</a></li>
										<li><a href="/catalog/orkhidei/">Орхидеи</a></li>
										<li><a href="/catalog/piony/">Пионы</a></li>
										<li><a href="/catalog/tyulpany/">Тюльпаны</a></li>
										<li><a href="/catalog/khrizantemy/">Хризантемы</a></li>									
									</ul>	
								</div>
							</li>
							<li><a href="#">БУКЕТЫ</a></li>
							<li class="dropdown drop-mobile"><a href="#">ПОВОД</a>
								<div class="b-submenu">
									<ul class="clearfix">
										<li><a href="/catalog/14-fevralya/">14 февраля</a></li>
										<li><a href="/catalog/8-marta/">8 марта</a></li>
										<li><a href="/catalog/babushke/">Бабушке</a></li>
										<li><a href="/catalog/bukety-na-novyy-god/">Букеты на новый год</a></li>
										<li><a href="/catalog/den-rozhdeniya/">День рождения</a></li>
										<li><a href="/catalog/dlya-muzhchin/">Для мужчины</a></li>
										<li><a href="/catalog/lyubimoy-dochke/">Любимой дочке</a></li>
										<li><a href="/catalog/na-vypisku-iz-roddoma/">На выписку из роддома</a></li>	
										<li><a href="/catalog/na-pervoe-svidani/">На первое свидание</a></li>
										<li><a href="/catalog/podarok-kolleg/">Подарок коллеге</a></li>
										<li><a href="/catalog/podarki-na-svadbu/">Свадебные букеты</a></li><li><a href="/catalog/syurpriz-devushke/">Сюрприз девушке</a></li>
									</ul>
								</div>
							</li>
							<li><a href="#">ПОДАРКИ</a>
								<div class="b-submenu">
									<ul class="clearfix">
										<li><a href="/catalog/vozdushnye-shary/">Воздушные шары</a></li>
										<li><a href="/catalog/konfety/">Конфеты</a></li>
										<li><a href="/catalog/mishki/">Мишки</a></li>
										<li><a href="/catalog/fruktovye-korziny/">Фруктовые корзины</a></li>
									</ul>
								</div>
							</li>
							<li><a href="#">Розы</a></li>
							<li><a href="#">Все букеты</a></li>
						</ul>
					</div>	
					<div class="b-nav-search">
					<form action="">
						<input class="top-menu-search" type="Search" placeholder="search" value="" />
						<button class="top-menu-searcher" type="button"><span></span></button>						
					</form>
					</div>
					<!-- mobile-view burder -->
					<div class="b-nav-wrap">
						<div class="b-nav-burger">
							<span class="b-nav-burger-span burger-link">
								<span class="b-nav-burger-ico"></span>
							</span>
						</div>						
					</div>
					<!-- /mobile-view burder -->	
					<!-- affix-shown block -->
					<div class="b-nav-phone">
						<a href="tel://8-800-775-93-00" class="topmenu-tel">8 (800) 775-93-80</a>
						<span class="b-nav-phone-time">24 ЧАСА 7 ДНЕЙ В НЕДЕЛЮ</span>
					</div>
					<a href="#" class="b-topmenu-basket">
						<span class="b-top-basket-name">КОРЗИНА</span>
						<span class="b-top-basket-count">4</span>
					</a>
					<!-- /affix-shown block -->			
					<div class="b-mobile-view tablet-menu">
						<ul class="b-smallorder-list">
							<li class="item clearfix">
								<a href="/products/kudesnitse/" title="Кудеснице" class="product-image">
									<img src="/upload/resize_cache/iblock/d4e/50_50_1/d4ecd5086378a0f9545e125270980b41.jpg" alt="Кудеснице">
									<span></span>
								</a>
								<div class="product-details">
									<a href="?remove=22606" title="Удалить" onclick="return confirm('Вы точно уверенны, что хотите удалить?');" class="btn-remove">Удалить</a> 
									<p class="product-name">
										<a href="/products/kudesnitse/">Кудеснице</a>
									</p>
									<strong>1.00</strong> x <span class="price">2070 <span class="ru">Р</span></span>   
								</div>
							</li>
							<li class="item clearfix">
								<a href="/products/osobyy/" title="Особый из 9 роз" class="product-image">
									<img src="/upload/resize_cache/iblock/4bf/50_50_1/4bff08be73aa6dfde7412d8fe0dd6fee.jpg" alt="Особый из 9 роз">
									<span></span>
								</a>
								<div class="product-details">
									<a href="?remove=22607" title="Удалить" onclick="return confirm('Вы точно уверенны, что хотите удалить?');" class="btn-remove">Удалить</a> 
									<p class="product-name">
										<a href="/products/osobyy/">Особый из 9 роз</a>
									</p>
									<strong>2.00</strong> x <span class="price">1390 <span class="ru">Р</span></span>   
								</div>
							</li>
						</ul>
						<h3>Итого: 4004 руб.</h3>
						<p><a href="#">Оформить заказ</a></p>
					</div>
				</div>
				<!-- <div class="b-container b-subblock">
					<div class="b-wrap b-menu-1">
						<ul class="b-submenu">
							<li class="active"><a href="/catalog/rozy/">Розы</a></li>
							<li><a href="/catalog/alstromerii/">Альстромерии</a></li>
							<li><a href="/catalog/gvozdiki/">Гвоздики</a></li>
							<li><a href="/catalog/gerbery/">Герберы</a></li>
							<li><a href="/catalog/lilii/">Лилии</a></li>
							<li><a href="/catalog/orkhidei/">Орхидеи</a></li>
							<li><a href="/catalog/piony/">Пионы</a></li>
							<li><a href="/catalog/tyulpany/">Тюльпаны</a></li>	
						</ul>
					</div>
				</div> -->
			</div>			
		</div>
		<div class="b-container b-main-about">
			<div class="b-wrap clearfix">			
				<ul>
					<li><a href="ajax/text-popup.php" class="fancy-ajax" >О нас</a></li>
					<li><a href="ajax/text-popup.php" class="fancy-ajax" >Способы оплаты</a></li>
					<li><a href="ajax/text-popup.php" class="fancy-ajax" >Способы доставки</a></li>
					<li><a href="ajax/text-popup.php" class="fancy-ajax" >Гарантии Yamme</a></li>
					<li><a href="ajax/text-popup.php" class="fancy-ajax" >Свежие цветы</a></li>
					<li><a href="ajax/text-popup.php" class="fancy-ajax" >Вопросы и ответы</a></li>
					<li><a href="ajax/text-popup.php" class="fancy-ajax" >Возврат</a></li>
				</ul>
			</div>
		</div>

		<div class="b-container">
			<div class="b-wrap clearfix">		
				<div class="yamme-text-block">
				    <h1>Как сохранить цветы свежими</h1>
				    <p>Итак, <b>вам подарили</b> <a href="#">букет из роз</a> и вы хотите сохранить их свежесть как можно дольше. Ниже представлены основные способы сохранить свежесть роз как можно дольше:</p>
				    <p>Роза – капризный цветок, она не любит соседства с другими растениями. Что продлить ее жизнь, необходимо убрать из букета все прочие цветы и веточки и освободить от упаковки.</p>
				    <img src="i/t/item-1.jpg" class="center-block" alt="">
				    <p>Обрезать стебли роз необходимо по косой с помощью острой бритвы, ножа, или секатора. Срез нужно делать обязательно под водой, в этом случае канальца, по которым цветок пьет воду, не забьются воздушными пробками.</p>
				    <div class="center-block">
				        <img src="i/t/item-1.jpg" alt="">
				       <img src="i/t/item-1.jpg" alt="">
				    </div>
				    <p>Чтобы сохранить цветок, нужно «распушить» его ножом, так поверхность соприкосновения с водой будет больше.</p>
				    <div class="center-block">
				       <img src="i/t/item-1.jpg" alt="">
				       <img src="i/t/item-1.jpg" alt="">
				       <img src="i/t/item-1.jpg" alt="">
				    </div>
				    <p>Вместо ножа можно использовать молоток для того, чтобы расплющить стебель.</p>
				    <div class="center-block">
				       <img src="i/t/item-1.jpg" alt="">
				      <img src="i/t/item-1.jpg" alt="">
				    </div> 
				    <p>Оборвите, или обрежьте листья так, чтобы они не соприкасались с водой. Это предпринимается, чтобы избежать процессов гниения в воде.</p>
				    <img src="i/t/item-1.jpg" class="center-block" alt="">
				    <p>Для сохранения свежести розы, их можно поместить в специальный раствор, который продаётся в цветочных магазинах. Но он немного отдает хлоркой, поэтому в домашних условиях лучше добавить в воду сахар: на 1 литр воды – 30 грамм.</p>
				    <img src="i/t/item-1.jpg" class="center-block" alt="">
				    <p>Для предотвращения гниения в воду также можно добавить каплю моющего средства, розы к химии устойчивы, но вода будет обеззаражена от бактерий. Также для этих целей можно положить на дно вазы серебряное изделие.</p>
				    <p>Воду, в которой стоят розы, необходимо менять каждый день. При этом косой срез также необходимо обновлять ежедневно.</p>
				    <p>Полезными для цветов являются водные ванны и опрыскивания, особенно если в помещении работают отопительные приборы, делающие воздух сухим. Летом можно опустить в вазу с розами несколько кубиков льда.</p>
				    <p>Нельзя оставлять рядом с розами свежие фрукты. Плоды выделяют вещество, усиливающее созревание, оно заставит цветы скинуть лепестки и ускорить процесс созревания семян.</p>
				    <p>Так же нельзя ставить розы близко с источниками тепла: батареи, плиты, обогреватели.</p>
				    <p>Следуя этой инструкции вы легко сохраните розы на 7 дней, а возможно и на 10 – 15 дней.</p>
				</div>
			</div>
		</div>		
	</div>
</div>
<div class="all-overlay"></div>
<div class="b-footer">
	<div class="b-container">
		<div class="b-wrap clearfix">
			<ul class="b-menu-list">
				<li class="b-menu-item b-f-clients">
					<div class="b-menu-wrap">
						<h3>ПОКУПАТЕЛЯМ</h3>
						<ul>
							<li><a href="#">Как сделать заказ?</a></li>
							<li><a href="#">О Доставке</a></li>
							<li><a href="#">Способы оплаты</a></li>
							<li><a href="#">Наши гарантии</a></li>
							<li><a href="#">Статьи</a></li>
						</ul>
					</div>
				</li>
				<li class="b-menu-item b-f-about">
					<div class="b-menu-wrap">
						<h3>О НАС</h3>
						<ul>
							<li><a href="#">О компании</a></li>
							<li><a href="#">Контактные данные</a></li>
							<li><a href="#">Отзывы клиентов</a></li>
							<li><a href="#">Фотографии с доставок</a></li>
						</ul>
					</div>						
				</li>
				<li class="b-menu-item b-f-catalog">
					<div class="b-menu-wrap">
						<h3>КАТАЛОГ ЦВЕТОВ</h3>
						<ul>
							<li><a href="#">Розы</a></li>
							<li><a href="#">Альстромерии</a></li>
							<li><a href="#">Гвоздики</a></li>
							<li><a href="#">Герберы</a></li>
							<li><a href="#">Лилии</a></li>
							<li><a href="#">Орхидеи</a></li>
							<li><a href="#">Пионы</a></li>
							<li><a href="#">Тюльпаны</a></li>
							<li><a href="#">Хризантемы</a></li>
						</ul>
					</div>						
				</li>
				<li class="b-menu-item b-f-contacts">
					<div class="b-menu-wrap">
					<h3>КОНТАКТЫ</h3>
						<p>© 2009-2014 yamme.ru</p>
						<p><span class="b-menu-phone"><a href="tel://8-800-775-93-00">8 (800) 775-93-80</a> - Круглосуточно</span><br/></p>
						<p><a href="http://vk.com/yammeflowers">Группа Вконтакте</a></p>
						<p>Напишите нам: <a href="mailto:info@yamme.ru">info@yamme.ru</a></p>
					</div>
				</li>
			</ul>
			<div class="b-paraweb-copy">
				Сделано в «<a href="http://paraweb.me">Паравебе</a>»
			</div>
		</div>
	</div>	
</div>
<div style="display:none;">
	<div id="buy-one-click">
		<div class="for_all b-popup" >
			<h3 class="popup-title">Покупка в один клик</h3>
			<div class="popup-desc clearfix">
				<div class="left popup-img">
					<img src="i/popup-img.jpg" alt="">
				</div>
				<div class="left popup-text">
					<h3>Букет из 11 красных роз</h3>
					<h4>Букет в виде сердца.<br>Длина 50-70 см. Бутон 5-7 с...</h4>
					<h5><b>2600</b> руб.</h5>
					<h6>Доставка по городу Москва <span>400</span> руб.</h6>
				</div>
			</div>
			<form action="kitsend.php" method="POST" id="b-form-1" data-block="#buy-one-click">
				<p>Вы можете купить букет по телефону. Просто оставьте свой номер и мы свяжемся с Вами в течении 10 минут.</p>
				<div class="clearfix input-cont">
					<label class="left input-title" for="name-oneclick">Ваше имя:</label>
					<input class="right" type="text" id="name-oneclick" name="name" required/>
				</div>
				<div class="clearfix input-cont">
					<label class="left input-title" for="tel-oneclick">Номер телефона:</label>
					<input class="right" type="text" id="tel-oneclick" name="phone" required/>
				</div>
				<input type="hidden" name="subject" value="Покупка в один клик"/>
				<input type="submit" class="ajax btn btn-g" value="Заказать">
			</form>
		</div>
	</div>
	<div id="b-callback">
		<div class="for_all b-popup" >
			<h3 class="popup-title">Заказать звонок</h3>
			<form action="kitsend.php" method="POST" id="b-form-2" data-block="#b-callback">
				<p>Вы можете закать обратный звонок. Просто оставьте свой номер и мы свяжемся с Вами в течении 10 минут.</p>
				<div class="clearfix input-cont">
					<label class="left input-title" for="name-callback">Ваше имя:</label>
					<input class="right" type="text" id="name-callback" name="name" required/>
				</div>
				<div class="clearfix input-cont">
					<label class="left input-title" for="tel-callback">Номер телефона:</label>
					<input class="right" type="text" id="tel-callback" name="phone" required/>
				</div>
				<input type="hidden" name="subject" value="Обратный звонок"/>
				<input type="submit" class="ajax btn btn-g" value="Заказать">
			</form>
		</div>
	</div>
	<div id="b-city">
		<div class="for_all b-popup b-city">
			<h3 class="popup-title">Выбор города</h3>
			<div class="b-city-cont">
				<div class="cur-city clearfix">
					<h3 class="left">Ваш город - Москва?</h3>
					<a class="left" href="#" onclick="$.fancybox.close(); return false;">Да</a>
				</div>
				<h4>Если нет - выберите из списка</h4>
				<div class="city-list">
					<ul class="clearfix">
						<li class="active"><a rel="nofollow" href="http://yamme.ru">Москва</a></li>
						<li><a rel="nofollow" href="http://spb.yamme.ru">Санкт-Петербург</a></li>
						<li><a rel="nofollow" href="http://astrakhan.yamme.ru">Астрахань</a></li>
						<li><a rel="nofollow" href="http://barnaul.yamme.ru">Барнаул</a></li>
						<li><a rel="nofollow" href="http://vladivostok.yamme.ru">Владивосток</a></li>
						<li><a rel="nofollow" href="http://volgograd.yamme.ru">Волгоград</a></li>
						<li><a rel="nofollow" href="http://voronezh.yamme.ru">Воронеж</a></li>
						<li><a rel="nofollow" href="http://ekaterinburg.yamme.ru">Екатеринбург</a></li>
						<li><a rel="nofollow" href="http://izhevsk.yamme.ru">Ижевск</a></li>
						<li><a rel="nofollow" href="http://irkutsk.yamme.ru">Иркутск</a></li>
						<li><a rel="nofollow" href="http://kazan.yamme.ru">Казань</a></li>
						<li><a rel="nofollow" href="http://kemerovo.yamme.ru">Кемерово</a></li>
						<li><a rel="nofollow" href="http://krasnodar.yamme.ru">Краснодар</a></li>
						<li><a rel="nofollow" href="http://krs.yamme.ru">Красноярск</a></li>
						<li><a rel="nofollow" href="http://lipetsk.yamme.ru">Липецк</a></li>
						<li><a rel="nofollow" href="http://naberezhnyechelny.yamme.ru">Набережные Челны</a></li>
						<li><a rel="nofollow" href="http://nn.yamme.ru">Нижний Новгород</a></li>
						<li><a rel="nofollow" href="http://novokuznetsk.yamme.ru">Новокузнецк</a></li>
						<li><a rel="nofollow" href="http://nsk.yamme.ru">Новосибирск</a></li>
						<li><a rel="nofollow" href="http://omsk.yamme.ru">Омск</a></li>
						<li><a rel="nofollow" href="http://Orenburg.yamme.ru">Оренбург</a></li>
						<li><a rel="nofollow" href="http://penza.yamme.ru">Пенза</a></li>
						<li><a rel="nofollow" href="http://perm.yamme.ru">Пермь</a></li>
						<li><a rel="nofollow" href="http://rostov-na-donu.yamme.ru">Ростов-на-Дону</a></li>
						<li><a rel="nofollow" href="http://ryazan.yamme.ru">Рязань</a></li>
						<li><a rel="nofollow" href="http://samara.yamme.ru">Самара</a></li>
						<li><a rel="nofollow" href="http://saratov.yamme.ru">Саратов</a></li>
						<li><a rel="nofollow" href="http://tolyatti.yamme.ru">Тольятти</a></li>
						<li><a rel="nofollow" href="http://tomsk.yamme.ru">Томск</a></li>
						<li><a rel="nofollow" href="http://tyumen.yamme.ru">Тюмень</a></li>
						<li><a rel="nofollow" href="http://ulyanovsk.yamme.ru">Ульяновск</a></li>
						<li><a rel="nofollow" href="http://ufa.yamme.ru">Уфа</a></li>
						<li><a rel="nofollow" href="http://khabarovsk.yamme.ru">Хабаровск</a></li>
						<li><a rel="nofollow" href="http://chelyabinsk.yamme.ru">Челябинск</a></li>
						<li><a rel="nofollow" href="http://yaroslavl.yamme.ru">Ярославль</a></li>
						<li><a rel="nofollow" href="http://abakan.yamme.ru">Абакан</a></li>
						<li><a rel="nofollow" href="http://anapa.yamme.ru">Анапа</a></li>
						<li><a rel="nofollow" href="http://pyshma.yamme.ru">Верхняя Пышма</a></li>
						<li><a rel="nofollow" href="http://gelendzhik.yamme.ru">Геленджик</a></li>
						<li><a rel="nofollow" href="http://dnepropetrovsk.yamme.ru">Днепропетровск</a></li>
						<li><a rel="nofollow" href="http://dubna.yamme.ru">Дубна</a></li>
						<li><a rel="nofollow" href="http://eisk.yamme.ru">Ейск</a></li>
						<li><a rel="nofollow" href="http://zelenograd.yamme.ru">Зеленоград</a></li>
						<li><a rel="nofollow" href="http://neftekamsk.yamme.ru">Нефтекамск</a></li>
						<li><a rel="nofollow" href="http://noviy-urengoy.yamme.ru">Новый Уренгой</a></li>
						<li><a rel="nofollow" href="http://reutov.yamme.ru">Реутов</a></li>
						<li><a rel="nofollow" href="http://solnechnogorsk.yamme.ru">Солнечногорск</a></li>
						<li><a rel="nofollow" href="http://tuapse.yamme.ru">Туапсе</a></li>
						<li><a rel="nofollow" href="http://uhta.yamme.ru">Ухта</a></li>
						<li><a rel="nofollow" href="http://chehov.yamme.ru">Чехов</a></li>
	                </ul>
	            </div>      
			</div>
			<div class="show-btn clearfix">
	           	<a class="right" href="#" id="show-btn">Показать все города</a>
	        </div>
	        <div class="b-city-select-cont">
	        	<label for="tags" class="desktop-label">Или укажите в поле:</label>
	        	<label for="tags" class="mobile-label">Если нет - укажите в поле:</label>
	           	<input id="tags">
	           	<a href="#">Выбрать</a>
	        </div>
		</div>
	</div>
	<div id="b-text-popup">
		<div class="for_all b-popup">
			<h3 class="popup-title">Текст</h3>
				<div class="b-text">
					<p>Букет из 15 роз – сама нежность, выраженная в цветах. Легкий розовый оттенок делает их наиболее востребованными для романтических встреч. Классический по своему исполнению, букет обвязан лентой в цвет.</p>
					<p>Вы можете закать обратный звонок. Просто оставьте свой номер и мы свяжемся с Вами в течении 10 минут.</p>
					<input type="submit" class="btn btn-g" onclick="$.fancybox.close(); return false;" value="Закрыть">
				</div>
			</form>
		</div>
	</div>
	<div id="b-popup-error">
		<div class="b-thanks b-popup">
			<h3>Ошибка отправки!</h3>
			<h4>Приносим свои извинения. Пожалуйста, попробуйте отправить Вашу заявку позже.</h4>
			<input type="submit" class="b-orange-butt" onclick="$.fancybox.close(); return false;" value="Закрыть">
		</div>
	</div>
</div>

<script src="js/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="js/fancybox/source/jquery.fancybox.js"></script>
<script type="text/javascript" src="js/jquery.form.min.js"></script>
<script type="text/javascript" src="js/jquery.validate.min.js"></script>
<script type="text/javascript" src="js/jquery.maskedinput.min.js"></script>
<script type="text/javascript" src="js/jquery.mousewheel-3.0.6.pack.js"></script>
<script type="text/javascript" src="js/jquery.royalslider.min.js"></script>
<script type="text/javascript" src="js/chosen.jquery.min.js"></script>
<script type="text/javascript" src="js/bootstrap-affix.js"></script>
<script type="text/javascript" src="js/jquery-ui.min.js"></script>
<script type="text/javascript" src="js/KitProgress.js"></script>
<script type="text/javascript" src="js/KitSend.js"></script>
<script type="text/javascript" src="js/pages.js"></script>

</body>
</html>
