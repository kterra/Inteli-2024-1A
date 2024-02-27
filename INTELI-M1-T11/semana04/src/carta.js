class Carta{
    constructor(valor, naipe, posicao){
        this.valor = valor
        this.naipe = naipe
        this.posicao = posicao
    }

    verCarta() {
       console.log('*------- CARTA -------*')
       
       console.log(this.posicao)
       
       if (this.posicao === 'Para Cima'){
        console.log(this.valor)
        console.log(this.naipe)
       }else{
        console.log('**')
        console.log('****')
       }
       
       console.log('*---------------------*')
       
    }

    virarCarta(){
        if (this.posicao === 'Para Cima'){
            this.posicao = 'Para Baixo'
        } else{
            this.posicao = 'Para Cima'
        }
    }
}


class Baralho{
    
    somarCarta(carta1, carta2){
        console.log(carta1.valor + carta2.valor)
    }
}

var carta1 = new Carta(10, 'Copas', 'Para Cima')
var carta2 = new Carta(15, 'Copas', 'Para Cima')
carta1.verCarta()
carta1.virarCarta()
carta1.verCarta()

var baralho = new Baralho()
baralho.somarCarta(carta1, carta2)