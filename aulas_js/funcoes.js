// ===========================
// 📚 Funções em JavaScript
// ===========================

// 📌 Estrutura básica de uma função:

/*
function nomeFuncao(parâmetros) {
  // Instruções (o que a função faz)
}

nomeFuncao(argumentos); // Chamada da função
*/

// ✅ Exemplo básico:
function saudacao(nome) {
  console.log(`Bem-vindo ${nome}`);
}

saudacao("Theo");

// ===========================
// 🎯 Funções sem parâmetros:
function enviarMsg() {
  console.log("Para continuar, informe seu nome para cadastro!");
}
enviarMsg();

// ===========================
// 🎯 Função com vários parâmetros:
function cadastro(nome, cpf) {
  console.log(`Olá ${nome}, CPF: ${cpf}. Seja bem-vindo!`);
}

cadastro("Theo", "09711088975");

// ===========================
// 🎯 Função com cálculo:
function banco(deposito, saque) {
  let saldo = deposito - saque;
  console.log(`Seu saldo atual é: R$${saldo} reais.`);
  return saldo;
}
banco(2000, 0);

// ===========================
// 🎯 Criando uma função principal:
function main() {
  enviarMsg();
  cadastro("Theo", "09711088975");
  banco(8231, 323);
}
main();

// ===========================
// 🎯 Exemplo de função mercado:
function mercado(precoUni, quant) {
  let total = precoUni * quant;
  console.log(`O preço total ficou R$${total}`);
}

let caneta = 1.5;
let quant = 3;
mercado(caneta, quant);

// ===========================
// 🎯 Funções com objetos como argumentos:
let pedido = {
  id: 1234,
  nome: "Theo",
  email: "Theo@gmail.com",
  x_salada: 30,
  refri: 10,
};

function enviarNot(nome, email, idPedido) {
  console.log(
    `Enviando email para ${email} confirmando o pedido número ${idPedido}`
  );
  console.log(`Mensagem: ${nome}, pedido confirmado!`);
}
enviarNot(pedido.nome, pedido.email, pedido.id);

function processarPedido(id, i1, i2) {
  let totalPedido = i1 + i2;
  console.log(`Pedido: ${id} processado.`);
  console.log(`Total do pedido: R$${totalPedido}`);
  return totalPedido;
}

let retorno = processarPedido(pedido.id, pedido.x_salada, pedido.refri);
console.log(retorno);

// ===========================
// 🎯 Declaração vs Expressão de função:

// Forma 1: Declaração tradicional
function soma(n1, n2) {
  return n1 + n2;
}

let valor = soma(6, 8);
console.log(valor);

// Forma 2: Expressão de função (anônima)
let soma1 = function (n1, n2) {
  return n1 + n2;
};

console.log(soma1(6, 5));

// ===========================
// 🎯 Funções de Alta Ordem:
// Funções que recebem outras funções como parâmetro ou retornam funções

// Exemplo 1: Função recebendo outra função
function aplicarOperacao(x, operacao) {
  return operacao(x);
}

function dobrar(numero) {
  return numero * 2;
}

const resultado = aplicarOperacao(5, dobrar);
console.log(resultado); // 10

// Exemplo 2: Função retornando outra função
function criarIncrementador(incremento) {
  return function (numero) {
    return numero * incremento;
  };
}

const incrementoPor2 = criarIncrementador(2);
console.log(incrementoPor2(10)); // 20

// 📌 Anotação Importante: Console.log dentro e fora da função:

/*
Se a função só tiver um console.log dentro (e não tiver return), 
quando você der console.log(funcaox()), o resultado será:

- Primeiro: o que o console.log interno imprimir.
- Depois: undefined (porque a função não retorna nada).

Se quiser que a função retorne um valor e não só exiba direto,
use a palavra-chave 'return' dentro dela.
*/

// ===========================
// 🎯 Valores Padrão em Funções
// ===========================

// Definição:
// Permite atribuir um valor padrão para parâmetros, caso nenhum valor ou undefined seja passado.

// Exemplo:
function cumprimentar(nome = "Visitante", saudacao = "Seja bem vindo") {
  console.log(`Olá ${nome}, ${saudacao}!`);
}

cumprimentar("Theo", "Boa tarde"); // Olá Theo, Boa tarde!
cumprimentar("Maria"); // Olá Maria, Seja bem vindo!
cumprimentar(); // Olá Visitante, Seja bem vindo!

// Se quiser pular um parâmetro e usar o valor padrão, passe undefined
function exemplo(a = 1, b = 2) {
  console.log(a, b);
}
exemplo(5); // 5 2
exemplo(undefined, 7); // 1 7

// ===========================

// ESCOPO GLOBAL - LOCAL (FUNÇÃO) - BLOCO

let global = "Sou Global"; // Escopo Global

function minhaFuncao() {
  let localFuncao = "Sou Local da Função"; // Escopo Local
  console.log(global); // ✅ Acessa
  console.log(localFuncao); // ✅ Acessa
}

minhaFuncao();
console.log(global); // ✅ Acessa
// console.log(localFuncao);  // ❌ Erro

if (true) {
  let bloco = "Sou do Bloco";
  console.log(global); // ✅
  console.log(bloco); // ✅
}

console.log(global); // ✅
// console.log(bloco); // ❌ Erro

// ===========================
// ✅ Fim das anotações de Funções
// ===========================

console.log("✅ Fim do código de funções!");
