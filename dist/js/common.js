(function ($) {
	$(document).ready(function () {
		//Button lk menu
		$('.top').click(function(){
			$('.top-dop').toggle();
			$(".sidebar").stop().slideToggle();
		});
		//Popup
		$('#pop_1').magnificPopup({
			type: 'inline'
		});
		$('#pop_2').magnificPopup({
			type: 'inline'
		});
		$('#pop_3').magnificPopup({
			type: 'inline'
		});
		$('#pop_4').magnificPopup({
			type: 'inline'
		});
		$('#pop_5').magnificPopup({
			type: 'inline'
		});
		//Popup tabs
		$('.pop__tab').click(function(e) {
	        e.preventDefault();
	        const id = $(this).attr('href');
	        $('.pop__tab').removeClass('pop__tab--active');
	        $(this).addClass('pop__tab--active');
			$('.pop__item').removeClass('pop__item--active');
	        $(id).addClass('pop__item--active');
    	});
	});
})(jQuery);