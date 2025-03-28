var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
    }
}

var game = new Phaser.Game(config);

var peixinho, peixinho2;


function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    this.load.image('mar-claro', 'assets/bg_azul-claro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('peixe-laranja', 'assets/peixes/peixinho_laranja.png');
    this.load.image('peixe-azul', 'assets/peixes/peixinho_azul.png');
    this.load.image('peixe-rosa', 'assets/peixes/peixinho_rosa.png');
}

function create() {
    
    this.add.image(400, 525, 'logo').setScale(0.5);

    //verifica orientação do dispositivo
    if(game.scale.orientation === Phaser.Scale.LANDSCAPE){
        this.add.image(400, 300, 'mar');
    } else if(game.scale.orientation === Phaser.Scale.PORTRAIT){
        this.add.image(400, 300, 'mar-claro');
    }
    
    
    //verifica tipo de dispositivo
    if (game.device.os.desktop){
        peixinho = this.add.image(400, 300, 'peixe-azul');
    } else{
        
        peixinho = this.add.image(400, 300, 'peixe-laranja');
    }

    //evento de mudança de orientação
    game.scale.on('orientationchange', function(orientation) {
        if (orientation === Phaser.Scale.PORTRAIT) {
            console.log('PORTRAIT')
        }  
        if (orientation === Phaser.Scale.LANDSCAPE) {
            console.log('LANDSCAPE')
        } 
    });


}

function update() {

    //peixinho.x = this.input.x;
    //peixinho.y = this.input.y;

 

}

