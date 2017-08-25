//tools functions
function cl(cl){
	console.log(cl)
}

function find(tofind){
	let isfind = document.querySelector(tofind);
	return isfind;
}

function findAll(tofinds){
	let isfinds = document.querySelectorAll(tofinds);
	return isfinds;
}

//main functions
function weeGrid(){
	//inject .clear in rows
	let rows = findAll('.w-row');
	if(rows.length > 0){
		for(var i = 0; i < rows.length; i++){
			var clear = document.createElement("DIV");
			clear.classList.add('clear');
			rows[i].appendChild(clear);
		}
	}
}

function uiux(){
	// working process
	let workingbloc = document.querySelectorAll('.working-process-bloc');
	let maxChar = 52;

	if(workingbloc.length>0){
		for(let i = 0; i < workingbloc.length; i++){

			let wkbcontent = workingbloc[i].querySelector('p');
			let wbkheight = wkbcontent.offsetHeight
			if(wkbcontent.innerText.length > maxChar){
				wkbcontent.classList.add('larger');
				wkbcontent.style.height = 50 + 'px';
			}


			workingbloc[i].addEventListener('click', function(){
				if(this.classList.contains('open')){
					this.classList.remove('open')
					wkbcontent.style.height = 50 + 'px';
				}else{
					this.classList.add('open')		
					wkbcontent.style.height = wbkheight + 'px';	
				}
			})
		}
	}
	window.addEventListener('scroll', function(){
		if(this.scrollY >= 250){
			document.querySelector('body').classList.add('scrolled');
			document.querySelector('body').classList.add('scrolling');			
		}else{
			document.querySelector('body').classList.remove('scrolling');			
		}
	});
}

//execution
weeGrid();
uiux();
document.querySelector('body').classList.add('ready')

//jQuery functions
// TODO animatedScroll -> Refused to load the script 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js' because it violates the following Content Security Policy directive: "script-src 'self' https://www.googleapis.com".
$(document).ready(function(){
	var animatedScroll = function(){
    $('a[href^=#]').click(function(){
      var $target = $(this.hash);
      if ($target.length) {
        var targetOffset = $target.offset().top;
        if($('body').hasClass('scrolled')){
        	$('html,body').delay(50).animate({scrollTop: targetOffset}, 250);
        }else{
        	$('html,body').delay(50).animate({scrollTop: targetOffset - 120 + 'px'}, 150);
        }
        return false;
      }
    });
  }();
});
