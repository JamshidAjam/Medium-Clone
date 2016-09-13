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
// Hide Header on on scroll down
// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $('.top-head').outerHeight();

// $(window).scroll(function(event){
//     didScroll = true;
// });
// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 250);

// function hasScrolled() {
//     var st = $(this).scrollTop();
    
//     // Make sure they scroll more than delta
//     if(Math.abs(lastScrollTop - st) <= delta)
//         return;
    
//     // If they scrolled down and are past the navbar, add class .nav-up.
//     // This is necessary so you never see what is "behind" the navbar.
//     if (st > lastScrollTop && st > navbarHeight){
//         // Scroll Down
//         $('.top-head').addClass('.topheadfix');
// // alert(st + "<br>" + lastScrollTop);
//     } else {
//         // Scroll Up
//         if(st + $(window).height() < $(document).height()) {
//             $('.top-head').removeClass('.topheadfix');
//         }
//     }
    
//     lastScrollTop = st;
// }
var prev = 0;
$(window).on('scroll', function(){
  var scrollTop = $(window).scrollTop();
  $('.top-head').toggleClass('hide-top-head', scrollTop > prev);
  prev = scrollTop;
});

});