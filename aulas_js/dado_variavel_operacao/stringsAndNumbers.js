// ==================================================
// 🔥 TIPOS DE STRING EM JAVASCRIPT
// ==================================================

// Duas formas principais de representar texto (string):
// 1) Aspas duplas: "Um texto"
// 2) Aspas simples: 'Um texto'

// 3) Template string (template literals) → usa crase ``
// Permite inserir variáveis dentro da string usando ${variavel}
let msg = "ola,"; // string com aspas duplas
let nome = "Theo"; // string com aspas simples
let msg3 = "Seja Bem vindo";

// Template string com variáveis interpoladas
let msg2 = `ola ${nome} ${msg3}`; // 'ola Theo Seja Bem vindo'

console.log(msg2);

// Concatenando strings com +
console.log(msg + nome + ", Qual a sua idade");

// ==================================================
// 🔸 Índice em strings
// Cada caractere da string tem um índice começando do 0
console.log(nome[0]); // 'T' → primeira letra da string 'Theo'

// ==================================================
// 🔥 NÚMEROS EM JAVASCRIPT
// ==================================================

// Valores numéricos podem ser inteiros ou decimais
let num = 27; // número inteiro positivo
let num1 = -50; // número inteiro negativo
let decimal = 7.2; // número decimal (float)

// ==================================================
// 🔸 Valores Especiais
console.log(Infinity); // representa infinito (ex: 1/0)
console.log(-Infinity); // infinito negativo (ex: -1/0)
console.log(NaN); // "Not a Number" → resultado inválido em operações matemáticas

// Exemplo:
console.log("Divisão por zero:", 10 / 0); // Infinity
console.log("Raiz quadrada de -1:", Math.sqrt(-1)); // NaN
