$(function() {

	$('.banner').slick({
		infinite: false,
		dots: true,
		slidesToShow: 1,
		arrows:false,
		speed: 500,
	});

	$('.banner-text').slick({
		infinite: false,
		dots: true,
		slidesToShow: 1,
		arrows:false,
		responsive: [
		{
			breakpoint: 576,
			settings: {
				dots: false,
			}
		}
		]
	});

	$('.main-wrap').slick({
		infinite: true,
		dots: true,
		slidesToShow: 6,
		arrows:false,
		slidesToScroll: 3,
		responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 5,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 414,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		]
	});

	$('.work-slide').slick({
		infinite: true,
		dots: true,
		slidesToShow: 2,
		arrows:false,
		slidesToScroll: 2,
		responsive: [
		{
			breakpoint: 776,
			settings: {
				slidesToShow: 1,
			}
		},
		]
	});


	$('.slide-box').slick({
		infinite: true,
		dots: true,
		slidesToShow: 2,
		arrows:false,
		slidesToScroll: 2,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
		]
	});

	$('.sl-slides').slick({
		infinite: true,
		dots: true,
		slidesToShow: 2,
		arrows:false,
		slidesToScroll: 2,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
		]
	});

	$('.sl').slick({
		asNavFor: '.sl2',
		arrows:false,
		slidesToShow: 1,
	});

	$('.sl2').slick({
		asNavFor: '.sl',
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 4,
		focusOnSelect: true,
		arrows:false,
	});

	$( "#menuToggle" ).click(function() {
		$( "ul.navs" ).toggleClass("open");
		$( ".bg-box" ).toggleClass("open");
		$( "body.TogleClass" ).toggleClass("open");
	});


	$('.catalog-open').on('click', function(){
		$(this).toggleClass('opened');
		$('.catalog-wrap_nav').slideToggle(350);
	});

	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 0 ? 0 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

	$('.minuss').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 0 ? 0 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.pluss').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

	$('.questions-wrapper').on('click', function(){
		$(this).toggleClass('opened');
		$('.questions-text').slideToggle(350);
	}); 

	$('.questions-wrapperss').on('click', function(){
		$(this).toggleClass('opened');
		$('.questions-texts').slideToggle(350);
	});

	$('.questions-wrappers').on('click', function(){
		$(this).toggleClass('opened');
		$('.questions-textss').slideToggle(350);
	});

	$(window).on("load resize", function(){
		var width = $(document).width();

		if (width > 768) {
			$('.protection-wrapper.protection-sl').slick('unslick');
		} else {
			$('.protection-wrapper.protection-sl').not('.slick-initialized').slick({  
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: false,
				arrows: false,
				dots: true,
			});
		}
	});
	

    //



    AmCharts.makeChart("map",{
    	"type": "map",
    	"pathToImages": "http://www.amcharts.com/lib/3/images/",
    	"addClassNames": true,
    	"fontSize": 15,
    	"color": "#000000",
    	"projection": "miller",
    	"backgroundAlpha": 1,
    	"backgroundColor": "rgba(255,255,255,1)",
    	"dataProvider": {
    		"map": "worldLow",
    		"getAreasFromMap": true,
    		"images": [
    		{
    			"top": 40,
    			"left": 60,
    			"width": 80,
    			"height": 40,
    			"pixelMapperLogo": true,
    			"imageURL": "http://pixelmap.amcharts.com/static/img/logo-black.svg",
    			"url": "http://www.amcharts.com"
    		},
    		{
    			"selectable": true,
    			"longitude": 36.6135,
    			"latitude": 63.5652,
    			"svgPath": "M3.5,13.277C3.5,6.22,9.22,0.5,16.276,0.5C23.333,0.5,29.053,6.22,29.053,13.277C29.053,14.54,28.867,15.759,28.526,16.914C26.707,24.271,16.219,32.5,16.219,32.5C16.219,32.5,4.37,23.209,3.673,15.542C3.673,15.542,3.704,15.536,3.704,15.536C3.572,14.804,3.5,14.049,3.5,13.277C3.5,13.277,3.5,13.277,3.5,13.277M16.102,16.123C18.989,16.123,21.329,13.782,21.329,10.895C21.329,8.008,18.989,5.668,16.102,5.668C13.216,5.668,10.876,8.008,10.876,10.895C10.876,13.782,13.216,16.123,16.102,16.123C16.102,16.123,16.102,16.123,16.102,16.123",
    			"color": "rgba(217,217,217,1)",
    			"scale": 1
    		}
    		]
    	},
    	"balloon": {
    		"horizontalPadding": 15,
    		"borderAlpha": 0,
    		"borderThickness": 1,
    		"verticalPadding": 15
    	},
    	"areasSettings": {
    		"color": "rgba(217,217,217,1)",
    		"outlineColor": "rgba(255,255,255,1)",
    		"rollOverOutlineColor": "rgba(255,255,255,1)",
    		"rollOverBrightness": 20,
    		"selectedBrightness": 20,
    		"selectable": true,
    		"unlistedAreasAlpha": 0,
    		"unlistedAreasOutlineAlpha": 0
    	},
    	"imagesSettings": {
    		"alpha": 1,
    		"color": "rgba(217,217,217,1)",
    		"outlineAlpha": 0,
    		"rollOverOutlineAlpha": 0,
    		"outlineColor": "rgba(255,255,255,1)",
    		"rollOverBrightness": 20,
    		"selectedBrightness": 20,
    		"selectable": true
    	},
    	"linesSettings": {
    		"color": "rgba(217,217,217,1)",
    		"selectable": true,
    		"rollOverBrightness": 20,
    		"selectedBrightness": 20
    	},
    	"zoomControl": {
    		"zoomControlEnabled": true,
    		"homeButtonEnabled": false,
    		"panControlEnabled": false,
    		"right": 38,
    		"bottom": 30,
    		"minZoomLevel": 0.25,
    		"gridHeight": 100,
    		"gridAlpha": 0.1,
    		"gridBackgroundAlpha": 0,
    		"gridColor": "#FFFFFF",
    		"draggerAlpha": 1,
    		"buttonCornerRadius": 2
    	}
    });




});


