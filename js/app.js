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
            game.time += 1;
            $('#time').text(game.time + ' min')
            if (game.time % 60 === 0) {
                (pet.age += 1);
                $('#age').text('Age: ' + pet.age)
            };
            if (game.time % 10 === 0) {
                pet.hunger += 1
                $('#hunger').text('Hunger: ' + pet.hunger)
                pet.boredom += 1
                $('#boredom').text('Boredom: ' + pet.boredom)
            }
            if (game.time % 30 === 0) {
                if (game.lightsOn === true) {
                    pet.sleepiness += 1
                    $('#sleepiness').text('Sleepiness: ' + pet.sleepiness)

                } else {
                    if (game.lightsOn === false) {
                        pet.sleepiness -= 1
                        $('#sleepiness').text('Sleepiness: ' + pet.sleepiness)

                    }
                }
            };

        }, 250)
    },
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