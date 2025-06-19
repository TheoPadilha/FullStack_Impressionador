// ===========================
// 📚 Funções em JavaScript - Anotações Completa
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
// Funções que executam um bloco de código sem receber dados.
function enviarMsg() {
  console.log("Para continuar, informe seu nome para cadastro!");
}
enviarMsg();

// ===========================
// 🎯 Função com vários parâmetros:
// Recebe múltiplos dados para processar.
function cadastro(nome, cpf) {
  console.log(`Olá ${nome}, CPF: ${cpf}. Seja bem-vindo!`);
}

cadastro("Theo", "09711088975");

// ===========================
// 🎯 Função com cálculo:
// Função que recebe valores, faz cálculo e retorna resultado.
function banco(deposito, saque) {
  let saldo = deposito - saque;
  console.log(`Seu saldo atual é: R$${saldo} reais.`);
  return saldo;
}
banco(2000, 0);

// ===========================
// 🎯 Criando uma função principal:
// Função que chama outras funções para organizar o código.
function main() {
  enviarMsg();
  cadastro("Theo", "09711088975");
  banco(8231, 323);
}
main();

// ===========================
// 🎯 Exemplo de função mercado:
// Calcula total de um produto pelo preço e quantidade.
function mercado(precoUni, quant) {
  let total = precoUni * quant;
  console.log(`O preço total ficou R$${total}`);
}

let caneta = 1.5;
let quant = 3;
mercado(caneta, quant);

// ===========================
// 📌 Anotação Importante: console.log dentro e fora da função:
/*
- Se a função só tem console.log e não tem return,
  quando você chama console.log(funcao()),
  primeiro é mostrado o console.log interno,
  depois aparece 'undefined' (porque a função não retornou valor).

- Para retornar um valor da função, use 'return'.
  Assim você pode usar o resultado para outras operações.
*/

// ===========================
// 📝 Dicas extras importantes:
// 1. Funções SEMPRE retornam algo, mesmo que implicitamente seja 'undefined'.
// 2. Use return para enviar dados da função para o local onde ela foi chamada.
// 3. Você pode passar funções como parâmetro (funções de alta ordem).
// 4. Funções podem ter parâmetros padrão (default).
// 5. Funções podem ser declaradas de várias formas: declarações, expressões, arrow functions.

// ===========================
// ✅ Fim das anotações de Funções
// ===========================

console.log("✅ Fim do código de funções!");
