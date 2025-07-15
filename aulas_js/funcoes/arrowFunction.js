const nomeDaFuncao = (parametro1, parametro2) => {
  // Corpo da função
  return resultado;
};

// const (ou let): Usado para declarar a função como uma constante, o que é uma prática comum, já que funções geralmente não são reatribuídas.

// nomeDaFuncao: O nome que você dará à sua função.

// (parametro1, parametro2): A lista de parâmetros que a função aceita, envolta em parênteses.

// =>: A "seta" que define a função.

// { ... }: O corpo da função, onde o código é executado.

// return resultado;: A palavra-chave return para retornar um valor.

// Variações da Sintaxe
// 1. Sem Parâmetros
// Se a função não recebe nenhum parâmetro, você usa parênteses vazios:

const saudacao = () => {
  console.log("Olá!");
};

saudacao(); // Saída: Olá!

// 2. Um Único Parâmetro
// Se a função recebe apenas um parâmetro, os parênteses ao redor do parâmetro são opcionais:

// Com parênteses (ainda é válido)
const dobrar = (numero) => {
  return numero * 2;
};
console.log(dobrar(5)); // Saída: 10

// Sem parênteses (mais conciso)
const triplicar = (numero) => {
  return numero * 3;
};
console.log(triplicar(5)); // Saída: 15

// 3. Retorno Implícito (Implicit Return)
// Se o corpo da função consiste apenas em uma única expressão que você deseja retornar, você pode omitir as chaves {} e a palavra-chave return. O resultado da expressão será retornado automaticamente.

// Retorno explícito
const somar = (a, b) => {
  return a + b;
};
console.log(somar(2, 3)); // Saída: 5

// Retorno implícito (mais conciso)
const subtrair = (a, b) => a - b;
console.log(subtrair(5, 2)); // Saída: 3
// Isso é muito útil para funções curtas e para o uso com métodos de array como map, filter e reduce.

const numeros = [1, 2, 3];
const quadrados = numeros.map((numero) => numero * numero);
console.log(quadrados); // Saída: [1, 4, 9]

// Por Que Usar Arrow Functions?
// Sintaxe Mais Curta: Como visto nos exemplos, elas são mais compactas, o que pode tornar o código mais legível para funções simples.

// this Léxico (Lexical this): Esta é a diferença mais importante. Em funções tradicionais, o valor de this é dinâmico e depende de como a função é chamada. Em arrow functions, this é capturado do contexto onde a função foi definida, e não de onde ela é chamada. Isso resolve muitos problemas comuns com this em JavaScript, especialmente em callbacks ou dentro de métodos de classes.

// Exemplo da diferença do this:

// Função tradicional
const pessoaTradicional = {
  nome: "João",
  saudar: function () {
    setTimeout(function () {
      console.log(`Olá, meu nome é ${this.nome}`); // 'this' é undefined ou global (Window) aqui
    }, 1000);
  },
};
pessoaTradicional.saudar(); // Saída: Olá, meu nome é undefined (ou erro em 'strict mode')

// Arrow Function
const pessoaArrow = {
  nome: "Maria",
  saudar: function () {
    setTimeout(() => {
      // Arrow function herda o 'this' de 'saudar'
      console.log(`Olá, meu nome é ${this.nome}`); // 'this' é 'pessoaArrow'
    }, 1000);
  },
};
pessoaArrow.saudar(); // Saída: Olá, meu nome é Maria
