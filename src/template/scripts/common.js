$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');

	$('.body_full').fullpage({
		autoScrolling: true
	});


	var main = {
		list: $('.main-slide__list'),
		control: $('.main-slide__control'),
		square: $('.main-slide__square'),
		triangle: $('.main-slide__triangle'),
		count: $('.main-slide__count')
	};

});
