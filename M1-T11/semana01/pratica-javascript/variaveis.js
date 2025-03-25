console.log('Olá mundo!');


//Variáveis na prática

let gaveta_1 = 3;
let gaveta_9 = 3 + 9;

let armario = gaveta_1 + gaveta_9;
console.log(armario);

gaveta_9 = 10;
console.log(gaveta_9);

armario = gaveta_1 + gaveta_9;
console.log(armario);

console.log('-------');


// var
var x = 10;
var x = 20;  // ✅ Permitido
console.log(x); // 20

// let
let y = 30;
y = 40;  // ✅ Permitido
// let y = 50;  // ❌ Erro: já foi declarado

// const
const z = 50;
// z = 60;  // ❌ Erro: não pode ser reatribuído
// const z = 70;  // ❌ Erro: não pode ser redeclarado

if (true) {
    w = 10;  // Declarado com var (escopo de função)
    let q = 50;  // Declarado com let (escopo de bloco)
    console.log(z); // ✅ Funciona

}

console.log(w); // ✅ Funciona
var w = 0;
console.log(w); // ✅ Funciona

console.log(q); // ❌ Erro! let tem escopo de bloco e não pode ser acessado aqui