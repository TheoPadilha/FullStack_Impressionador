// ===========================
// 🏁 INÍCIO DAS ANOTAÇÕES DE JAVASCRIPT
// ===========================

// ===========================
// 📤 Console
// ===========================

console.log("Hello World"); // Exibir algo no console
console.log("Bem-vindo ao curso");

// ===========================
// 🔑 Declaração de Variáveis
// ===========================

// var → escopo global ou de função (evite usar)
// let → escopo de bloco, pode ser alterada
// const → escopo de bloco, NÃO pode ser alterada depois de declarada

// 🔸 VAR
var nome = "Theo";
console.log(nome);

var nome = "Mih"; // Permite redeclarar
console.log(nome);

nome = "Vera"; // Pode reatribuir
console.log(nome);

// 🔸 LET
let cor = "vermelho";
console.log(cor);

// let cor = "azul"; ❌ NÃO pode redeclarar
cor = "azul"; // ✅ Pode reatribuir
console.log(cor);

// 🔸 CONST
const outraMensagem = "Olá";
console.log(outraMensagem);

// outraMensagem = "oi"; ❌ NÃO pode reatribuir

// ===========================
// ⛓️ Hoisting (içamento)
// ===========================

// Só funciona com var
console.log(a); // undefined (var é içada)
var a = 5;

// let e const não sofrem hoisting visível
// console.log(b); ❌ ERRO
let b = 10;

// ===========================
// 🔒 Escopo de bloco
// ===========================
{
  let idade = 22;
  const dois = 2;
  console.log(idade);
  console.log(dois);
}
// console.log(idade); ❌ Não acessível fora do bloco

// ===========================
// 🎯 Tipos de Dados
// ===========================

// Boolean
let ligado = true;
let desligado = false;

console.log(true == 1); // true
console.log(false == 0); // true

let nomeUser = "Paulo";
console.log(Boolean(nomeUser)); // true (não vazio)

let numZero = 0;
console.log(Boolean(numZero)); // false (zero é false)

// ===========================
// 🔁 Coerção de Tipos
// ===========================

// Coerção implícita
console.log(5 + "5"); // "55"
console.log("10" - 5); // 5
console.log("3" * "5"); // 15

// Coerção explícita
let num = 123;
console.log(typeof num); // number
num = String(num);
console.log(typeof num); // string

let num2 = 50;
console.log(num2.toString()); // "50"

let string = "mensagem";
let num3 = 0;
console.log(Boolean(num3)); // false
console.log(Boolean(string)); // true

let stringnum = "2563";
console.log(Number(stringnum)); // 2563
console.log(Number(string)); // NaN

let booleano = true;
console.log(String(booleano)); // "true"

// ===========================
// ➕ Operadores Aritméticos
// ===========================

let valor = 10;
let segundoValor = 20;
console.log(valor + segundoValor); // 30

let msg = "12";
console.log(msg + valor); // "1210" (concatenação)

console.log(valor - segundoValor); // -10
console.log(valor / segundoValor); // 0.5
console.log(valor % segundoValor); // 10

// Exponenciação
let base = 2;
let expoente = 5;
console.log(base ** expoente); // 32

// Incremento e Decremento
let controle = 0;
console.log(controle++); // 0
console.log(controle); // 1
console.log(++controle); // 2

// ===========================
// 🔍 Operadores de Comparação
// ===========================

console.log(5 == "5"); // true (compara só valor)
console.log(5 === "5"); // false (compara valor e tipo)

console.log(5 != "5"); // false
console.log(5 !== "5"); // true

console.log(10 < 20); // true
console.log(10 <= 20); // true
console.log(10 >= 10); // true

// Exemplo prático:
let senha = 123;
let senhaDigitada = 321;
let comparacao = senha === senhaDigitada;
console.log("Aqui é a senha: " + comparacao); // false

// ===========================
// 🔗 Operadores Lógicos
// ===========================

// && (AND) → ambos precisam ser verdadeiros
let idade = 20;
let codigo = true;
console.log(idade >= 18 && codigo); // true

let idade2 = 15;
console.log(idade2 >= 18 && codigo); // false

// || (OR) → um ou outro verdadeiro
console.log(idade >= 18 || codigo); // true
console.log(idade2 >= 18 || codigo); // true

// ! (NOT) → inverte
let perfil = false;
let alerta = !perfil;
console.log(alerta); // true

// Exemplo prático:
let id = 18;
let carteira = false;

if (id < 18 || carteira == false) {
  console.log("Receberá multa, pois não poderia estar dirigindo");
} else {
  console.log("Está liberado!");
}

// ===========================
// 🔤 String
// ===========================

let msg2 = `Olá ${nome} Seja Bem vindo!`;
console.log(msg2);
console.log(msg + nome + ", qual sua idade?");
console.log(nome[0]); // Mostra a primeira letra

// ===========================
// 🔢 Number
// ===========================
let decimal = 7.2;
let infinito = Infinity;
let invalido = NaN;

// ===========================
// ❓ Undefined e Null
// ===========================
let produto;
console.log(produto); // undefined

