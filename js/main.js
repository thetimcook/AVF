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
	
	$('#r1').click(function(){
		if ($('#p1').css('display') === "none"){
			$('#p1').css('display','block');
		} else {
			$('#p1').css('display','none');
		};
	});
	$('#r2').click(function(){		
		if ($('#p2').css('display') === "none"){
			$('#p2').css('display','block');
		} else {
			$('#p2').css('display','none');
		};
	});
	$('#r3').click(function(){		
		if ($('#p3').css('display') === "none"){
			$('#p3').css('display','block');
		} else {
			$('#p3').css('display','none');
		};
	});
});

