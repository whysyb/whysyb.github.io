$(document).ready(function(){
	var connectWith = function(){
		var so = $(document).find('.sign-options')
		if(so.length >= 1){
			$('.sign-options').click(function(){
				if($('.connect-with').hasClass('show')){
					$('.connect-with').removeClass('show');
					$('.connect-with').slideUp(250);
				}else{
					$('.connect-with').addClass('show');
					$('.connect-with').slideDown(250);
				}
			});
		}
	}

	var slider = function(){
		var owl = $('#news-slider'); 
	  owl.owlCarousel({	 
	      navigation : true,
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      singleItem:true	 
	 
	  });
	}

	var lightBox = function(){
		var zoom = $('.zoom-img');
		var lightboxDarker = $('.lightbox-darker');
		var lightboxContent = $('.lightbox-content');
		zoom.each(function(){
			$(this).click(function(){
				var imgClone = $(this).clone();
				lightboxContent.children('.lightbox-content-content').html(imgClone);
				lightboxDarker.fadeIn(150);
				if(imgClone.load()){
					lightboxContent.addClass('load');
				}
			});
		});
		lightboxDarker.click(function(){
			$(this).fadeOut(150);
			lightboxContent.removeClass('load');
		});
	}

	var frontPatch = function(){

		$('.sign-options').click(function(){
			var sectionHome = $('.section-home');
			if(sectionHome.hasClass('full')){
				sectionHome.removeClass('full');			
			}else{
				sectionHome.addClass('full');
			}
		});
	}

	$(window).scroll(function(){
		if($('.navigation').hasClass('fixed-header-nav')){
			if($(this).scrollTop() >= 150){
				$('.landing-header').addClass('scrolled');
				$('.landing-header-band').addClass('scrolled');
				$('.landing-header .logo img').attr('src','ressources/images/logo-scrolled.png');
				$('.landing-header-band .logo img').attr('src','ressources/images/logo-mobile-scrolled.png');
			}else{
				$('.landing-header').removeClass('scrolled');
				$('.landing-header-band').removeClass('scrolled');
				$('.landing-header .logo img').attr('src','ressources/images/logo.png');
				$('.landing-header-band .logo img').attr('src','ressources/images/logo-mobile.png');
			}
		}
	});
	
	connectWith();
	slider();
	lightBox();
	frontPatch();
})