let lista = null;
console.log(lista); // null

// ===========================
// 🧠 Tipos - Verificando
// ===========================
console.log(typeof "123"); // string
console.log(typeof 123); // number
console.log(typeof true); // boolean
console.log(typeof null); // object (BUG do JS)
console.log(typeof undefined); // undefined

// ===========================
// 🚗 Objetos
// ===========================
let carro = {
  marca: "Ferrari",
  modelo: "F40",
  ano: 2025,
  cor: "Vermelho",
  preco: 1630000,
  acessorios: ["turbina", "aero fólios"],
};

console.log(carro.marca);
console.log(carro["cor"]);

carro.preco = 2000000;
carro.estado = "Novo de fábrica";

let livro = {
  titulo: "O segredo da mente milionária",
  autor: "Theo",
  ano: 2020,
  genero: "Finanças",
};

livro.paginas = 120;
livro["idioma"] = "Português";
delete livro.idioma;

console.log("autor" in livro); // true
console.log("idioma" in livro); // false

// ===========================
// 🔀 Referência vs Cópia
// ===========================

// Tipos primitivos → Cópia por valor
let stringA = "ola";
let stringB = stringA;
stringB = "Olá bem vindo";

console.log(stringA); // "ola"
console.log(stringB); // "Olá bem vindo"

// Arrays e Objetos → Cópia por referência
let listaA = [1, 2, 3];
let listaB = listaA;
listaB[0] = 99;

console.log(listaA); // [99, 2, 3]
console.log(listaB); // [99, 2, 3]

// Cópia independente → Spread (...)
let listaC = [...listaA];
listaC.push("chá");
console.log(listaC);
console.log(listaA);

let objA = { nome: "Theo" };
let objB = objA;
objB.idade = 19;

console.log(objA); // { nome: "Theo", idade: 19 }
console.log(objB);

let objC = { ...objA };
objC.corOlhos = "castanho";

console.log(objA);
console.log(objC);

// ===========================
// 📚 Arrays
// ===========================

let array = ["banana", 23, true, "Theo"];
console.log(array[3]); // Theo

lista = ["banana", "uva", "chocolate"];
lista[0] = "bala";
lista[3] = "perfume";

console.log(lista.length); // 4

let frutas = ["banana", "maçã", "uva", "laranja"];
let indice = frutas.indexOf("uva");
console.log(frutas[indice]); // uva

// Métodos importantes
lista.push("caneta"); // adiciona no fim
lista.pop(); // remove último
lista.unshift("café"); // adiciona no começo
lista.shift(); // remove primeiro

console.log(lista.includes("uva")); // true
console.log(lista.indexOf("chocolate")); // 2
console.log(lista.lastIndexOf("bala")); // índice do último 'bala'

// 🔥 Slice e Splice
let itens = ["banana", "maçã", "uva", "laranja"];
let parte = itens.slice(1, 3); // ['maçã', 'uva']
console.log(parte);

let numeros = [1, 2, 3, 4, 5];
numeros.splice(2, 2); // remove dois a partir do índice 2
console.log(numeros); // [1, 2, 5]

// 🔥 Join, Reverse, Sort
let letras = ["a", "b", "c"];
console.log(letras.join(" - ")); // "a - b - c"

letras.reverse();
console.log(letras); // ['c', 'b', 'a']

let nums = [10, 5, 100, 50];
nums.sort((a, b) => a - b); // [5, 10, 50, 100]

// ===========================
// 🔁 Laços com Arrays
// ===========================
for (let i = 0; i < lista.length; i++) {
  console.log(`Item na posição ${i}: ${lista[i]}`);
}

for (let item of lista) {
  console.log(`Item: ${item}`);
}

lista.forEach((item, indice) => {
  console.log(`Índice ${indice}: ${item}`);
});

// ===========================
// 📐 Matrizes (Arrays dentro de Arrays)
// ===========================

let matrizVendas = [
  [80, 500, 70],
  [400, 200, 60],
  [105, 80, 30],
];

console.log(matrizVendas[1][2]); // 60

// Soma das linhas
for (let i = 0; i < matrizVendas.length; i++) {
  let somaLinha = matrizVendas[i][0] + matrizVendas[i][1] + matrizVendas[i][2];
  console.log(`Soma da linha ${i + 1}: ${somaLinha}`);
}

// Soma das colunas
for (let c = 0; c < matrizVendas[0].length; c++) {
  let somaColuna = matrizVendas[0][c] + matrizVendas[1][c] + matrizVendas[2][c];
  console.log(`Soma da coluna ${c + 1}: ${somaColuna}`);
}

// Percorrendo tudo
for (let i = 0; i < matrizVendas.length; i++) {
  for (let j = 0; j < matrizVendas[i].length; j++) {
    console.log(
      `Valor na linha ${i + 1}, coluna ${j + 1}: ${matrizVendas[i][j]}`
    );
  }
}

// ===========================
// 🚀 FIM DO CÓDIGO
// ===========================
console.log("✅ Fim do código!");
