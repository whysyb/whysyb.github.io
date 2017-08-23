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

function projects(){
	//open URL in new tab
	// TODO find bug on chrome
	/*let links = findAll('.project a');
	if(links.length > 0){
		for(var i = 0; i < links.length; i++){
			links[i].setAttribute('onclick', 'window.open(this.href); return false;');
			links[i].setAttribute('onkeypress', 'window.open(this.href); return false;');
		}
	}*/
}

//jQuery functions
// TODO animatedScroll -> Refused to load the script 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js' because it violates the following Content Security Policy directive: "script-src 'self' https://www.googleapis.com".
/*$(document).ready(function(){
	function animatedScroll(){
		$('a[href^=#]').click(function(){
			var $target = $(this.hash);
			if ($target.length) {
				var targetOffset = $target.offset().top;
				$('html,body').delay(50).animate({scrollTop: targetOffset}, 200);
				return false;
			}
		});
	}
});*/

//execution
weeGrid();
