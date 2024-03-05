var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scale: {
       //mode: Phaser.Scale.NONE,
        //autoCenter: Phaser.Scale.CENTER_BOTH
    },

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;


function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    this.load.image('mar-claro', 'assets/bg_azul-claro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('peixe-laranja', 'assets/peixes/peixinho_laranja.png');
    this.load.image('peixe-azul', 'assets/peixes/peixinho_azul.png');
}

function create() {
    
    this.add.image(400, 525, 'logo').setScale(0.5);
    if (game.device.os.desktop){
        this.add.image(400, 300, 'mar');
        peixinho = this.add.image(400, 300, 'peixe-azul');
    } else if(game.device.os.android){
        peixinho = this.add.image(400, 300, 'peixe-laranja');
    }


    game.scale.on('orientationchange', function(orientation) {
        if (orientation === Phaser.Scale.PORTRAIT) {
            this.add.image(400, 300, 'mar');
        } else if (orientation === Phaser.Scale.LANDSCAPE) {
            this.add.image(400, 300, 'mar-claro');
        }
    });
    
    
    

}

function update() {

    peixinho.x = this.input.x;
    peixinho.y = this.input.y;

}