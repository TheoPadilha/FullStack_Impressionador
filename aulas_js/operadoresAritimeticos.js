// ==================================================
// 🔥 OPERADORES ARITMÉTICOS EM JAVASCRIPT
// ==================================================

// ==================================================
// 🔸 Adição ➕
let valor = 10;
let segundoValor = 20;

console.log(valor + segundoValor); // 30 → Soma de dois números

let msg = "12";
console.log(msg + valor); // "1210" → Quando há string, faz CONCATENAÇÃO

// ==================================================
// 🔸 Subtração ➖
console.log(valor - segundoValor); // -10
console.log(segundoValor - valor); // 10

// ==================================================
// 🔸 Divisão ➗
console.log(valor / segundoValor); // 0.5
console.log(segundoValor / valor); // 2

// ==================================================
// 🔸 Módulo (Resto da divisão) ➗➗
console.log(valor % segundoValor); // 10 → 10 não cabe nenhuma vez dentro de 20, sobra 10
console.log(segundoValor % valor); // 0  → 20 dividido por 10 não tem sobra

// ==================================================
// 🔥 OPERADORES ARITMÉTICOS AVANÇADOS
// ==================================================

// 🔹 Exponenciação → Potência (base elevado ao expoente)
let base = 2;
let expoente = 5;
let resultado = base ** expoente;

console.log(resultado); // 32 → 2 elevado a 5

// ==================================================
// 🔹 Incremento (++) e Decremento (--)
// ==================================================

// ➕ Incremento (++): Adiciona 1
// ➖ Decremento (--): Subtrai 1

let controle = 0;

// Incremento depois de exibir (Pós-incremento)
console.log(controle++); // Mostra 0, depois soma +1

// Agora controle vale 1
console.log(controle); // 1

// Incremento antes de exibir (Pré-incremento)
console.log(++controle); // Soma +1 antes de exibir → Mostra 2

// ==================================================
// 🔥 Exemplo prático usando Incremento em um loop
for (let i = 1; i <= 10; ++i) {
  console.log(i); // Conta de 1 até 10
}

/*
📌 Obs:
- ++i (pré-incremento): incrementa antes de usar o valor
- i++ (pós-incremento): usa o valor, depois incrementa

No for, tanto faz ++i ou i++, pois a ordem de incremento acontece no final de cada ciclo.
*/
