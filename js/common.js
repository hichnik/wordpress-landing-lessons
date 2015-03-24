$(document).ready(function() {

	function setHeight(){
		$(".main_head").css("height", $(window).height())	
	}


	$(window).resize(function() {
		setHeight()
	})

	setHeight()	
});


$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});


