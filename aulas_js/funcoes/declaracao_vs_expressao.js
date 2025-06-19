// 🎯 Declaração vs. Expressão de Função (JavaScript)

// ✅ O que são Funções?
// Funções são blocos de código que podem ser executados sempre que forem chamados.
// Elas recebem parâmetros (opcional), processam informações e podem retornar um resultado.

// 🚩 Tipos de Criação de Função no JavaScript:

// 🔹 1. Declaração de Função (Function Declaration)
// - Maneira tradicional de criar funções.
// - Usa a palavra-chave 'function' seguida do nome da função.
// - Sofre hoisting (pode ser chamada antes da linha em que foi declarada).

// Sintaxe:
function nomeDaFuncao(param1, param2) {
  // bloco de código
  return resultado;
}

// Exemplo:
function soma(n1, n2) {
  return n1 + n2;
}

let resultado = soma(6, 8);
console.log(resultado); // Saída: 14


// 🔹 2. Expressão de Função (Function Expression)
// - A função é atribuída a uma variável.
// - Pode ser uma função anônima (sem nome) ou nomeada.
// - NÃO sofre hoisting (só pode ser chamada depois de ser criada).

// Sintaxe:
const nomeDaFuncao = function(param1, param2) {
  // bloco de código
  return resultado;
};

// Exemplo:
let soma1 = function(n1, n2) {
  return n1 + n2;
};

console.log(soma1(6, 5)); // Saída: 11


// ⚠️ Diferença Principal:
// - Declaração: Pode ser chamada antes da linha onde foi escrita.
// - Expressão: Só pode ser chamada depois da linha em que foi criada.


// 🚀 Resumo Rápido:
// | Tipo                | Hoisting | Sintaxe                          | Quando Usar                         |
// |---------------------|----------|-----------------------------------|--------------------------------------|
// | Declaração          | ✔️       | function nome(){}                | Funções reutilizáveis e gerais       |
// | Expressão (anônima) | ❌       | const nome = function(){}        | Funções dentro de variáveis, callbacks|
