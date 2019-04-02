console.log('JS is live');

class Tomagotchi {
	constructor(name) {
		this.name = ''
		this.age = 0
		this.hunger = 0
		this.boredom = 0
		this.sleepiness = 0
	}
}

const pet = new Tomagotchi('', 0, 0, 0, 0)

const game = {
	lightsOn: true,
	startGame () {
		console.log('Start Game initiated');
		const petName = $('#petName').val()
		pet.name = petName
		setInterval(function(){ console.log("3 seconds have passed"); }, 3000);
		setInterval(function(){ (pet.age += 1); }, 60000);
	},
	feed () {

	},
	lightSwtich () {

	},
	play () {

	},
	death () {

	}
}

$('#feed').on('click', () => {
	console.log('Feed button was clicked');
	feed();
})

$('#lights').on('click', () => {
	console.log('Lights button was clicked');
	lightSwtich()
})

$('#play').on('click', () => {
	console.log('Play button was clicked');
	play()
})

$('form').on('submit', (e) => {
	e.preventDefault();
	console.log('form submitted');
	const inputValue = $('#petName').val()
	console.log(inputValue);
	game.startGame();	
})



























