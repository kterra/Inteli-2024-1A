class Produto {

    constructor(id, categoria, modelo, preco) {
        this.id = id;
        this.categoria = categoria
        this.modelo = modelo;
        this.preco = preco;
    }

    verModelo(){
        console.log('Modelo: ' + this.modelo);
    }

}

var meuTenis = new Produto(1000, 'Esportes','Nike Pegasus', 899);

meuTenis.verModelo()


