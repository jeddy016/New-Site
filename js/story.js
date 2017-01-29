
$(document).ready(function() {
    
	$('.fa-bars').click(function() {
		$(this).toggleClass('active');
        $('.menu').slideToggle(1000);
    });
   
   $(document).click(function (e) {
   		if ($(e.target).closest(".target").length === 0) {
        	$(".menu").slideUp('slow');
        	$('.fa-bars').removeClass('active');
    	}
    });
});
