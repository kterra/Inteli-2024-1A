//Operações em Arrays

//Criar um array com tamanho diferente de zero mas sem nenhum item
var meuArray = Array(5); // array de tamanho 5
console.log("Array vazio de tamanho 5: ", meuArray)

var meuArray = [];
meuArray.length = 3;
console.log("Array vazio de tamanho 3: ", meuArray)

//Criar um array com alguns números
var meuArray = new Array(5, 3, 9, 1, 4)
var meuArray = Array(5, 3, 9, 1, 4)
var meuArray = [5, 3, 9, 1, 4]
console.log("Array inicial: ", meuArray)


//Acessar um elemento por índice
let primeiroElemento = meuArray[0]
console.log("Primeiro elemento: ", primeiroElemento)

//Alterar um elemento por índice
meuArray[1] = 6;
console.log("Array após alteração: ", meuArray)

//Concatenar arrays
let outroArray = [7, 2]
let concatenado = meuArray.concat(outroArray)
console.log("Array concatenado: ", concatenado)

//Encontrar o índice de um elemento
let indice = meuArray.indexOf(4)
console.log(`Indíce do número 4: ${indice}`)

//Verificar se um elemento existe no array
console.log("Array: ", meuArray)

var existe = meuArray.includes(3)
console.log(`O número 3 está no array? ${existe}`)

var existe = meuArray.includes(1)
console.log(`O número 1 está no array? ${existe}`)

//Filtrar elementos do array com uma função temporária
let filtrado = meuArray.filter(item => item > 3)
console.log(`Elementos maiores que 3: ${filtrado}`)
slice
//Ordenar array 'inplace' 
meuArray.sort()
console.log('Array ordenado: ', meuArray)

//Remoção com delete
delete meuArray[1]
console.log('Array removido com delete: ', meuArray)
console.log('Array length: ', meuArray.length) // delete não afeta o comprimento

meuArray[1] = 19
meuArray[7] = 21
console.log('Array com alteração e adição: ', meuArray)

//Copiar array
var meuArrayCopia = meuArray.slice(0, 5)
console.log('Array fatiado: ', meuArrayCopia)

//Limpar um array
meuArray.length = 0
console.log('Array após limpeza: ', meuArray)

//Iteração em array com for
for (var i = 0; i < meuArrayCopia.length; i++) {
  console.log(`Posição ${i}: ${meuArrayCopia[i]}`)
}

//Iteração em array com for in
for (var i in meuArrayCopia) {
  console.log(`${i}: ${meuArrayCopia[i]}`)
}

//Iteração em array com forEach
meuArrayCopia.forEach((item) => console.log('Elemento ', item))


//Une todos os elementos
var lista = meuArrayCopia.join(" - ")
console.log('Lista: ', lista)

//push() adiciona um ou mais elementos no fim de um array e retorna o comprimento resultante do array.
meuArrayCopia.push(8)
meuArrayCopia.push(5)
console.log('Array com 8 adicionado: ', meuArrayCopia)

//pop() remove o último elemento de um array e retorna esse elemento.
meuArrayCopia.pop()
console.log('Array com 5 removido: ', meuArrayCopia)
console.log('Array length: ', meuArray.length) // pop afeta o comprimento

//shift() remove o primeiro elemento de um array e retorna esse elemento
meuArrayCopia.shift()

//unshift() adiciona um ou mais elementos ao início do array e retorna o novo comprimento do array
meuArrayCopia.unshift('3')

//reverse() transpõe (inverte) os elementos de um array
meuArrayCopia.reverse()

//Arrays multidimensionais
// Cria um array multidimensional 
var table = new Array(10)
for(var i = 0; i < table.length; i++){
  table[i] = new Array(10)
}

// 10 linhas da tabuada // Cada linha tem 10 colunas
// Inicializa o array 
for(var row = 0; row < table.length; row++) {
  for(col = 0; col < table[row].length; col++) { 
    table[row][col] = row*col;
  }
}
// Usa o array multidimensional para calcular 5*7 
var product = table[5][7];	// 35


//Saiba mais: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Indexed_Collections#objeto_array