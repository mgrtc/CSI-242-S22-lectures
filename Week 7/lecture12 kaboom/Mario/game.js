kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0, 0, 0, 1],
})
    //movement variables for player
    const MOVE_SPEED = 120;
    const JUMP_FORCE = 360;
    const BIG_JUMP_FORCE = 550;
    let CURRENT_JUMP_FORCE = JUMP_FORCE;
    let isJumping = true;
    const FALL_DEATH = 400;

loadSprite('coin','Sprites/coin.png')
loadSprite('goomba', 'Sprites/goomba1.png')
loadSprite('brick', 'Sprites/coin.png')
loadSprite('block', 'Sprites/block5.png')
loadSprite('mario', 'Sprites/mario.png')
loadSprite('mushroom', 'Sprites/mushroom.png')
loadSprite('itemBlock', 'Sprites/itemBlock.png')
loadSprite('usedItemBlock', 'Sprites/usedItemBlock.png')
loadSprite('pipe-top-left', 'Sprites/pipe5.png')
loadSprite('pipe-top-right', 'Sprites/pipe4.png')
loadSprite('pipe-bottom-left', 'Sprites/pipe2.png')
loadSprite('pipe-bottom-right', 'Sprites/pipe3.png')

loadSprite('blue-block','Sprites/block4.png')
loadSprite('blue-brick', 'Sprites/block2.png')
loadSprite('blue-steel', 'Sprites/block3.png')
loadSprite('blue-goomba', 'Sprites/goomba3.png')
loadSprite('blue-itemBlock', 'Sprites/itemBlock2.png')

scene("game", ({ level, score }) =>{
    layers(['bg', 'obj', 'ui'], 'obj')
    const maps = [
        [        
            '                                 ',
            '                                 ',
            '                                 ',
            '    %    =*=%=                   ',
            '                                 ',
            '                              -+ ',
            '                      ^  ^    () ',
            '=========================== =====',
        ],
        [
            '&                                 &',
            '&                                 &',
            '&                                 &',
            '&     @@@@@              xx       &',
            '&                     xxx         &',
            '&                    xxxx   x   -+&',
            '&         z    z    xxxxx   x   ()&',
            '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        ]

    ]

    const levelConfig = {
        width: 20,
        height: 20,
        '=': [sprite('block'), solid()],
        '$': [sprite('coin'), 'coin'],
        '%': [sprite('itemBlock'),solid(),'coin-block'],
        '*': [sprite('itemBlock'),solid(),'mushroom-block'],
        '}': [sprite('usedItemBlock'), solid()],
        '(': [sprite('pipe-bottom-left'), solid(), scale(0.5)],
        ')': [sprite('pipe-bottom-right'), solid(), scale(0.5)],
        '-': [sprite('pipe-top-left'), solid(), scale(0.5), 'pipe'],
        '+': [sprite('pipe-top-right'), solid(), scale(0.5), 'pipe'],
        '^': [sprite('goomba'), solid(), 'dangerous'],
        '#': [sprite('mushroom'), solid(), 'mushroom', body()],
        '!': [sprite('blue-block'), solid(), scale(0.5)],
        '&': [sprite('blue-brick'), solid(), scale(0.5)],
        'z': [sprite('blue-goomba'), solid(), scale(0.5), 'dangerous'],
        '@': [sprite('blue-itemBlock'), solid(), scale(0.5), 'coin-block'],
        'x': [sprite('blue-steel'), solid(), scale(0.5)],
    }

    const gameLevel = addLevel(maps[level],levelConfig)

    //adding a score label/ui element
    const scoreLabel = add([
        text(score),
        pos(30,6),
        layer('ui'),
        {
            value: score,
        }
    ])

    add([text('level ' + parseInt(level + 1)), pos(40,6)])

    function big() {
        let timer = 0;
        let isBig = false;
        return{
            update() {
                if(isBig) {
                    timer -= dt()
                    if(timer <= 0) {
                        this.smallify();
                    }
                }
            },
            isBig() {
                return isBig;
            },
            smallify() {
                this.scale = vec2(1);
                CURRENT_JUMP_FORCE = JUMP_FORCE;
                timer = 0;
                isBig = false;
            },
            biggify(time) {
                this.scale = vec2(2);
                CURRENT_JUMP_FORCE = BIG_JUMP_FORCE;
                timer = time;
                isBig = true;
            }
        }
    }

    //player
    const player = add([ 
        sprite('mario'), solid(), 
        pos(30,0), 
        body(),
        big(),
        origin('bot')
    ])

    action('mushroom', (m) => {
        m.move(100,0)
    })

    //object interactions
    player.on("headbump", (obj) => {
        if(obj.is('coin-block')) {
            gameLevel.spawn('$', obj.gridPos.sub(0,1))
            destroy(obj)
            gameLevel.spawn('}', obj.gridPos.sub(0,0))
        }
        if(obj.is('mushroom-block')) {
            gameLevel.spawn('#', obj.gridPos.sub(0,1))
            destroy(obj)
            gameLevel.spawn('}', obj.gridPos.sub(0,0))
        }
    })


    player.collides('mushroom', (m) =>{
        destroy(m)
        player.biggify(6)
    })

    player.collides('coin', (c) =>{
        destroy(c)
        scoreLabel.value++
        scoreLabel.text = scoreLabel.value
    })

    //adding in enemy interaction
    player.collides('dangerous', (d) => {
        if(isJumping) {
            destroy(d)
        } else{
            go('lose', {score: scoreLabel.value})
        }
    })

    const ENEMY_SPEED = 20

    action('dangerous', (d) =>{
        d.move(-ENEMY_SPEED,0)
    })

    player.action(() =>{
        camPos(player.pos) //camera postition
        if(player.pos.y >= FALL_DEATH){
            go('lose', {score: scoreLabel.value})
        }
    })

    player.collides('pipe', () =>{
        keyPress('down', () =>{
            go('game', {
                level: (level + 1) % maps.length,
                score: scoreLabel.value
            })
        })
    })

    //adding keyboard functions
    keyDown('left', () => {
        player.move(-MOVE_SPEED,0);
    })

    keyDown('right', () => {
        player.move(MOVE_SPEED,0);
    })

    player.action( () =>{
        if(player.grounded()){
            isJumping = false;
        }
    })
    
    keyPress('space', () => {
        if(player.grounded()){
            isJumping = true;
            player.jump(CURRENT_JUMP_FORCE); 
        }
    })

})

//making a game over screen
scene('lose', ({ score }) =>{
    add([text(score, 32), origin('center'), pos(width()/2, height()/2)])
})

start("game", { level: 0 , score: 0 })