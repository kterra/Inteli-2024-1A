class Carta{
    constructor(valor, naipe, posicao){
        this.valor = valor
        this.naipe = naipe
        this.posicao = posicao.toLowerCase() 
    }

    verCarta() {
        if(this.posicao == 'para cima'){
            console.log('Carta:  ', this.valor, this.naipe, this.posicao)
       }else{
        console.log('Carta:  ** **** ****')
       }
    }

    virarCarta(){
       if(this.posicao == 'para cima'){
            this.posicao = 'para baixo'
       }else{
        this.posicao = 'para cima'
       }
    }

    
 
}


var carta1 = new Carta(10, 'Copas', 'Para Cima')
var carta2 = new Carta(15, 'Copas', 'Para Cima')
carta1.verCarta()
carta1.virarCarta()
carta1.verCarta()
