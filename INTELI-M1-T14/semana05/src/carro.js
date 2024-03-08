class Carro{

    constructor(modelo, ano){
        this.modelo = modelo
        this.ano = ano
        this.velocidadeAtual = 0
    }

    acelerar(velocidade){
        this.velocidadeAtual += velocidade
        console.log('Carro acelerou: '+ this.velocidadeAtual)
    }

    frear(velocidade){
        this.velocidadeAtual -= velocidade
        console.log('Carro freou: '+ this.velocidadeAtual)
    }
}

//Cria uma classe SUV que acelera mais rápido
class SUV extends Carro{

    constructor(modelo, ano, cor){
        super(modelo, ano)
        this.cor = cor
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
let carro = new Carro('', 2020)
carro.acelerar(5)
carro.frear(1)
carro.frear(1)

//Criar uma nova SUV e acelera
let carroForte = new SUV('X1', 2023, 'preto')
carroForte.acelerar(5)
carroForte.parar()
