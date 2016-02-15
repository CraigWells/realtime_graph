
var values = [],
	polling,
	settings = {
		poleMin: 1,
		poleMax: 30,
		rangeMin: 1,
		rangeMax: 200
	};

function pole(){
	// at random intervals between 1 - 30 seconds, add a new value to the array
	var interval = (getRandomInt(settings.poleMin, settings.poleMax) * 1000) - 1000;
	setTimeout(updateValues, interval);
};

function updateValues(){
	var randomValue = getRandomInt(settings.rangeMin, settings.rangeMax);
	values.push(randomValue);
	console.log(values);
};

function getRandomInt(min, max) {
/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function start(){
	polling = setInterval(pole, 1000);
};

function stop(){
	clearInterval(polling);
};


/*
	Add a random value between 0 - 100 to the array.
*/
