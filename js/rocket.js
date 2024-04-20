var timer = null;
var countdownNumber = 10;


var changeState = function (state) 
{
	document.body.className = 'body-state' +
	state;
	clearInterval(timer);
	countdownNumber = 10;
	document.getElementById ('countdown').innerHTML = 10

	// countdown
	if (state == 2) {
		timer = setInterval(function () {
			countdownNumber = countdownNumber -1;
				document.getElementById ('countdown').innerHTML = countdownNumber;
			
			if (countdownNumber <= 0) {
				changeState(3);
			};	
		}, 100);	
	} else if (state == 3) {
		var success = setTimeout(function () 
		{
			var randomNumber = Math.round(Math.random()*10);
			console.log('Random Numer '+randomNumber);

			//success
			if (randomNumber >= 10) {
				changeState(4);

			//failure Oh No
			} else{
				changeState(5);
			} 
		}, 2000)
	}
} 