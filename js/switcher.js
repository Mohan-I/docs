(function($) {
	$(document).ready(function() {
		// Switcher
		jQuery('#demo_changer .demo-icon').click(function() {
			if (jQuery('.demo_changer').hasClass("active")) {
				jQuery('.demo_changer').animate({
					"left": "-320px"
				}, function() {
					jQuery('.demo_changer').toggleClass("active");
				});
			} else {
				jQuery('.demo_changer').animate({
					"left": "0px"
				}, function() {
					jQuery('.demo_changer').toggleClass("active");
				});
			}
		});

		// Color Scheme
		var sclass = '',
			colorActive = 'default';

		$('#styleswitch_area').on('click', '.styleswitch', function (e) {
			e.preventDefault();
			var color = $(this).data('rel'),
				href = $('#factoryhub-color-switcher-css').attr('href');

			$('.styleswitch').removeClass('selected');
			$(this).addClass('selected');
			href = href.replace( colorActive, color );
			$('#factoryhub-color-switcher-css').attr('href', href);
			colorActive = color;

		});


		var toggleNav = $( '#demo_changer .predefined-nav .input-checkbox' );

		if ( $( 'body' ).hasClass('header-sticky') ) {
			toggleNav.prop( 'checked', true );
		} else {
			toggleNav.prop( 'checked', false );
		}

		toggleNav.on( 'change', function() {
			if ( $( this ).is( ':checked' ) ) {
				$( 'body' ).addClass( 'header-sticky' );
			} else {
				$( 'body' ).removeClass( 'header-sticky' );
			}
			$( window ).trigger( 'resize' );
		} ).trigger( 'change' );

	});
})(jQuery);
