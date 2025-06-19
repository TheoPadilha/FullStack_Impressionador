// ========================================================
// TIPOS PRIMITIVOS X TIPOS DE REFERÊNCIA EM JAVASCRIPT
// ========================================================

// =======================
// ARRAYS - TIPOS DE REFERÊNCIA
// =======================

let listaA = [1, 2, 3];

// Aqui, listaB NÃO é uma cópia independente de listaA.
// listaB está apenas apontando para o mesmo espaço na memória que listaA.
let listaB = listaA;

// Alterando listaB, automaticamente altera listaA, pois os dois são referências do mesmo array.
listaB[0] = 99;

console.log(listaB); // [99, 2, 3]
console.log(listaA); // [99, 2, 3]  <-- foi alterado também

// =======================
// STRINGS - TIPOS PRIMITIVOS (COPIA DE VALOR)
// =======================

// No caso de tipos primitivos (string, number, boolean, null, undefined, symbol),
// eles são copiados por VALOR, e não por referência.

let string = "ola";
let msg = string;

// Aqui msg recebe uma CÓPIA do valor de string.
// Alterar msg não afeta string.
msg = "Ola Bem vindo";

console.log(string); // "ola" <-- não foi alterada
console.log(msg);    // "Ola Bem vindo"

// =======================
// OBJETOS - TIPOS DE REFERÊNCIA
// =======================

let objA = { nome: "Theo" };
let objB = objA;

// Aqui objB aponta para o MESMO objeto na memória que objA.
// Alterar qualquer um dos dois reflete no outro.
objB.idade = 19;

console.log(objA); // { nome: 'Theo', idade: 19 }
console.log(objB); // { nome: 'Theo', idade: 19 }

// =======================
// CÓPIA INDEPENDENTE DE ARRAY (Spread ...)
// =======================

let listaC = [...listaA]; // Cria uma cópia real, independente de listaA

console.log(listaC); // [99, 2, 3]

// Alterando listaC NÃO afeta listaA
listaC.push("chá");

console.log(listaC); // [99, 2, 3, 'chá']
console.log(listaA); // [99, 2, 3] <-- não foi alterada

// =======================
// CÓPIA INDEPENDENTE DE OBJETO (Spread ...)
// =======================

let objC = { ...objA }; // Cria uma cópia independente do objeto objA

// Adicionando uma nova propriedade em objC
objC.corOlhos = "castanho";

console.log(objA); // { nome: 'Theo', idade: 19 } <-- não tem 'corOlhos'
console.log(objC); // { nome: 'Theo', idade: 19, corOlhos: 'castanho' }

// ========================================================
// RESUMO IMPORTANTE:
// ========================================================
// - Tipos PRIMITIVOS (string, number, boolean, etc) são copiados por VALOR.
// - Objetos e Arrays são copiados por REFERÊNCIA. Ou seja, ambos apontam para o mesmo local na memória.
// - Para criar cópias independentes de objetos ou arrays, usamos o operador SPREAD (...).
