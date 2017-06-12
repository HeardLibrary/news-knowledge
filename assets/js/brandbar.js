// VU BRAND BAR // 
/////////////////////
jQuery(function( $ ){
var container = $( "#vunavigate" );
	$( ".vunavigate" ).click(function( event ){ event.preventDefault();
	if (container.is( ":visible" )){ container.slideUp( 500 ); } 
		else { container.slideDown( 500 ); }
	// close others
	if (container2.is( ":visible" )){ container2.slideUp( 250 ); } 
	if (container3.is( ":visible" )){ container3.slideUp( 250 ); } 
});
var container2 = $( "#vusearch" );
	$( ".vusearch" ).click(function( event ){ event.preventDefault();
	if (container2.is( ":visible" )){ container2.slideUp( 500 ); } 
		else { container2.slideDown( 500 );}
	// close others
	if (container.is( ":visible" )){ container.slideUp( 250 ); }
	if (container3.is( ":visible" )){ container3.slideUp( 250 ); } 
});
var container3 = $( "#vutools" );
	$( ".vutools" ).click(function( event ){ event.preventDefault();
	if (container3.is( ":visible" )){ container3.slideUp( 500 ); } 
		else { container3.slideDown( 500 );}
	// close others
	if (container2.is( ":visible" )){ container2.slideUp( 250 ); } 
	if (container.is( ":visible" )){ container.slideUp( 250 ); } 
});
});
////////////////////////////////////////////
// clear search box	
////////////////////////////////////////////
function clearDefault(el) {
	if (el.defaultValue==el.value) el.value = ""
	}
