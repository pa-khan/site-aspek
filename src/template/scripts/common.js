$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');


	/* Header */
	// var header = {
	// 	logo: $('.header__logo'),
	// 	nav: $('.header__nav'),
	// 	phone: $('.header__phone')
	// }

	// function headerPrint() {
	// 	var windowWidth = $(window).width() - 265,
	// 			oneProcent = windowWidth / 100;

	// 	header.logo.attr('style', 'margin-left: ' + (oneProcent * 6.5) + 'px; margin-right: ' + (oneProcent * 2.5) + 'px');
	// 	header.nav.attr('style', 'width: ' + (oneProcent * 47.5) + 'px; margin-right: ' + (oneProcent * 2.5) + 'px');
	// 	header.phone.attr('style', 'width: ' + (oneProcent * 28) + 'px');
	// }

	// headerPrint();



	/* FullPage - main page */
	$('.full').fullpage({
		// normalScrollElements: '.main, .footer',
		scrollOverflow: true,
		scrollOverflowReset: true,
		fixedElements: '.header, .lines'
	});

	/* Main Slide - main page */
	var main = {
		list: $('.main-slide__list'),
		control: $('.main-slide__control'),
		square: $('.main-slide__square'),
		triangle: $('.main-slide__triangle'),
		line: $('.main-slide__lines-line div'),
	};

	main.list.slick({
		prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0L0 7L7 14" transform="translate(3 2)" stroke="#fff" stroke-width="3"/></svg></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0L0 7L7 14" transform="translate(9 16) rotate(180)" stroke="white" stroke-width="3"/></svg></button>',
		appendArrows: main.control
	});

	var arrowLeft = $('.main-slide__control .slick-prev');
	main.list.on('afterChange', function(event, slick, direction){
	  if ($('.main-slide__list .slick-slide.slick-active .main-slide__item').hasClass('main-slide__item_gray')) {
			arrowLeft.addClass('slick-prev_custom');
		} else {
			arrowLeft.removeClass('slick-prev_custom')
		}
	});


	$(window).on('load resize', function(event) {
		var windowWidth = $(window).width();
		main.triangle.each(function(index, el) {
			var windowHeight = $(window).height(),
					valueHeight = windowHeight - 115,
					valueWidth = windowWidth - ((windowWidth / 100) * 40);

			$(this).attr('style', 'border-width: 0 0 ' + valueHeight + 'px ' + valueWidth  + 'px');
		});

		var caseWidth = 1620,
				value = caseWidth / 2,
				lineWidth = windowWidth - ((windowWidth / 100) * 28);
		main.line.attr('style', 'width: ' + lineWidth + 'px; margin-right: -' + lineWidth / 2 + 'px');
	});

	if ($('.main-slide__list .slick-slide.slick-active .main-slide__item').hasClass('main-slide__item_gray')) {
		arrowLeft.addClass('slick-prev_custom');
	} else {
		arrowLeft.removeClass('slick-prev_custom')
	}


	/* Advantages */

	$('.advantages__list').slick({
		dots: true,
		infinite: false,
		asNavFor: $('.advantages__photos'),
		appendDots: $('.advantages__dots'),
		prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0L0 7L7 14" transform="translate(3 2)" stroke="#fff" stroke-width="3"/></svg></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0L0 7L7 14" transform="translate(9 16) rotate(180)" stroke="white" stroke-width="3"/></svg></button>'
	});

	$('.advantages__photos').slick({
		asNavFor: $('.advantages__list'),
		arrows: false,
		variableWidth: true,
		infinite: false
	})

	$('.advantages__list').on('afterChange', function(event, slick, direction){
		$('.advantages__count').html('0' + (direction + 1));
	});


	$("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: ($(_href).offset().top - 135) +"px"}, 1000);
    return false;
	});

	$('.rc__btn').click(function(event) {
		var item = $(this).parents('.rc__item');
		item.toggleClass('rc__item_toggle');
	});


	/* Progress photos */
	$('.progress__list').slick({
		variableWidth: true,
		infinite: false,
		prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0L0 7L7 14" transform="translate(3 2)" stroke="#fff" stroke-width="3"/></svg></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0L0 7L7 14" transform="translate(9 16) rotate(180)" stroke="white" stroke-width="3"/></svg></button>'
	})

	/* Nearby photos */
	$('.nearby__list').slick({
		infinite: false,
		slidesToShow: 2,
		prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0L0 7L7 14" transform="translate(3 2)" stroke="#fff" stroke-width="3"/></svg></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0L0 7L7 14" transform="translate(9 16) rotate(180)" stroke="white" stroke-width="3"/></svg></button>'
	})

	/* Other items */ 
	$('.other__list').slick({
		infinite: false,
		slidesToShow: 3,
		prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0L0 7L7 14" transform="translate(3 2)" stroke="#fff" stroke-width="3"/></svg></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0L0 7L7 14" transform="translate(9 16) rotate(180)" stroke="white" stroke-width="3"/></svg></button>'
	})


	/* Details */
	var detailsNav = $('.details__nav'),
			detailsList = $('.details__list');

	detailsList.slick({
		asNavFor: detailsNav,
		prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0L0 7L7 14" transform="translate(3 2)" stroke="#fff" stroke-width="3"/></svg></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0L0 7L7 14" transform="translate(9 16) rotate(180)" stroke="white" stroke-width="3"/></svg></button>'
	})

	detailsNav.slick({
		slidesToShow: 5,
		asNavFor: detailsList,
		focuseOnSelect: true,
		prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0L0 7L7 14" transform="translate(3 2)" stroke="#fff" stroke-width="3"/></svg></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0L0 7L7 14" transform="translate(9 16) rotate(180)" stroke="white" stroke-width="3"/></svg></button>'
	})

});

