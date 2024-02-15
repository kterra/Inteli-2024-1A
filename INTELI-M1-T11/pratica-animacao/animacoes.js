
var gameState = {
    gameWidth: 800,
    gameHeight: 600
}

var config = {
    type: Phaser.AUTO,
    width: gameState.gameWidth,
    height: gameState.gameHeight,
    backgroundColor: '#120a8f',

    scene:{
        preload: preload,
        create: create,
        update: update
    }
}

var game = new Phaser.Game(config)

function preload(){
    //this.load.spritesheet('girl', 'assets/black-girl-hero-shadow.png', {frameWidth: 69, frameHeight: 92})
    this.load.spritesheet('boy', 'assets/sprite01-2.png', {frameWidth: 68, frameHeight: 75})
}

function create(){
    gameState.boy = this.add.sprite(gameState.gameWidth/8, gameState.gameHeight/6, 'boy').setScale(1.0)

     this.anims.create({
        key: 'walk',
        frames: this.anims.generateFrameNumbers('boy', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    gameState.boy.anims.play('walk', true); 

    gameState.cursors = this.input.keyboard.createCursorKeys();
}

function update(){

   
if(gameState.cursors.right.isDown){
    gameState.boy.x += 3
}

if(gameState.cursors.left.isDown){
    gameState.boy.x -= 3
}

if(gameState.cursors.up.isDown){
    gameState.boy.y -= 3
}

if(gameState.cursors.down.isDown){
    gameState.boy.y += 3
}


}