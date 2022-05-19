// //Helpful Links
// //https://kaboomjs.com/
// //https://replit.com/~
// //https://www.youtube.com/watch?v=4OaHB0JbJDI&list=WL&index=35

// //First import the Kaboom library
kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    background: [0,0,0,1]
})

// //First we need to have sprites
loadSprite('bean', 'Sprites/bean.png')
loadSprite('background', 'Sprites/Background.png')
loadSprite('playButton', 'Sprites/playButton.png')


//Let's add some music
loadSound("example track", "Sprites/ExampleTrack.mp3")

// //Let's make a map
scene("game", ({level}) => {
    layers(['bg', 'obj', 'ui'], 'obj')
    //adding a background
    add([
        sprite("background", "Sprites/Background.png"),
        layer('bg'),
    ])

    const maps = [
        [
            '*                       ',
            '                        ',
            '                        ',
            '                        ',
            '                        ',
            '             =          '
        ],
    ]
//     //let's make our own sprite
//     //https://replit.com/
//     //let's add our new sprite into our game
    const levelConfig = {
        width: 20,
        height: 20,
        '=': () => [
            sprite('bean'),
        ],
        '*': () =>
        [
            sprite('playButton'), 
            area(),
            "playButton"
        ],
    }

    const levelMusic = play("example track", {
        volume: 0.1,
        loop: true
    })

    const musicUI = add([
        text('play/pause'),
        pos(30,6),
        layer('ui'),
        area(),
    ])

    onClick('playButton', () =>{
        if(levelMusic.isPaused() == false){
            levelMusic.pause()
        }
        else{
            levelMusic.play()
        }
    })

    const gameLevel = addLevel(maps[level],levelConfig)
})

go("game", {level: 0})

// //let's move over to a completed game