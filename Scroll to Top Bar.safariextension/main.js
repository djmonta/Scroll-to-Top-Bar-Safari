$(function() {
	// Dirty hack (iFrames refuse JavaScript access attempt so the code following the next line isn't executed)
	window.parent.location;

	$('<div id="scroll-to-top-safari-extension"></div>').prependTo('body').hide();
	$('#scroll-to-top-safari-extension').click(function() {
		$('body').animate({ scrollTop: 0 }, 'slow');
	});

	// http://briancray.com/2009/10/06/scroll-to-top-link-jquery-css/
	var scroll_timer;
	var displayed = false;
	var $scrollToTop = $('#scroll-to-top-safari-extension');
	var $window = $(window);
	var top = $(document.body).children(0).position().top;
 
	/* react to scroll event on window */
	$window.scroll(function () {
		window.clearTimeout(scroll_timer);
		scroll_timer = window.setTimeout(function () { // use a timer for performance
			if($window.scrollTop() <= top) // hide if at the top of the page
			{
				displayed = false;
				$scrollToTop.fadeOut(500);
			}
			else if(displayed == false) // show if scrolling down
			{
				displayed = true;
				$scrollToTop.stop(true, true).fadeIn(500).click(function () { $scrollToTop.fadeOut(500); });
			}
		}, 100);
	});	
});
