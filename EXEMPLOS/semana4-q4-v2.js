class Produto {

    constructor(id, categoria, modelo, preco) {
        this.id = id;
        this.categoria = categoria
        this.modelo = modelo;
        this.preco = preco;
    }

    verProduto(){
        console.log('========== PRODUTO ========');
        console.log('Id: ' + this.id);
        console.log('Categoria: ' + this.categoria);
        console.log('Modelo: ' + this.modelo);
        console.log('Preço: ' + this.preco);
    }

    verModelo(){
        console.log('Modelo: ' + this.modelo);
    }

    adicionar(){
        //TO-DO: adiconar produto do banco de dados
        console.log('Produto adicionado.')
    }

    excluir(){
        //TO-DO: remover produto do banco de dados
        console.log('Produto excliído.')
    }
}

var meuTenis = new Produto(1000, 'Esportes','Nike Pegasus', 899);
meuTenis.verProduto()

var tenisRenan = new Produto(1001, 'Esportes','Adidas', 1200);
tenisRenan.verProduto()
