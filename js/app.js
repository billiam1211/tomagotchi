console.log('JS is live');

class Tomagotchi {
    constructor(name) {
        this.name = '';
        this.age = 0;
        this.hunger = 0;
        this.boredom = 0;
        this.sleepiness = 0;
    }

}
const pet = new Tomagotchi('', 0, 0, 0, 0, 'sleep')

const game = {
    lightsOn: true,
    time: 0,

    startGame() {
        console.log('Start Game initiated');
        const petName = $('#petName').val()
        pet.name = petName
        console.log(pet.name + ' has been born!');
		setInterval( () => {
    			game.time += 1;
            }, 1000),
        setInterval(() => {
        	// if amt of time % 60 
            (pet.age += 1);
            (pet.hunger += 1);
            (pet.boredom += 1);

            // if amt of time % 3
            	// if lights on
            		// sleepier
        		// else -- lights not on
        			// get less sleepy
            console.log(pet.name + ' is now ' + pet.age + ' years old! Happy birdthday!');
        }, 60000)
    },
    // sleep() {
    //     if (game.lightsOn = true) {
    //         setInterval(function() {
    //             (pet.sleepiness += 1);
    //         }, 3000)
    //     } else {
    //         if (game.lightsOn = false) {
    //             setInterval(function() {
    //                 (pet.sleepiness -= 1);
    //             }, 3000)
    //         }
    //     }
    // },
    lightSwtich() {
        game.lightsOn = !game.lightsOn
    },
    feed() {
        pet.hunger -= 1
    },
    play() {
        pet.boredom -= 1
        console.log("You played peek'a'boo with " + pet.name + ".");
    },
    death() {

    }
}

$('#feed').on('click', () => {
    console.log('Feed button was clicked');
    game.feed();
})

$('#lights').on('click', () => {
    console.log('Lights button was clicked');
    game.lightSwtich()
})

$('#play').on('click', () => {
    console.log('Play button was clicked');
    game.play()
})

$('form').on('submit', (e) => {
    e.preventDefault();
    console.log('form submitted');
    const inputValue = $('#petName').val()
    console.log(inputValue);
    game.startGame();
})