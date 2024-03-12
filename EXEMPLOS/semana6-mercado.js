var listaCompras = ['maça', 'fósforo', 'água', 'peito de frango', 'feijão', 'arroz']

console.log('Quarto elemento: ', listaCompras[3])

var indiceMaca = listaCompras.indexOf('maça')
listaCompras[indiceMaca] = 'pera'
console.log(listaCompras)
console.log('Lista atualizada: ', listaCompras)

listaCompras[6] = 'papel higienico' //listaCompras.push('papel higienico')
listaCompras[7] = 'suco de laranja'
console.log('Lista atualizada: ', listaCompras)


console.log('Indice do arroz: ', listaCompras.indexOf('arroz'))


listaCompras.sort(function (a, b) {
    return a.localeCompare(b);
})
console.log('Lista ordenada: ', listaCompras)

listaCompras = [];
listaCompras.length = 0;
console.log('Lista vazia: ', listaCompras)