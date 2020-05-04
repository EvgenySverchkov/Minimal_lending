$(function(){
	$('.top-devices>div').on('click', function(){
		$('.top-devices>div').removeClass('active');
		$(this).addClass('active');
		switch($(this).attr("class")){
			case "top-devices__computer active":
				$(".top").css("background", "linear-gradient(-200deg, #069592, #2ee5e1)");
				break;
			case "top-devices__tablet active":
				$(".top").css("background", "linear-gradient(-200deg, #038587, #07d0d2)"); 
				break;
			case "top-devices__mobile active":
				$(".top").css("background", "linear-gradient(-200deg, #00727c, #11cfb6)");
				break;
		}
	});
	$('.header-menu__responsive-btn').on('click', function(){
		$('.header-menu ul').slideToggle();
	});
});