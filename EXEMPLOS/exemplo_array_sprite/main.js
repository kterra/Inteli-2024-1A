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

        //  Create some sprites - positions are relative to the Container x/y
        const sprite0 = this.add.sprite(-400, 0, 'rick');
        const sprite1 = this.add.sprite(0, 0, 'rick');
        const sprite2 = this.add.sprite(400, 0, 'rick');
        const sprite3 = this.add.sprite(-200, -200, 'rick');
        const sprite4 = this.add.sprite(200, -200, 'rick');
        const sprite5 = this.add.sprite(200, 200, 'rick');
        const sprite6 = this.add.sprite(-200, 200, 'rick');

        container.add([sprite0, sprite1, sprite2, sprite3, sprite4, sprite5, sprite6]);

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

//Código dispoível em: https://labs.phaser.io/edit.html?src=src\game%20objects\container\add%20array%20of%20sprites%20to%20container.js
