$(document).ready(function(){
	
	$(".gnb").mouseenter(function(){
		$("header").addClass("active");
	});
	$(".gnb").mouseleave(function(){
		$("header").removeClass("active");
	});

    $("header .gnb").mouseenter(function(){
        $(".submenu-bg").stop().slideDown(300);
        $(".submenu").stop().slideDown(300);
    });
    $("header .gnb").mouseleave(function(){
        $(".submenu-bg").stop().slideUp(300);
        $(".submenu").stop().slideUp(300);
    });

	$(".sec_info").addClass('action');
	// $(".section3 .btn").mouseenter(function(){
	// 	$(".section3 .btn").addClass("on")
	// });

	$('.scroll_btn.down_btn').click(function(){
		swiper.slideTo(1, 300, false)
	})
	$('scroll_btn.top_btn').click(function(){
		swiper.slideTo(0, 300, false)
	})
	$('scroll_btn.top_black').click(function(){
		swiper.slideTo(0, 300, false)
	})

	$("header .ham-menu.open").click(function(){
		$("header .ham-menu.close").show()
		$("header .ham-menu.open").hide()
		$(".tab_mo_menu").stop().slideDown(300)
		$("header .logo .color").css("opacity", "1")
		$("header .quick_gnb>li>a").css("color", "#000")
	})
	$("header .ham-menu.close").click(function(){
		$("header .ham-menu.close").hide()
		$("header .ham-menu.open").show()
		$(".tab_mo_menu").stop().slideUp(300)
		$("header .logo .color").css("opacity", "0")
		$("header .quick_gnb>li>a").css("color", "#fff")
	})

	// $(".tab_mo_gnb>li>a").click(function(){
	// 	$(".tab_mo_gnb>li>a").addClass("active")
	// 	$(".tab_mo_gnb>li .tab_mo_submenu").stop().slideDown(300)
	// })
	// $(".tab_mo_gnb>li>a.active::before").click(function(){
	// 	$(".tab_mo_gnb>li>a").removeClass("active")
	// 	$(".tab_mo_gnb>li .tab_mo_submenu").stop().slideUp(300)
	// })

	// $(".tab_mo_gnb>li.menu1>a").click(function(){
	// 	$(".tab_mo_gnb>li.menu1>a").addClass("active")
	// 	$(".tab_mo_gnb>li.menu1 .tab_mo_submenu").stop().slideDown(300)
	// })



	// $(".tab_mo_submenu").hide();

	$(".tab_mo_gnb li").click(function(){ 
		$(this).children(".tab_mo_submenu").stop().slideDown(300);
		$(this).children(".tab_mo_gnb>li>a").addClass("active");
	});


// $(".tab_mo_gnb>li>a").click(function(){
// 	$(this).children(".tab_mo_submenu").stop().slideUp(300);
// 	$(this).children(".tab_mo_gnb>li>a").removeClass("active");
// })








	
	var swiper = new Swiper('.swiper-container', {
		direction: 'vertical',
		slidesPerView: 'auto',
		spaceBetween: 10,
		mousewheel: true,
		parallax: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		slidesPerView:'auto',
	direction: "vertical",
	effect: "slide",
	autoplay: false,
	speed: 800,
	allowTouchMove:false,
	simulateTouch:false,
	grabCursor: false,
	touchStartPreventDefault:false,
	watchSlidesProgress: true,
	watchSlidesVisibility: true,
	mousewheel: {
	   releaseOnEdges: true,
	},
	mousewheelControl: true,
	pagination: {
		el: '.swiper-pagination',	
		clickable: true,
	},
	on:{
		slideChangeTransitionEnd: function(){
			if(this.activeIndex == 0){
				$("header").removeClass("action")
				$(".line").removeClass("action")
				$(".section .sec_info").removeClass("active")
				$(".sec_info").eq(0).addClass('action')
				$(".swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet").css("background-color", "#fff")
				$(".swiper-pagination-bullet.swiper-pagination-bullet-active::before").css("color", "#fff")
				$(".swiper-pagination").removeClass("bk")
				$(".swiper-pagination-bullet.swiper-pagination-bullet-active").removeClass("bk")
				$("header .ham-menu>span").css("background-color", "#000")
			}else if(this.activeIndex == 1){
				$("header").addClass("action")
				$(".line").addClass("action")
				$(".section .sec_info").addClass("active")
				$(".sec_info").eq(1).addClass('action')
				$(".section2").addClass("active");
				$(".swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet").css("background-color", "#000")
				$(".swiper-pagination-bullet.swiper-pagination-bullet-active::before").css("color", "#000")
				$(".swiper-pagination").addClass("bk")
				$(".swiper-pagination-bullet.swiper-pagination-bullet-active").addClass("bk")
				$(".scroll_btn.down_btn").css("visibility", "hidden")
				$(".scroll_btn.top_black").css("visibility", "visible")
				$("header .ham-menu>span").css("background-color", "#000")
			}else if(this.activeIndex == 2){
				$("header").removeClass("action")
				$(".line").removeClass("action")
				$(".section .sec_info").removeClass("active")
				$(".sec_info").eq(2).addClass('action')
				$(".section3").addClass("active")
				$(".swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet").css("background-color", "#fff")
				$(".swiper-pagination-bullet.swiper-pagination-bullet-active::before").css("color", "#fff")
				$(".swiper-pagination").removeClass("bk")
				$(".swiper-pagination-bullet.swiper-pagination-bullet-active").removeClass("bk")
				$(".scroll_btn.top_black").css("visibility", "hidden")
				$(".scroll_btn.top_btn").css("visibility", "visible")
				$("header .ham-menu>span").css("background-color", "#fff")
			}else if(this.activeIndex == 3){
				$(".line").removeClass("action")
				$(".section .sec_info").removeClass("active")
				$(".sec_info").eq(3).addClass('action')
				$(".section4").addClass("active")
			}else if(this.activeIndex == 4){
				$("header").addClass("action")
				$(".line").addClass("action")
				$(".section .sec_info").addClass("active")
				$(".sec_info").eq(4).addClass('action')
				$(".section5").addClass("active")
				$(".swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet").css("background-color", "#000")
				$(".swiper-pagination-bullet.swiper-pagination-bullet-active::before").css("color", "#000")
				$(".swiper-pagination").addClass("bk")
				$(".swiper-pagination-bullet.swiper-pagination-bullet-active").addClass("bk")
				$(".scroll_btn.top_black").css("visibility", "visible")
				$(".scroll_btn.top_btn").css("visibility", "hidden")
				$("header .ham-menu>span").css("background-color", "#000")
			}else{

			}
			
		}
	}
	// on: {
	// 	init: function(){
	// 		$(".top_btn").addClass("hide");
	// 	},
	// 	transitionStart: function(){
	// 		var Idx = this.activeIndex;
	// 		//top & down btn show/hide
	// 		if(this.activeIndex != 0 ){
			
	// 		}else{
				
	// 		}
	// 		if(this.activeIndex != 1 ){
			
	// 		}else{
				
	// 		}
	// 		if(this.activeIndex == 2 ){
				
	// 		}else{
	// 		}
	// 		//footer 위치만큼 top btn 위치 이동
	// 		if($(".footer").hasClass("swiper-slide-visible")){
	// 			if($(window).width() >= 768){
	// 				$(".top_btn").css("bottom","200px").css("transition","0.8s");
	// 			}else {
	// 				$(".top_btn").css("bottom","250px").css("transition","0.8s");
	// 			}
	// 		}else{
	// 			$(".top_btn").css("bottom","0").css("transition","0.8s");
	// 		}
	// 	},
	// },
	});


        
});