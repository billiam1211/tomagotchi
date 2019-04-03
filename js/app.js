console.log('JS is live');

class Tomagotchi {//class for tomagotchi
    constructor(name) {
        this.name = '';
        this.age = 0;
        this.hunger = 0;
        this.boredom = 0;
        this.sleepiness = 0;
    }
}
const pet = new Tomagotchi('', 0, 0, 0, 0, 'sleep') //instantiation of tomagotchi

const game = {//game object
    lightsOn: true,
    time: 0,
    movementTimer: 0,
    intervalId: null,
    startGame() {//function to start the game
        console.log('Start Game initiated');
        const petName = $('#petName').val() //grabs the value from the pet name input and stores it
        pet.name = petName //sets the pet's name equal to the previous variable above
        console.log(pet.name + ' has been born!'); 
        setInterval(() => {//this interval is for the rate of movement of the tomagotchi animation
            this.movementTimer += 1;
            if (this.movementTimer % 1 === 0) {
                this.moveLeft();
            }
            if (this.movementTimer % 3 === 0) {
                this.moveRight();
            }
            if (this.movementTimer % 3 === 0) {
                this.moveUp();
            }
            if (this.movementTimer % 7 === 0) {
                this.moveDown();
            }
        }, 100)
        this.intervalId = setInterval(() => {//interval which adds 1 to time and creates timeline once game is started
            this.time += 1;
            $('#time').text(this.time + ' min')//grabs the time div and injects the value of the time property from the game
            if (pet.age === 5) {//code to morph the pet at age 5 - grabs div with pet image and changes the source image attribute
                $('#tomagotchi').attr("src", "http://clipart-library.com/images/6Trjk7jTK.png")
            }
            if (pet.age === 10) {//code to morph the pet at age 10
                $('#tomagotchi').attr("src", "https://dumielauxepices.net/sites/default/files/super-mario-clipart-toad-mario-787431-2321641.png")
            }
            if (pet.age === 15) {//code to morph the pet at age 15
                $('#tomagotchi').attr("src", "https://sickr.files.wordpress.com/2018/07/captain_toad_treasure_tracker_happy_toad_artwork.png")
            }
            if (pet.age === 20) {//code to morph the pet at age 20
            	$('#tomagotchi').attr("src", "https://www.mariowiki.com/images/7/7c/Toadsworth_artwork_--_Super_Mario_Sunshine.PNG")
            }
            if(pet.hunger >= 10 && pet.sleepiness >= 10){//logic to call the end game function if 2 out of 3 metrics equal 10
            	game.death()
            }else{
            	if(pet.hunger >= 10 && pet.boredom >= 10){
            		game.death()
            	}else{
            		if(pet.boredom >= 10 && pet.sleepiness >= 10){
            			game.death()
            		}
            	}
            };
            // if (this.lightsOn = true){
            // 	$('#lightswitch').css('backgroundColor', 'yellow')
            // }else{
            // 	if(this.lightsOn = false){
            // 		$('#lightswitch').css('backgroundColor', 'black')
            // 	}
            // }
            if (this.time % 30 === 0) {//code to add 1 to pet age at a given interval
                (pet.age += 1);
                $('#age').text('Age: ' + pet.age)
            };
            if (this.time % 5 === 0) {//code to add 1 to hunger at given interval
                pet.hunger += 1
                $('#hunger').text('Hunger: ' + pet.hunger)
            }
            if (this.time % 12 === 0) {//code to add boredom to pet at given interval
                pet.boredom += 1
                $('#boredom').text('Boredom: ' + pet.boredom)
            }
            if (this.time % 17 === 0) {//code to increase or decrease pet sleepiness depending on the boolean value of lightsOn 
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
        }, 500)
    },
    lightSwtich() {//function that changes the boolean value of lightsOn
        this.lightsOn = !this.lightsOn
        console.log(game.lightsOn);
        if (this.lightsOn === true){
			$('#lightswitch').css('backgroundColor', 'yellow')
		}else{
			if(this.lightsOn === false){
				$('#lightswitch').css('backgroundColor', 'black')
			}
		}
    },
    feed() {//function to feed pet, removes 1 from hunger value
        if (this.lightsOn === true) {
            pet.hunger -= 1
        } else {
            // console.log('Cannot feed ' + pet.name + ' while sleeping');
        }
    },
    play() {//play function to remove 1 from boredom pet property
        pet.boredom -= 1
        // console.log("You played peek'a'boo with " + pet.name + ".");
    },
    death() {//function ends the game when called and changes the image to 'game over'																	
        clearInterval(this.intervalId)
        // console.log(pet.name + ' has died...');
        $('#tomagotchi').attr("src", "https://sumedh.files.wordpress.com/2013/11/gameoverbutton3.png") //changes tomagotchi image to game over image
    },
    moveLeft() {//animation for movement
        $('#tomagotchi').css("padding-left", 0)
    },
    moveRight() {//animation for movement
        $('#tomagotchi').css("padding-left", 20)
    },
    moveUp() {//animation for movement
        $('#tomagotchi').css("padding-top", 0)
    },
    moveDown() {//animation for movement
        $('#tomagotchi').css("padding-top", 10)
    }
}
$('#feed').on('click', () => {//links feed button with feed function
    // console.log('Feed button was clicked');
    game.feed();
})

$('#lightswitch').on('click', () => {//links lights button to lights on/off function
    console.log('Lights button was clicked');
    game.lightSwtich()
})

$('#play').on('click', () => {//links the play button to play function
    // console.log('Play button was clicked');
    game.play()
})

$('form').on('submit', (e) => {//links the form submission to startGame function
    e.preventDefault();
    // console.log('form submitted');
    const inputValue = $('#petName').val()
    // console.log(inputValue);
    game.startGame();
})
// if (pet.hunger = 10 && pet.boredom = 10) {
// 		    this.death()
// 		} else {
// 		    if (pet.hunger = 10 && pet.sleepiness = 10) {
// 		        this.death()
// 		    } else {
// 		        if (pet.sleepiness = 10 && pet.hunger = 10) {
// 		            this.death()
// 		        }
// 		    }
// 		}