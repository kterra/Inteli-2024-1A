class Produto {
    loja = 'Americanas'
    constructor(id, categoria, modelo, preco, loja) {
        this.id = id;
        this.categoria = categoria
        this.modelo = modelo;
        this.preco = preco;
        this.loja = loja;
    }

    verModelo(){
        //método
        console.log('Modelo: ' + this.modelo);
    }

 


}


var meuTenis = new Produto(1000, 'Esportes','Nike Pegasus', 899, 'Renner');
//meuTenis.verModelo()
console.log(meuTenis.modelo)
console.log(meuTenis.loja)

var meuTenis2 = new Produto(1000, 'Esportes','Adidas', 899, 'Centauro');
meuTenis2.verModelo()
console.log(meuTenis2.modelo)
console.log(meuTenis2.loja)

