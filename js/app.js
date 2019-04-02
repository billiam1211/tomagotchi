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
        setInterval(() => {
            this.time += 1;
            $('#time').text(this.time + ' min')
            if (this.time % 60 === 0) {
                (pet.age += 1);
                $('#age').text('Age: ' + pet.age)
            };
            if (this.time % 10 === 0) {
                pet.hunger += 1
                $('#hunger').text('Hunger: ' + pet.hunger)

            }
            if (this.time % 17 === 0) {
                pet.boredom += 1
                $('#boredom').text('Boredom: ' + pet.boredom)
            }
            if (this.time % 30 === 0) {
                if (this.lightsOn === true) {
                    pet.sleepiness += 1
                    $('#sleepiness').text('Sleepiness: ' + pet.sleepiness)

                } else {
                    if (this.lightsOn === false) {
                        pet.sleepiness -= 1
                        $('#sleepiness').text('Sleepiness: ' + pet.sleepiness)

                    }
                }
            };



        }, 150)        
    },
    lightSwtich() {
        this.lightsOn = !this.lightsOn
        console.log(game.lightsOn);
    },
    feed() {
        if (this.lightsOn = true) {
            pet.hunger -= 1
        } else {
            console.log('Cannot feed ' + pet.name + ' while sleeping');
        }
    },
    play() {
        pet.boredom -= 1
        console.log("You played peek'a'boo with " + pet.name + ".");
    },
    death() {
        console.log(pet.name + ' has died...');
    }
}
$('#feed').on('click', () => {
    console.log('Feed button was clicked');
    game.feed();
})

$('#lightswitch').on('click', () => {
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



if (pet.hunger = 10 && pet.boredom = 10){
	this.death()
} else {
	if (pet.hunger = 10 && pet.sleepiness = 10) {
		this.death()
	} else{
		if (pet.sleepiness = 10 && pet.boredom = 10){
			this.death()
		}
	}
}


if (pet.hunger = 10 && pet.boredom = 10) {
		    this.death()
		} else {
		    if (pet.hunger = 10 && pet.sleepiness = 10) {
		        this.death()
		    } else {
		        if (pet.sleepiness = 10 && pet.hunger = 10) {
		            this.death()
		        }
		    }
		}
