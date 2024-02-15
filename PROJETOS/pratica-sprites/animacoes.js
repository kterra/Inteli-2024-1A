
const gameState = {
    gameHeight: 300,
    gameWidth: 400,
    boyImageScale: 1
}

var config = {
    type: Phaser.AUTO,
    width: gameState.gameWidth,
    height: gameState.gameHeight,
    backgroundColor: "#6699FF",

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);


function preload() {
    this.load.spritesheet('boy', 'assets/sprite01-2.png', { frameWidth: 68, frameHeight: 75 });
}

function create() {

    gameState.boy = this.add.sprite(gameState.gameWidth/10, gameState.gameHeight/2, 'boy').setScale(gameState.boyImageScale);
    
  /*   this.anims.create({
        key: 'walk',
        frames: this.anims.generateFrameNumbers('boy', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    boy.anims.play('walk', true); */

    gameState.cursors = this.input.keyboard.createCursorKeys();

}

function update() {
    
   /*  if (boy.x == gameWidth/10){
        boy.ida = true;
        boy.setFlip(false, false);
    }

    if (boy.x >= gameWidth/10 && boy.ida == true){
        boy.x +=3;
    }

    if (boy.x == gameWidth){
        boy.setFlip(true, false);
        boy.ida = false;
    }

    if(boy.x > gameWidth/10 && boy.ida == false){
        boy.x -= 3;
    }
 */

    if (gameState.cursors.right.isDown){
        gameState.boy.x += 5; 
     }
      
    if (gameState.cursors.left.isDown) {
        gameState.boy.x -= 5; 
    }

    if (gameState.cursors.up.isDown){
        gameState.boy.y -= 5; 
     }
      
    if (gameState.cursors.down.isDown) {
        gameState.boy.y += 5; 
    }

    if (gameState.boy.x == 0.9*gameState.gameWidth){
        gameState.boy.setFlip(true, false);
    }

    if (gameState.boy.x == gameState.gameWidth/10 -5){
        gameState.boy.setFlip(false, false);
    }
}