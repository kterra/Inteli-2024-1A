class Carta{
    constructor(valor, posicao){
        this.valor = valor
        this.posicao = posicao
    }

    verCarta() {
        console.log('Carta: ', this.valor, this.posicao) 
    }

    virarCarta(){
        if (this.posicao === 'Para Cima'){
            this.posicao = 'Para Baixo'
        } else{
            this.posicao = 'Para Cima'
        }
    }
}


class CartaBaralho extends Carta{
    static naipes = ['♣ - Paus', '♠ - Espadas', '♥ - Copas', ' ♦ - Ouros'];
    constructor(codigoNaipe, valor, posicao){
        super(valor, posicao);
        this.naipe = CartaBaralho.naipes[codigoNaipe];
    }

    verCarta() {
        console.log('\n|--- CARTA BARALHO ---|')
       
        
        if (this.posicao === 'Para Cima'){
         console.log('\t',this.valor, this.naipe)
        }else{
         console.log('\t** * - ******')
        }
        
        console.log('|_____________________|')
    }
       
}

class CartaUNO extends Carta{
    static cores = ['Vermelha', 'Amarela', 'Verde', 'Azul', 'Todas'];

    constructor(codigoCor, valor, posicao){
        super(valor, posicao);
       this.cor = CartaUNO.cores[codigoCor];
    }

    verCarta() {
        console.log('\n|---- CARTA UNO ----|')

        
        if (this.posicao === 'Para Cima'){
            console.log('\t', this.valor, '-', this.cor)
         
        }else{
            console.log('\t** - ********')
        }
        
        console.log('|___________________|')
    }
 
 }

 var cartaUNO1= new CartaUNO(0, 2, 'Para Cima')
 cartaUNO1.verCarta()

 var cartaBaralho1= new CartaBaralho(0, 10, 'Para Cima')
 cartaBaralho1.verCarta()