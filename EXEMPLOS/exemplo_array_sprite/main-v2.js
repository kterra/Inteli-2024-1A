class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('rick', 'assets/rick.png');
    }

    create ()
    {
        //  Our container
        const container = this.add.container(400, 300);
        
        const sprites = []
        for(var i = -400; i<= 400; i+= 200){
            for(var j = -200; j<=200; j += 200){
                if ( (i + j) % 400 == 0 ){
                    sprites.push(this.add.sprite(i, j, 'rick'))
                }
                
            }
        }

        container.add(sprites);

        this.tweens.add({
            targets: container,
            angle: { value: 360, duration: 6000 },
            scaleX: { value: 0.5, duration: 3000, yoyo: true, ease: 'Quad.easeInOut' },
            scaleY: { value: 0.5, duration: 3000, yoyo: true, ease: 'Quad.easeInOut' },
            repeat: -1
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#662d91',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