$(function() { 
	var btn = document.querySelector('a#nav-home-tab'), 
	modal = document.querySelector('.catalog-blocks.catalog-sows'), 
	closeBtn = document.querySelector('.closeBtns'); 


	
	btn.addEventListener('click', function() {
		modal.style.display = 'block'; 
	})
	closeBtn.addEventListener('click', function () {
		modal.style.display = "none";
	})
	window.addEventListener('click', function (e) {
		if(e.target == modal) {
			modal.style.display = "none";
		}   
	});
	
});

function changeLink() {
	document.getElementById('myAnchor').innerHTML="красный";
	document.getElementById('myAnchor').target="_blank";

}
function changeLinks() {
	document.getElementById('myAnchor').innerHTML="розовый";
	document.getElementById('myAnchor').target="__blank";
}

function changeLink_one() {
	document.getElementById('myAnchor').innerHTML="темно-синий";
	document.getElementById('myAnchor').target="__blank";
}

function changeLink_three() {
	document.getElementById('myAnchor').innerHTML="синий";
	document.getElementById('myAnchor').target="__blank";
}

function changeLink_four() {
	document.getElementById('myAnchor').innerHTML="голубой";
	document.getElementById('myAnchor').target="__blank";
}

function changeLink_five() {
	document.getElementById('myAnchor').innerHTML="светло-зеленый";
	document.getElementById('myAnchor').target="__blank";
}

function changeLink_six() {
	document.getElementById('myAnchor').innerHTML="желтый";
	document.getElementById('myAnchor').target="__blank";
}

function changeLink_seven() {
	document.getElementById('myAnchor').innerHTML="оранжевый";
	document.getElementById('myAnchor').target="__blank";
}

function changeLink_eight() {
	document.getElementById('myAnchor').innerHTML="	Желтовато-коричневый";
	document.getElementById('myAnchor').target="__blank";
}

function changeLink_nine() {
	document.getElementById('myAnchor').innerHTML="каричневый";
	document.getElementById('myAnchor').target="__blank";
}

function changeLink_ten() {
	document.getElementById('myAnchor').innerHTML="аметистовый";
	document.getElementById('myAnchor').target="__blank";
}


$(function() { 
	let btn = document.querySelector('.button-catalog'), 
	modal = document.querySelector(''), 
	closeBtn = document.querySelector('.closeBtn'); 

	btn.addEventListener('click', function() {
		modal.style.display = 'block'; 
	})
	closeBtn.addEventListener('click', function () {
		modal.style.display = "none";
	})
	window.addEventListener('click', function (e) {
		if(e.target == modal) {
			modal.style.display = "none";
		}   
	});
});

$(function() { 

	ymaps.ready(function () {
		let myMap = new ymaps.Map('maps', {
			center: [55.724910, 37.673499],
			zoom: 16
		}, {
			searchControlProvider: 'yandex#search'
		}),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        	'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        	),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        	hintContent: 'Собственный значок метки',
        	balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/logo-map.png',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
        	hintContent: 'Собственный значок метки с контентом',
        	balloonContent: 'А эта — новогодняя',
        	iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/ball.png',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

        myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
    });

});


function tabsInAccord() {
	var w = window.innerWidth ? window.innerWidth : $(window).width(), //ширина экрана
			widthVal = 1024, //ширина, меньше которой табы становятся аккордионами
			speed = 250, //скорость раскрытия аккордионов
			tab = $('.tab__item > span.active'); //отдельная вкладка
	
	
	//Высчитываем высоту контейнера
		function calcHeight() {
			var tabHeight = 0;
			$('.tab__item > span.active').next('.tab__content').each(function(){
				if ($(this).innerHeight() > tabHeight ) {
					 tabHeight = $(this).innerHeight()
				 }
			});
			$('.tab').height(tabHeight);
		}
	
	function tabsSwitch() {
		$('.tab__item').off().on('click', 'span', function() {
			$(this).closest('.tab').find($('.tab__item')).find('.tab__content').removeAttr("style");
			$(this).addClass('active').next('.tab__content').show().closest('.tab').find($('.tab__item > span.active').not($(this))).removeClass('active');
			calcHeight();
		});
	}
	
	function accordOpen() {
		$('.tab').removeAttr("style");
		$('.tab__item').off().on('click', 'span', function() {
				$(this).toggleClass('active').next('.tab__content').slideToggle(speed);
			});
	}
	
	if (w < widthVal) {
		if(tab.length > 0) {
			tab.closest('.tab').find($('.tab__item > span').not(tab).next('.tab__content')).css({'display':'none'});
			tab.next('.tab__content').slideDown(speed);
		}
		accordOpen();
	} else {
		if(tab.length === 0 || tab.length > 1) {
			tab.removeClass('active').next('.tab__content').css({'display':'block'});
				$('.tab__item:first > span').addClass('active');
			} else {
				$('.tab').find('.tab__content').css({'display':'block'});
			}
			calcHeight();
			tabsSwitch();	
		}
}

tabsInAccord();

$(window).resize(function () {
	tabsInAccord();
});