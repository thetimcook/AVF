$(document).ready(function(){

    $('.flexslider').flexslider({
	    animation: "slide",
	    controlNav: true,
	    directionNav: false,
	    animationLoop: false,
	    slideshow: false
    });
    
    sizeChange = function(){
	var w = $(window).width();
	$('.slide').css('width', w);
	};
	sizeChange();		
	$(window).resize(sizeChange);

	
});

