function intercalarListas(lista1, lista2) {
    let resultado = [];
    let i = 0;
    let j = 0;

    while (i < lista1.length && j < lista2.length) {
        if (lista1[i] < lista2[j]) {
            resultado.push(lista1[i]);
            i++;
        } else {
            resultado.push(lista2[j]);
            j++;
        }
    }

    // Adiciona os elementos restantes, se houver, de ambas as listas
    while (i < lista1.length) {
        resultado.push(lista1[i]);
        i++;
    }
    while (j < lista2.length) {
        resultado.push(lista2[j]);
        j++;
    }

    return resultado;
}

// Exemplo de uso:
const lista1 = [1, 3, 5, 7, 9];
const lista2 = [2, 4, 6, 8, 10];
const listaIntercalada = intercalarListas(lista1, lista2);
console.log(listaIntercalada); // Saída: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
