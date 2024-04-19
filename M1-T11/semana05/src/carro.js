class Carro{

    constructor(){
        this.velocidadeAtual = 0;
    }

    acelerar(velocidade){
        this.velocidadeAtual += velocidade;
        console.log('Carro acelerou: '+ this.velocidadeAtual)
    }

    frear(velocidade){
        this.velocidadeAtual -= velocidade;
        console.log('Carro freou: '+ this.velocidadeAtual)
    }
}

//Cria uma classe SUV que acelera mais rápido
class SUV extends Carro{

    constructor(){
        super()
    }

    acelerar(velocidade){
        this.velocidadeAtual += 2*velocidade;
        console.log('SUV acelerou: '+ this.velocidadeAtual)
    }

    parar(){
        this.velocidadeAtual = 0;
        console.log('SUV parou.')
    }
}

//Cria um novo carro, acelerar e frear ele
let carro = new Carro()
carro.acelerar(5)
carro.frear(1)
carro.frear(1)

//Criar uma nova SUV e acelera
let carroForte = new SUV()
carroForte.parar()
