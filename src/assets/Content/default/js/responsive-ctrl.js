$(function() {

	if(Modernizr.mq('only all')){
	/* if media query is supported */

		/* window resize event with debounce (resize event with 200ms delay) */
		$(window).resize(
		$.debounce( 200, false, function(e){
		// #########################################
			if ( Modernizr.mq('only screen and (min-width: 1023px)') ) {
				// ONLY FOR MENU in DESKTOP
				mainmenu_pc_event('on');

				/* turn on outcanvas mainmenu */
				offcanvas_mainmenu_event('off');

				/* close outcanvas when screen resize to big screen */
				canvasmenu_button_init('close');
			}
			else if ( Modernizr.mq('only screen and (min-width: 992px)') ) {
				// for pc

				/* turn on outcanvas mainmenu */
				offcanvas_mainmenu_event('off');
				offcanvas_mainmenu_event('on');

			}
			else if ( Modernizr.mq('only screen and (min-width: 768px )') ) {
				// for tablet

				/* turn on outcanvas mainmenu */
				offcanvas_mainmenu_event('off');
				offcanvas_mainmenu_event('on');

			}
			else if ( Modernizr.mq('only screen and (min-width: 320px)') ) {
				// for mobile

				/* turn on outcanvas mainmenu */
				offcanvas_mainmenu_event('off');
				offcanvas_mainmenu_event('on');

			}

			// always run on window resize event with debounce
			// adjustFooter();

		// #########################################
		})//end debounce
		).trigger('resize');//end window resize

		/* canvas menu init */
		canvasmenu_button_init();

	}else{
	/* if media query is not supported (old browser) */

		mainmenu_pc_event('on');

	}

});
