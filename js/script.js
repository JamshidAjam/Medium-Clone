 $('document').ready(function() {

	function hide() {
		$('#signin').hide(200);
		$('#write-story').hide(200);
		$('#search-box').show(500);
		$('#search-icon').one('click', show);
	}
	function show() {
		$('#signin').show(500);
		$('#write-story').show(500);
		$('#search-box').hide(500);
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

/*
	$(function () {
		var sidebar = $('#sidebar');
		var top = sidebar.offset().top - parseFloat(sidebar.css('margin-top'));

		$(window).scroll(function (event) {
			var y = $(this).scrollTop();
			if (y >= top) {
				sidebar.addClass('fixed-sidebar');
			} else {
				sidebar.removeClass('fixed-sidebar');
			}
		});

	});
*/

var linkContainer = $('#sidebar');
    linkContainerOffset = linkContainer.offset().top;
    stickyClass = 'sticky-links';

  $(window).on('scroll', function(){
    var pageOffset = $('body').scrollTop();
    if (pageOffset > linkContainerOffset-50) {
      linkContainer.addClass(stickyClass);
    } else {
      linkContainer.removeClass(stickyClass);
    }
  });


});