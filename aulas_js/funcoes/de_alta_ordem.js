// 🎯 Funções de Alta Ordem (High Order Functions)

// ✅ O que são?
// São funções que:
// 🔸 Recebem uma ou mais funções como parâmetro
// 🔸 E/ou retornam uma função como resultado

// 📌 Elas são muito usadas em JavaScript, especialmente em métodos como map, filter, reduce,
// além de facilitar a criação de códigos mais reutilizáveis e funcionais.

// 🚩 Exemplo 1: Função recebendo outra função como parâmetro

function aplicarOperacao(x, operacao) {
  return operacao(x); // Executa a função passada no parâmetro 'operacao' com o valor 'x'
}

function dobrar(numero) {
  return numero * 2;
}

// Chamando a função de alta ordem:
const resultado = aplicarOperacao(5, dobrar);
console.log(resultado); // Saída: 10

// 🚩 Exemplo 2: Função que retorna outra função

function criarIncrementador(incremento) {
  // Retorna uma função que multiplica o número pelo incremento
  return function (numero) {
    return numero * incremento;
  };
}

// Criando uma função específica que multiplica por 2
const incrementoPor2 = criarIncrementador(2);

console.log(incrementoPor2(10)); // Saída: 20

// 🔥 Poderíamos criar outro incrementador
const incrementoPor5 = criarIncrementador(5);
console.log(incrementoPor5(10)); // Saída: 50

// ✅ 🚀 Por que usar Funções de Alta Ordem?
// - Torna o código mais flexível e reutilizável
// - É a base para programação funcional
// - Usado em muitos métodos nativos do JS, como map, filter, reduce

// 🧠 Exemplo prático rápido com array:
const numeros = [1, 2, 3, 4, 5];

const dobrados = numeros.map(function (n) {
  return n * 2;
});

console.log(dobrados); // Saída: [2, 4, 6, 8, 10]

// Aqui 'map' é uma função de alta ordem, pois recebe uma função como argumento.
