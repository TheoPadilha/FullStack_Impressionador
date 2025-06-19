// ==================================
// 🔹 Console.log — Saída no Console
// ==================================

console.log("Hello World"); // Exibe a mensagem no console
console.log("Bem vindo ao curso");

// ==================================
// 🔸 Declaração de Variáveis
// ==================================
// Sintaxe: tipo + nome = valor
// Tipos: var, let, const

/* 
- var   → Escopo global ou de função. 
          Permite redeclaração e sofre hoisting.
          ⚠️ Não recomendado para código moderno.

- let   → Escopo de bloco (entre chaves {}). 
          ✅ Permite reatribuição (mudar valor).
          🚫 Não permite redeclaração no mesmo escopo.

- const → Escopo de bloco.
          🚫 Não permite reatribuição nem redeclaração.
          ✅ Usado para valores fixos ou constantes.
*/

// ==================================
// 🔸 Exemplo com VAR (evite usar var)
// ==================================

var nome = "Theo";
console.log(nome); // Theo

var nome = "Mih"; // Permite redeclarar (problema no código moderno)
console.log(nome); // Mih

nome = "Vera"; // Permite reatribuição
console.log(nome); // Vera

// ==================================
// 🔸 Exemplo com LET (o mais usado)
// ==================================

let mensagem = "Olá mundo";
console.log(mensagem);

let cor = "vermelho";
console.log(cor);

// 🚫 Não podemos redeclarar com let no mesmo escopo
// let cor = "azul"; // ❌ ERRO

// ✅ Podemos reatribuir
cor = "azul";
console.log(cor); // azul

// ==================================
// 🔸 Exemplo com CONST
// ==================================

const outraMensagem = "Olá de novo";
console.log(outraMensagem);

// 🚫 Não podemos reatribuir com const
// outraMensagem = "oi"; // ❌ ERRO

// 🚫 Não podemos redeclarar com const
// const outraMensagem = "oi"; // ❌ ERRO

// 📌 Exemplo prático:
const PI = 3.14; // Valor fixo
console.log(PI);

// ==================================
// 🔸 Redeclaração com VAR
// ==================================

var msg = "Olá mundo";
console.log(msg);

var msg = "Oi"; // Permite redeclarar
console.log(msg);

msg = "Olá novamente"; // Permite reatribuir
console.log(msg);

// ==================================
// 🔸 Reatribuição com LET (válido)
// ==================================

let a = "abc";
console.log(a);

a = "cba"; // Válido — apenas muda o valor
console.log(a);

// ==================================
// 🔸 Hoisting (içamento)
// ==================================

// ✅ VAR sofre hoisting (é movido para o topo do código)
// ❌ LET e CONST não sofrem hoisting (dão erro se acessados antes da declaração)

let b;
console.log(b); // undefined (foi declarada, mas não tem valor ainda)

// ==================================
// 🔸 Escopo e Visibilidade
// ==================================

{
  console.log("Isso é um bloco");

  let idade = 22;
  const dois = 2;

  console.log(idade); // 22
  console.log(dois); // 2

  // As variáveis idade e dois só existem dentro deste bloco
}

// 🚫 Fora do bloco, essas variáveis não existem
// console.log(idade); // ❌ ERRO
// console.log(dois);  // ❌ ERRO
