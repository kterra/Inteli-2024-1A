// Definindo a cena de boas-vindas usando a biblioteca Phaser
class Welcome extends Phaser.Scene {

    // Construtor da cena
    constructor() {
        super({
            key: 'Welcome',
            backgroundColor: '#000', // Configuração da cor de fundo da cena
        });
    }

    // Pré-carregamento de recursos
    preload() {
        this.load.html("form", "form/form.html"); // Carregando o formulário HTML
        this.load.image("play", "img/play_bt.png"); // Carregando a imagem do botão "play"
    }

    // Função chamada quando a cena é criada
    create() {
        // Configuração das teclas e variáveis da cena
        this.cursors = this.input.keyboard.createCursorKeys();
        this.returnKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        this.nameFilled = false;

        // Configuração do texto de boas-vindas
        var text = { height: 20, padding: 15, content: "Hello --" }
        this.message = this.add.text(
            this.game.config.width / 2,
            this.game.config.height / 2 - text.padding * 2 - text.height,
            text.content, {
                color: "#FFFFFF",
                fontSize: 40,
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        // Configuração do formulário de entrada de nome
        var inputSize = { width: 270, height: 42, padding: 15 };
        var inputButton = { width: 30, height: 12 };
        var inputCoords = {
            xposition: (this.game.config.width - inputSize.width) / 2 - inputButton.width,
            yposition: (this.game.config.height - inputSize.height - inputSize.padding * 2) / 2,
        };
        this.inputName = this.add.dom(inputCoords.xposition, inputCoords.yposition).createFromCache('form').setOrigin(0, 0);

        // Configuração do botão para confirmar o nome
        const nameOkTextButton = this.add.text(
            inputCoords.xposition + inputSize.width + 13,
            inputCoords.yposition + inputButton.height + 2, ">", {
                backgroundColor: "#8ecbf4",
                fontSize: 18,
                padding: 10
            }
        );
        nameOkTextButton.setInteractive();

        // Configuração de eventos para atualizar o nome
        this.returnKey.on("down", event => {
            this.updateName(this.inputName);
        });

        nameOkTextButton.on('pointerdown', () => {
            this.updateName(this.inputName);
        });

        // Configuração do botão de "play"
        this.playBt = this.add.image(this.game.config.width / 2 - 50, this.game.config.height / 4 * 3, 'play')
            .setScale(.2).setOrigin(0, 0).setInteractive().setVisible(false);

        // Configuração de evento para iniciar o jogo ao clicar no botão "play"
        this.playBt.on('pointerdown', function () {
            if (this.nameFilled) {
                this.game.highScore = 0;
                this.scene.start('FlappyDragon', this.game);
            }
        }, this);

        
    }

    // Função para atualizar o nome quando o usuário pressiona Enter ou clica no botão de confirmação
    updateName(inputNameElement) {
        let name = inputNameElement.getChildByName("name");
        if (name.value != "") {
            this.message.setText("Hello " + name.value);
            this.playBt.setVisible(true);
            this.nameFilled = true;
            this.game.name = name.value;
        }
    }
}
