 $('document').ready(function() {

	function hide() {
		$('#signin').hide(200);
		$('#write-story').hide(200);
		$('#search-box').show(200);
		$('#search-icon').one('click', show);
	}
	function show() {
		$('#signin').show(200);
		$('#write-story').show(200);
		$('#search-box').hide(200);
		$('#search-icon').one('click', hide);
	}
		$('#search-icon').one('click', hide);
		$('#search-box').hide();


	$(window).bind('scroll', function () {
	    if ($(window).scrollTop() > 85) {
	        $('.nav').addClass('fixed');
	        $('.row').addClass('main-scroll');
	    } else {
	        $('.nav').removeClass('fixed');
	        $('.row').removeClass('main-scroll');
	    }
	});


	$(function(){
		$(window).scroll(function(){
			var Top = $('#sidebar').height() - 40 - $(this).scrollTop();
			if($(this).scrollTop()>=Top){
				$('#sidebar').addClass('fixed-sidebar');
			} else {
				$('#sidebar').removeClass('fixed-sidebar');
			}
		});
	});

/* article */
	var prev = 0;
	$(window).on('scroll', function(){
		var scrollTop = $(window).scrollTop();
		$('.top-head').toggleClass('hide-top-head', scrollTop > prev);
		prev = scrollTop;
	});

});