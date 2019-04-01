console.log('JS is live');

class Tomagotchi {
	constructor(name, age, hunger, boredom, sleepiness) {
		this.name = name
		this.age = age
		this.hunger = hunger
		this.boredom = boredom
		this.sleepiness = sleepiness
	}
}

$('#feed').on('click', () => {
	console.log('Feed button was clicked');
})

$('#lights').on('click', () => {
	console.log('Lights button was clicked');
})

$('#play').on('click', () => {
	console.log('Play button was clicked');
})