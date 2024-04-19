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

var carta10_paus = new Carta(10, 'Paus', 'Para Cima')
carta10_paus.verCarta()
carta10_paus.virarCarta()
carta10_paus.verCarta()

console.log(carta10_paus.valor)