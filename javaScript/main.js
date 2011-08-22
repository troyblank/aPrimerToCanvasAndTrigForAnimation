$(document).ready(init);

var LEFT_KEY_CODE = 37;
var RIGHT_KEY_CODE = 39;

function init(){
	addListeners();
}

function addListeners(){
	$(window).keydown(keyPressHand);
}

//-------------------------------------------------------------------------------------------------
//HANDLERS
//-------------------------------------------------------------------------------------------------
function keyPressHand(e){
	if(e.which == RIGHT_KEY_CODE){
		console.log();
		if($("a#right_btn").length > 0){
			window.location = $("a#right_btn").attr("href");
		}
	}else if (e.which == LEFT_KEY_CODE){
		if($("a#left_btn").length > 0){
			window.location = $("a#left_btn").attr("href");
		}
		
	}
}