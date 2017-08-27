$(document).ready(function(){

	//global variables
	var windowWidth = $(window).width();


	//global functions
	var cl = function(tolog){
		console.log(tolog)
	}

	var animatedScroll = function(){
		$('a[href^="#"]').click(function(){
			var $target = $(this).attr("href");
			if($target != '#'){
				$('html, body').animate({scrollTop:$($target).offset().top - 50 + 'px'}, 250);
				return false;				
			}
		});
	}();

	var mobileMenu = function(){
		var button = $('.hamb-button'),
				menu = $('.header'),
				icons = $('.logged-icon'),
				close = $('.close-menu');
		button.click(function(){
			if(menu.hasClass('open')){
				menu.removeClass('open');
				icons.removeClass('shown');
				$('body').removeClass('noverflow');
			}else{
				menu.addClass('open');
				icons.addClass('shown');
				$('body').addClass('noverflow');
			}
		});
		close.click(function(){
			menu.removeClass('open');
			icons.removeClass('shown');
			$('body').removeClass('noverflow');
		});
		$('.nav li').click(function(){
			menu.removeClass('open');
		});
	}

	var mobileIcon = function(){
		var icon = $('.l-icon');
		icon.each(function(){
			var data = $(this).attr('data-icon'),
					subPanel = $('.sub-panel-'+data);
			$(this).click(function(){
				$('.l-icon').removeClass('current');
				$(this).addClass('current');
				$('.close-panel').addClass('on');
				$('.sub-panel').removeClass('remove');
				if(subPanel.hasClass('hide')){
					$('.sub-panel').addClass('hide');
					subPanel.removeClass('hide');
				}else{
					subPanel.addClass('hide');
				}
			});
		});
		$('.close-panel').click(function(){
			$('.close-panel').removeClass('on');
			$('.sub-panel').addClass('remove');
			$('.l-icon').removeClass('current');
		});

		$('.title-band h4').each(function(){
			$(this).append('<div class="close-panel-icon"><i class="fa fa-times" aria-hidden="true"></i></div>')
			$('.close-panel-icon').click(function(){
				$('.sub-panel').addClass('remove');
				$('.l-icon').removeClass('current');
			});
		});
	}

	var desktopIcon = function(){
		var icon = $('.l-icon');
		icon.each(function(){
			var clickCoutn = 0;
			var desktopData = $(this).attr('data-icon'),
					desktopSubPanel = $('.sub-panel-'+desktopData);
			$(this).click(function(){
				$('.l-icon').removeClass('current');
				$(this).addClass('current');
				if(desktopSubPanel.hasClass(desktopData+'-panel')){
					desktopSubPanel.addClass('hide');
					desktopSubPanel.removeClass(desktopData+'-panel');
					$('.l-icon').removeClass('current');
				}else{
					$('.sub-panel').addClass('hide');
					$('.sub-panel').removeClass('notifications-panel');
					$('.sub-panel').removeClass('messages-panel');
					$('.sub-panel').removeClass('options-panel');
					desktopSubPanel.addClass(desktopData+'-panel');
					desktopSubPanel.removeClass('hide');
				}
			});
		});
		$('.toggle').each(function(){
				$(this).click(function(){
					$('.l-icon').removeClass('current');
					$('.sub-panel').addClass('hide');								
					$('.sub-panel').removeClass('notifications-panel');
					$('.sub-panel').removeClass('messages-panel');
					$('.sub-panel').removeClass('options-panel');
				});
		});
		$('.header').click(function(){
			$('.sub-panel').addClass('hide');								
			$('.sub-panel').removeClass('notifications-panel');
			$('.sub-panel').removeClass('messages-panel');
			$('.sub-panel').removeClass('options-panel');
			$('.l-icon').removeClass('current');
		});
	}

	var floatingMenu = function(){
		var delayTime = 200;
		$('.action-button').each(function(){
			var floatingMenu = $(this).next('.floating-menu'),
					floatinButton = $(document).find('.floating-button');
			$(this).click(function(){
				if(floatingMenu.hasClass('open')){
					floatingMenu.removeClass('open');
				$('body').removeClass('noverflow');
				}else{
					floatingMenu.addClass('open');
				$('body').addClass('noverflow');
				}
			});
		});
		$('.floating-button').each(function(){
			var dataFloating = $(this).attr('data-floating');
			var sidebar = $('.'+dataFloating)
			$(this).click(function(){
				$('.close-sidebar').addClass('on');
				$(this).parent().removeClass('open');
				$('.sidebar').removeClass('on');
				sidebar.addClass('on');
			});
		});

		$('.close-sidebar').click(function(){
			$(this).removeClass('on');
			$('.sidebar').removeClass('on');
		});
	};

	var desktopSubMenu = function(){
		var subMenuParent = $('.has-submenu');
		subMenuParent.each(function(){
			var submenu = $(this).children('.submenu');
			$(this).click(function(e){
				e.preventDefault();
				if(submenu.hasClass('open')){
					submenu.removeClass('open').fadeOut(150);
				}else{
					submenu.addClass('open').fadeIn(150);
				}
			});
			$('.toggle').click(function(){
				submenu.removeClass('open').fadeOut(150);
			});
			$('.l-icon').click(function(){
				submenu.removeClass('open').fadeOut(150);
			});
		});
	}


	//execution

	$('.feature-list').each(function(){
		$(this).find('li').append('<span></span>');
		$(this).find('li:last span').remove();
	});

	if(windowWidth > 1100){
		$('.parallax-section').parallax('center', 0.15, 0.1, true);	
		$('.section-debriefon').parallax('center', -0.15, 0.8, true);	
		$('.debriefon-parallax').parallax('center', 0.15, 0.3, true);	
		//$('.section-home-background').parallax('center', 0.15, 0.3, true);	
		$('.login-section').parallax('center', 0.16, 0.1, true);	

		$(window).scroll(function(){
			var styleAttr = $('.debriefon-parallax').attr('style');
			if(styleAttr === 'background-position: center 71px;'){
				$('.debriefon-parallax').addClass('opacited');
			}else{
				$('.debriefon-parallax').removeClass('opacited');
			}
		});
	}

	var responsiveMenu = function(){
		if(windowWidth < 1100){
			mobileMenu();
			mobileIcon();
			floatingMenu();
		}
		else if(windowWidth < 800){			
			$('.header-band .logo img').attr('src','ressources/images/logo-mobile.png');
		}
		else if(windowWidth > 1100){	
			desktopIcon();
			desktopSubMenu();
		}	
	}
	
	$(document).ready(function(){
		responsiveMenu();		
	});

	$(window).resize(function(){
		windowWidth = $(window).width();
		responsiveMenu();	
	});

}) //end of jQuery


