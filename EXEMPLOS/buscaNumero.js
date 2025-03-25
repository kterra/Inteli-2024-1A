function buscaNumero(listaNumeros, numero){
    for (i = 0; i< listaNumeros.length; i++){
        if(listaNumeros[i] == numero){
            return `Número ${numero} encontrado na posição ${i}`
    
    }
    return `Número ${numero} não encontrado`
}

minhaLista = [0,4,5,6,9,10]
console.log(buscaNumero(minhaLista, 11))