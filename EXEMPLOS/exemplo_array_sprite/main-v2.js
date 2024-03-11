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
            if (Math.abs(i) == 200){
                sprites.push(this.add.sprite(i, 200, 'rick'))   
            }
            if ( i % 400 == 0){
                sprites.push(this.add.sprite(i, 0, 'rick'))
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

//Referencia: https://labs.phaser.io/edit.html?src=src\game%20objects\container\add%20array%20of%20sprites%20to%20container.js
