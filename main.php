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
    <meta name="viewport" content="width=device-width, user-scalable=no">

    <? if( $mobile ): ?>
	<meta name="viewport" content="width=750, user-scalable=no">
	<? endif; ?>
	
	<meta name="description" content="">

	<link rel="stylesheet" type="text/css" href="css/reset.css" />
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
						<ul>
							<li class="dropdown drop-mobile">
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
							<li class="dropdown drop-mobile"><a href="#">ПОВОД</a>
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
							<li><a href="#">ПОДАРКИ</a>
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
					</li>			
					<li class="b-menu-item">
						<form action="">
							<input class="top-menu-search" type="Search" placeholder="search" value="" />
							<button class="top-menu-searcher" type="button"><span></span></button>
						</form>
					</li>
					<li class="b-menu-item">
						<p>© 2009-2015 yamme.ru</p>
						<p><span class="b-menu-phone"><a href="tel://8-800-775-93-00">8 (800) 775-93-80</a> - Круглосуточно</span></p>
						<p>Группа <a href="http://vk.com/yammeflowers">Вконтакте</a></p>
						<p>Напишите нам: <a href="mailtp:info@yamme.ru">info@yamme.ru</a></p>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="b-allwrap">	
		<div class="b-container b-topmenu">
			<div class="b-wrap clearfix">
				<div class="b-topmenu-help">
					<a href="tel://8-800-775-93-00" class="topmenu-tel">8 (800) 775-93-80</a>
					<a href="#" class="b-topmenu-callback">Заказать звонок</a>
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
				<div class="b-logo"><span>Yamme</span></div>
				<div class="b-head-city">
					Город<font> доставки</font>: <a class="b-choose-city" href="#"><span>Санкт-Петербург</span></a>
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
			<div class="b-container b-nav" data-spy="affix" data-offset-top="181" data-offset-bottom="200">
				<div class="b-wrap">	
					<div class="b-nav-block">
						<ul class="b-nav-list">
							<li class="dropdown drop-mobile">
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
							<li class="dropdown drop-mobile"><a href="#">ПОВОД</a>
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
							<li><a href="#">ПОДАРКИ</a>
								<ul class="b-submenu">
									<li><a href="/catalog/vozdushnye-shary/">Воздушные шары</a></li>
									<li><a href="/catalog/konfety/">Конфеты</a></li>
									<li><a href="/catalog/mishki/">Мишки</a></li>
									<li><a href="/catalog/fruktovye-korziny/">Фруктовые корзины</a></li>
								</ul>
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
				<div class="b-container b-subblock">
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
							<li><a href="/catalog/khrizantemy/">Хризантемы</a></li>									
						</ul>
					</div>
				</div>
			</div>			
		</div>
		<div class="b-container b-main-about">
			<div class="b-wrap clearfix">			
				<ul>
					<li><a href="#">О нас</a></li>
					<li><a href="#">Способы оплаты</a></li>
					<li><a href="#">Способы доставки</a></li>
					<li><a href="#">Гарантии Yamme</a></li>
					<li><a href="#">Свежие цветы</a></li>
					<li><a href="#">Вопросы и ответы</a></li>
					<li><a href="#">Возврат</a></li>
				</ul>
			</div>
		</div>
		<div class="b-container structure">
			<div class="b-wrap clearfix">
				<div class="b-aside">
					<div class="b-security">
						Бесплатно поменяем<br/>
						непонравившийся букет.<br/>
						Просто сообщите нам об<br/>
						этом в течении 24 часов.
					</div>
					<div class="b-filters">
						<div class="b-filter-group f-group-1">
							<h3>БУКЕТ ИЗ:</h3>
							<input type="radio" checked hidden name="filter-1" value="1-1" id="filter-1-1"/>
							<label class="active" for="filter-1-1">Все</label>
							<input type="radio" hidden name="filter-1" value="1-2" id="filter-1-2"/>
							<label for="filter-1-2">РОЗЫ</label>
							<input type="radio" hidden name="filter-1" value="1-3" id="filter-1-3"/>
							<label for="filter-1-3">ТЮЛЬПАНЫ</label>
							<input type="radio" hidden name="filter-1" value="1-4" id="filter-1-4"/>
							<label for="filter-1-4">ИРИСЫ</label>
							<input type="radio" hidden name="filter-1" value="1-5" id="filter-1-5"/>
							<label for="filter-1-5">ГЕРБЕРЫ</label>
						</div>
						<div class="b-filter-group f-group-2">
							<h3>ПО ЦЕНЕ:</h3>
							<input type="radio" checked hidden name="filter-2" value="2-1" id="filter-2-1"/>
							<label class="active" for="filter-2-1">Все</label>
							<input type="radio" hidden name="filter-2" value="2-2" id="filter-2-2"/>
							<label for="filter-2-2">ОТ 2000 ₽</label>
							<input type="radio" hidden name="filter-2" value="2-3" id="filter-2-3"/>
							<label for="filter-2-3">ОТ 2000 ДО 3000 ₽</label>
							<input type="radio" hidden name="filter-2" value="2-4" id="filter-2-4"/>
							<label for="filter-2-4">ОТ 3000 ДО 5000 ₽</label>
							<input type="radio" hidden name="filter-2" value="2-5" id="filter-2-5"/>
							<label for="filter-2-5">ОТ 5000 ₽</label>
						</div>
						<div class="b-filter-group f-group-3">
							<h3>ПО СОБЫТИЮ:</h3>
							<input type="radio" checked hidden name="filter-3" value="3-1" id="filter-3-1"/>
							<label class="active" for="filter-3-1">Все</label>
							<input type="radio" hidden name="filter-3" value="3-2" id="filter-3-2"/>
							<label for="filter-3-2">СВАДЬБА</label>
							<input type="radio" hidden name="filter-3" value="3-3" id="filter-3-3"/>
							<label for="filter-3-3">ДЛЯ БАБУШКИ</label>
							<input type="radio" hidden name="filter-3" value="3-4" id="filter-3-4"/>
							<label for="filter-3-4">ДЛЯ МАМЫ</label>
							<input type="radio" hidden name="filter-3" value="3-5" id="filter-3-5"/>
							<label for="filter-3-5">РУКОВОДИТЕЛЮ</label>
							<input type="radio" hidden name="filter-3" value="3-5" id="filter-3-5"/>
							<label for="filter-3-5">8 МАРТА</label>
							<input type="radio" hidden name="filter-3" value="3-5" id="filter-3-5"/>
							<label for="filter-3-5">ДЕНЬ РОЖДЕНИЯ</label>
						</div>						
						<div class="b-filter-group f-group-4">
							<h3>ПО ЦВЕТУ:</h3>
							<input type="radio" hidden checked name="filter-4" value="4-1" id="filter-4-1"/>
							<label class="active" for="filter-4-1">Все</label>
							<input type="radio" hidden name="filter-4" value="4-2" id="filter-4-2"/>
							<label for="filter-4-2">КРАСНЫЙ</label>
							<input type="radio" hidden name="filter-4" value="4-3" id="filter-4-3"/>
							<label for="filter-4-3">ЖЕЛТЫЙ</label>
							<input type="radio" hidden name="filter-4" value="4-4" id="filter-4-4"/>
							<label for="filter-4-4">БЕЛЫЙ</label>
							<input type="radio" hidden name="filter-4" value="4-5" id="filter-4-5"/>
							<label for="filter-4-5">РОЗОВЫЙ</label>
						</div>
						<div class="b-filter-group f-group-5">
							<h3>КОМУ:</h3>
							<input type="radio" checked hidden name="filter-5" value="5-1" id="filter-5-1"/>
							<label class="active" for="filter-5-1">Все</label>
							<input type="radio" hidden name="filter-5" value="5-2" id="filter-5-2"/>
							<label for="filter-5-2">МУЖЧИНЕ</label>
							<input type="radio" hidden name="filter-5" value="5-3" id="filter-5-3"/>
							<label for="filter-5-3">ЖЕНЩИНЕ</label>
							<input type="radio" hidden name="filter-5" value="5-4" id="filter-5-4"/>
							<label for="filter-5-4">ДЕТСКИЕ БУКЕТЫ</label>
							<input type="radio" hidden name="filter-5" value="5-5" id="filter-5-5"/>
							<label for="filter-5-5">ДЛЯ ПОЖИЛЫХ</label>
						</div>
					</div>
					
					<div class="b-photos-block">
						<h3><a href="#">ФОТО С ДОСТАВОК</a></h3>
						<div class="b-photos-gallery">
							<div class="royalSlider rsDefault">
							    <div class="rsContent">
							        <a href="#"><img class="rsImg" src="i/t/r1.jpg" /></a>
							    </div>
								<div class="rsContent">
							        <a href="#"><img class="rsImg" height="400" src="i/t/r1.jpg" /></a>
							    </div>
								<div class="rsContent">
							        <a href="#"><img class="rsImg" src="i/t/r1.jpg" /></a>
							    </div>
						    </div>
						</div>
					</div>
					<div class="b-review-block">
						<h3><a href="#">ОТЗЫВЫ КЛИЕНТОВ</a>:</h3>
						<div class="b-review-gallery">
							<div class="royalSlider rsDefault">
							    <div class="rsContent">
							        <div class="b-review-item">
							        	<p>Большое спасибо!<br/>
										Цветы отличные,девушка моя была приятно удивлена. Отправлял из Сургута в Севастополь. Отдельное спасибо менеджеру.</p>

										<p class="b-review-from">22 Апреля 2015, отзыв от Виталий (Доставка 22.04.15)
											<br/>К букету: <a href="#">Сюрприз из 9 роз</a></p>
							        </div>
							    </div>
								<div class="rsContent">
							        <div class="b-review-item">
							        	<p>Большое спасибо!<br/>
										Цветы отличные,девушка моя была приятно удивлена. Отправлял из Сургута в Севастополь. Отдельное спасибо менеджеру.	Цветы отличные,девушка моя была приятно удивлена. Отправлял из Сургута в Севастополь. Отдельное спасибо менеджеру.</p>

										<p class="b-review-from">22 Апреля 2015, отзыв от Виталий (Доставка 22.04.15)
											<br/>К букету: <a href="#">Сюрприз из 9 роз</a></p>
							        </div>
							    </div>
								<div class="rsContent">
							        <div class="b-review-item">
							        	<p>Большое спасибо!<br/>
										Цветы отличные,девушка моя была приятно удивлена. Отправлял из Сургута в Севастополь. Отдельное спасибо менеджеру.</p>

										<p class="b-review-from">22 Апреля 2015, отзыв от Виталий (Доставка 22.04.15)
											<br/>К букету: <a href="#">Сюрприз из 9 роз</a></p>
							        </div>
							    </div>
						    </div>
						</div>
						<p class="tcenter"><a href="#" class="btn btn-y"><span>ВСЕ ОТЗЫВЫ</span></a></p>
					</div>
					
				</div>
				<div class="b-content">
					<div class="b-banner-gallery">
						<div class="royalSlider rsDefault">
						    <div class="rsContent">
						        <a href="#1"><img class="rsImg" src="i/t/b1.jpg" /></a>
						    </div>
							<div class="rsContent">
						        <a href="#2"><img class="rsImg" src="i/t/b1.jpg" /></a>
						    </div>
							<div class="rsContent">
						        <a href="#3"><img class="rsImg" src="i/t/b1.jpg" /></a>
						    </div>
					    </div>
					</div>
					<div class="b-catalog-block">
						<ul class="b-catalog-list">
							<li>
								<div class="b-catalog-item">
									<a class="b-cat-pic" href="#">
										<img alt="" src="i/t/t1.jpg" />
										<span>Яркие краски (9 роз)</span>
									</a>
									<p>
										Компактный букет из 9 ярких роз
									</p>
									<div class="b-buy">
										<a href="#" class="btn btn-g"><span>Купить</span></a>
										<p class="b-item-price"><span>2600</span><span class="rub">руб.</span></p>
									</div>
								</div>
							</li>
							<li>
								<div class="b-catalog-item">
									<a class="b-cat-pic" href="#">
										<img alt="" src="i/t/t1.jpg" />
										<span>Букет из 15 белых роз</span>
									</a>
									<p>
										Букет в виде сердца.  Длина 50-70 см. Бутон 5-7 с...
									</p>
									<div class="b-buy">
										<a href="#" class="btn btn-g"><span>Купить</span></a>
										<p class="b-item-price"><span>2600</span><span class="rub">руб.</span></p>
									</div>
								</div>
							</li>
							<li>
								<div class="b-catalog-item discount">
									<div class="b-discount">20%</div>									
									<a class="b-cat-pic" href="#">
										<img alt="" src="i/t/t1.jpg" />
										<span>Микс из лилий и ирисов</span>
									</a>
									<p>
										Букет в виде сердца.  Длина 50-70 см. Бутон 5-7 с...
									</p>
									<div class="b-buy">
										<a href="#" class="btn btn-p"><span>Купить</span></a>
										<p class="b-item-price"><small>2900</small><span>2320</span><span class="rub">руб.</span></p>
									</div>
								</div>
							</li>
							<li>
								<div class="b-catalog-item discount hit">
									<div class="b-discount">20%</div>
									<div class="b-hit">ХИТ</div>
									<a class="b-cat-pic" href="#">
										<img alt="" src="i/t/t1.jpg" />
										<span>Букет 101 красная роза</span>
									</a>
									<p>
										с маленьким описанием
									</p>
									<div class="b-buy">
										<a href="#" class="btn btn-g"><span>Купить</span></a>
										<p class="b-item-price"><small>2900</small><span>2320</span><span class="rub">руб.</span></p>
									</div>
								</div>
							</li>
							<li>
								<div class="b-catalog-item">
									<a class="b-cat-pic" href="#">
										<img alt="" src="i/t/t1.jpg" />
										<span>LOVE YOU</span>
									</a>
									<p>
										Букет в виде сердца.  Длина 50-70 см. Бутон 5-7 с...
									</p>
									<div class="b-buy">
										<a href="#" class="btn btn-g"><span>Купить</span></a>
										<p class="b-item-price"><span>2600</span><span class="rub">руб.</span></p>
									</div>
								</div>
							</li>
							<li>
								<div class="b-catalog-item">
									<a class="b-cat-pic" href="#">
										<img alt="" src="i/t/t1.jpg" />
										<span>Букет из 15 белых роз</span>
									</a>
									<p>
										Букет в виде сердца.  Длина 50-70 см. Бутон 5-7 с...
									</p>
									<div class="b-buy">
										<a href="#" class="btn btn-g"><span>Купить</span></a>
										<p class="b-item-price"><span>2600</span><span class="rub">руб.</span></p>
									</div>
								</div>
							</li>
							<li>
								<div class="b-catalog-item">
									<a class="b-cat-pic" href="#">
										<img alt="" src="i/t/t1.jpg" />
										<span>Сюрприз из 9 роз</span>
									</a>
									<p>
										9 розовых роз. Длина 40-60 см. Бутон 5-7 см.
									</p>
									<div class="b-buy">
										<a href="#" class="btn btn-g"><span>Купить</span></a>
										<p class="b-item-price"><span>1390</span><span class="rub">руб.</span></p>
									</div>
								</div>
							</li>
							<li>
								<div class="b-catalog-item">
									<a class="b-cat-pic" href="#">
										<img alt="" src="i/t/t1.jpg" />
										<span>Комплимент из 9 роз</span>
									</a>
									<p>
										Милый букет в европейском стиле. Длина 40-60 см.
									</p>
									<div class="b-buy">
										<a href="#" class="btn btn-g"><span>Купить</span></a>
										<p class="b-item-price"><span>1390</span><span class="rub">руб.</span></p>
									</div>
								</div>
							</li>
							<li>
								<div class="b-catalog-item">
									<a class="b-cat-pic" href="#">
										<img alt="" src="i/t/t1.jpg" />
										<span>Букет из 11 красных роз</span>
									</a>
									<p>
										Свежие красные розы. Длина 50-70 см. Бутон 5-7 см.
									</p>
									<div class="b-buy">
										<a href="#" class="btn btn-g"><span>Купить</span></a>
										<p class="b-item-price"><span>1580</span><span class="rub">руб.</span></p>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div class="b-catalog-refresh"> <!-- когда прелоадерим - добавляем класс preloading. он анимирует стрелочку. -->
						<a href="#" class="b-more-items"><span class="b-more-ico"></span>ПОКАЗАТЬ ЕЩЕ</a>
					</div>
					<div class="b-seo-text">
						<h1>Доставка цветов в Москве от интернет-магазина Yamme.ru</h1>
						<p>Яркие праздники, трогательные признания в любви, семейные торжества и долгожданные встречи – ни одно из событий не обходится без цветов. Обычай дарить букеты насчитывает несколько столетий. Времена меняются, но традиции остаются прежними. </p>

						<p>Интернет-магазин цветов Yamme.ru поможет вам в выборе подходящей композиции. Мы готовы предложить самые выгодные условия: доступные цены, индивидуальный подход, доставка цветов по городу, широкий выбор материала. Загляните в наш <a href="catalog/bukety/">каталог</a>, и вы оцените изящество и роскошь представленных букетов.</p>
						<p>Заказ цветов в преддверии праздников избавит вас от утомительных поисков подарка. Мы позаботимся о том, чтобы ваш любимый человек остался доволен преподнесённым букетом. Доставка цветов в любой район Москвы поможет сэкономить время.</p>

						<h2>Заказ цветов в Москве по низким ценам</h2>
						<p>
						Цветы на заказ – это возможность получить букет, подобранный в соответствии с вашими пожеланиями. Профессиональные флористы Yamme.ru обладают необходимыми навыками и знаниями для составления самых стильных и эффектных композиций. Мы используем только качественный флористический  материал, поэтому букеты надолго сохранят свою свежесть. Заказ цветов оформляется по телефону или онлайн.  
						</p>
						<p>Интернет-магазин цветов Yamme.ru – это высокий стандарт качества, особое внимание и выгодные условия для постоянных клиентов. Мы заменим букет, если он вас не устроит.</p>
						<p>Доставка цветов в Москве занимает не более 2-х часов. Просто укажите точный адрес и время. Курьерская служба позаботится, чтобы выбранная вами композиция была доставлена точно в срок.</p>

					<p>	Радуйте своих любимых, дарите им букеты и признавайтесь в симпатии. Раскрасьте привычные будни яркими красками. Всё, что для этого нужно – купить цветы.</p>
					</div>
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

<script src="js/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="js/jquery.form.min.js"></script>
<script type="text/javascript" src="js/jquery.validate.min.js"></script>
<script type="text/javascript" src="js/jquery.maskedinput.min.js"></script>
<script type="text/javascript" src="js/jquery.mousewheel-3.0.6.pack.js"></script>
<script type="text/javascript" src="js/fancybox/source/jquery.fancybox.pack.js?v=2.1.5"></script>
<script type="text/javascript" src="js/jquery.royalslider.min.js"></script>
<script type="text/javascript" src="js/chosen.jquery.min.js"></script>
<script type="text/javascript" src="js/bootstrap-affix.js"></script>

<script type="text/javascript" src="js/pages.js"></script>
<script type="text/javascript" src="js/main.js"></script>

</body>
</html>
