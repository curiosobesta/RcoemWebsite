//jQuery to collapse the navbar on scroll
var scrolledYet = "false";
var shrinkTime = 300;
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
		if(scrolledYet=="false"){
			scrolledYet = "true";
			$(".navbar-fixed-top").addClass("top-nav-collapse");
			$("#sub-banner").slideUp(shrinkTime);
			$("#logo").animate({height:'5em', width:'5em' });
		}
    } else {
		if(scrolledYet == "true"){
			scrolledYet = "false";
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
			$("#sub-banner").slideDown(shrinkTime);
			$("#logo").animate({height:'10em', width:'10em' });
		}
    }
});

$(".inner-caption").hide()
$(".rcoem-caption-text")
	.mouseenter(function(){
        $(this).children(".inner-caption").slideDown(200);
	})
	.mouseleave(function(){
		$(this).children(".inner-caption").slideUp(200);
	});
	
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


$(window).load(function(){
	$(".#sagar")
		.hover(function(){
			$(this).parent().addClass("act");
		});
		
	});

