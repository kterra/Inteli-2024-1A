class Carta{
    constructor(valor, naipe, posicao){
        this.valor = valor
        this.naipe = naipe
        this.posicao = posicao
    }

    verCarta() {
        console.log('Carta: ', this.valor, this.naipe, this.posicao)
    }

    virarCarta(){
       //TO-DO
    }
 
}

var carta1 = new Carta(10, 'Copas', 'Para cima')
