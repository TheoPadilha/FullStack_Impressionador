// ============================
// 📌 HOISTING (Elevação)
// ============================

// 🔸 O que é?
// Hoisting é um comportamento do JavaScript onde as declarações 
// de variáveis e funções são "elevadas" para o topo do código 
// durante a execução. MAS... só a declaração, não o valor.

// ============================
// 🔹 Hoisting com FUNÇÕES
// ============================

// Funções declaradas são elevadas e podem ser chamadas antes de serem declaradas.

teste(); // Funciona
function teste() {
  console.log("Função chamada!");
}

// ============================
// 🔸 Hoisting com VAR
// ============================

// 'var' é elevado, mas seu valor fica como undefined até a linha onde recebe um valor.

console.log(nome); // undefined
var nome = "Theo";
console.log(nome); // Theo

// O JS entende assim:
var nome;
console.log(nome); // undefined
nome = "Theo";

// ============================
// 🚫 Hoisting com LET e CONST
// ============================

// São elevadas, MAS NÃO são inicializadas. 
// Tentativa de acesso antes da declaração gera erro (ReferenceError).

console.log(sobrenome); // ❌ ReferenceError
let sobrenome = "Padilha";

console.log(idade); // ❌ ReferenceError
const idade = 19;

// ============================
// 📌 RESUMO
// ============================

// FUNÇÃO DECLARADA:
// ✅ Sofre hoisting
// ✅ Pode ser chamada antes

// VAR:
// ✅ Sofre hoisting
// ⚠️ Pode ser acessada antes, mas como 'undefined'

// LET e CONST:
// ✅ Sofrem hoisting (mas ficam na "zona morta")
// ❌ NÃO podem ser acessadas antes da declaração (ReferenceError)

// ============================
// 🏁 Fim da anotação sobre Hoisting!
// ============================
