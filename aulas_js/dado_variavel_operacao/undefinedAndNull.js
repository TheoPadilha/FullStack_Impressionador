// ==================================================
// 🔥 UNDEFINED em JavaScript
// ==================================================

// Variável declarada, mas sem valor atribuído → undefined
let produto; // declarada, sem valor
let num = undefined; // explicitamente atribuída undefined

console.log(typeof produto); // "undefined" → tipo da variável sem valor
console.log(num); // undefined → valor da variável

// ==================================================
// 🔥 NULL em JavaScript
// ==================================================

// null é um valor especial que representa "ausência intencional de valor"
let lista = null;

console.log(lista); // null → valor explícito de vazio
console.log(typeof lista); // "object" → comportamento histórico do JS

// IMPORTANTE:
// typeof null retorna "object" por uma particularidade antiga do JavaScript
// mas null não é um objeto de verdade, é só um valor especial

// ==================================================
// 🔥 Outros tipos básicos e uso do typeof
// ==================================================

let a = "123"; // string
console.log(typeof a); // "string"

let b = 123; // number
console.log(typeof b); // "number"

let c = true; // booleano
console.log(typeof c); // "boolean"
