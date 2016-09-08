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

});