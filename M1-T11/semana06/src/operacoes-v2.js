//Criar um array com alguns números
var meuArray = new Array(5, 3, 9, 1, 4)
var meuArray = Array(5, 3, 9, 1, 4)
var meuArray = [5, -3, -9, 1, 4]
console.log("Array inicial: ", meuArray)

//Acessar um elemento por índice
meuArray[0] = 2
console.log(`Elemento alterado: ${meuArray[0]}`)

//Concatenar arrays
let outroArray = [7, 2]
let concatenado = meuArray.concat(outroArray)
console.log("Array concatenado: ", concatenado)

//Encontrar o índice de um elemento
let indice = meuArray.indexOf(9)
console.log(`Indíce do número 9: ${indice}`)

var existe = meuArray.includes(3)
console.log(`O número 3 está no array? ${existe}`)

//Filtrar elementos do array com uma função temporária
let filtrado = meuArray.filter(gato => gato> 3)
console.log(`Elementos maiores que 3: ${filtrado}`)

var meuArray = [5, -3, -9, 1, 4]
let mapeado = meuArray.map(gato => gato>3)
console.log(`Map: ${mapeado}`)

console.log('Array: ', meuArray)
delete meuArray[1]
console.log('Array removido com delete: ', meuArray)
console.log('Array length: ', meuArray.length) // delete não afeta o comprimento

meuArray[1] = 17
meuArray.push(8)
meuArray.push(5)
console.log('Array com 8 adicionado: ', meuArray)

var meuArrayCopia = meuArray.slice()
console.log('Array fatiado: ', meuArrayCopia)

//Iteração em array com for
for (var i = 0; i < meuArray.length; i++) {
    console.log(`Posição ${i}: ${meuArray[i]}`)
  }
  
  //Iteração em array com for in
  for (var i in meuArray) {
    console.log(`${i}: ${meuArray[i]}`)
  }