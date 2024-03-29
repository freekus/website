/*-----------------------------------------------------------------------------------*/
/* Run scripts on jQuery(document).ready() */
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function(){

	// FitVids - Responsive Videos
	jQuery( '.post, .widget, .panel, .page, .video' ).fitVids();
	
	// Add class to parent menu items with JS until WP does this natively
	jQuery( 'ul.sub-menu, ul.children' ).parents( 'li' ).addClass( 'parent' );
	
	// Responsive Navigation (switch top drop down for select)
	if ( ! jQuery( 'body' ).hasClass( 'ie8' ) ) {
		jQuery('ul#top-nav').mobileMenu({
			switchWidth: 767,                   					//width (in px to switch at)
			topOptionText: woo_localized_data.select_a_page,     	//first option text
			indentString: '&nbsp;&nbsp;&nbsp;'						//string for indenting nested items
		});
	}
	
	// Show/hide the main navigation
  	jQuery( '.nav-toggle' ).click(function() {
	  jQuery( '#navigation' ).slideToggle( 'fast', function() {
	  	return false;
	    // Animation complete.
	  });
	});
	
	// Stop the navigation link moving to the anchor (Still need the anchor for semantic markup)
	jQuery( '.nav-toggle a' ).click(function(e) {
        e.preventDefault();
    });

/*-----------------------------------------------------------------------------------*/
/* Add rel="lightbox" to image links if the lightbox is enabled */
/*-----------------------------------------------------------------------------------*/

if ( jQuery( 'body' ).hasClass( 'has-lightbox' ) && ! jQuery( 'body' ).hasClass( 'portfolio-component' ) ) {
	jQuery( 'a[href$=".jpg"], a[href$=".jpeg"], a[href$=".gif"], a[href$=".png"]' ).each( function () {
		var imageTitle = '';
		if ( jQuery( this ).next().hasClass( 'wp-caption-text' ) ) {
			imageTitle = jQuery( this ).next().text();
		}
		
		jQuery( this ).attr( 'rel', 'lightbox' ).attr( 'title', imageTitle );
	});
	
	jQuery( 'a[rel^="lightbox"]' ).prettyPhoto({social_tools: false});
}

/*-----------------------------------------------------------------------------------*/
/* Add alt-row styling to tables */
/*-----------------------------------------------------------------------------------*/

	jQuery( '.entry table tr:odd' ).addClass( 'alt-table-row' );
}); // End jQuery()