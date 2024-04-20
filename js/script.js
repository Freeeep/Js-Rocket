var doCoolStuff = function(){
	var currentClassName = document.getElementById('cool').className;

	if (currentClassName == 'cool') {
		document.getElementById('cool').className = 'cool red';
	} else {
		document.getElementById('cool').className = 'cool';
	}

}

var sayMyName = function(name) {
	alert('My name is '+name);
}

var car = {
	make: 'VW',
	type: 'Polo',
	colour: 'Pink',
	isTurnedOn: false,
	numberOfWheels: 4,
	seats: [
		'seat1',
		'seat2',
		'seat3',
		'seat4'
	],
	turnOn: function () {
		this.isTurnedOn = true;
	},
	fly: function() {
		alert('Fly!!');
	},
	switchCar: function () {
		
		if (car.isTurnedOn == true) {
			this.isTurnedOn = false;
			} else {
			this.isTurnedOn = true;
		}
		console.log(car.isTurnedOn);
	}

	};


	console.log('hello there friends!');