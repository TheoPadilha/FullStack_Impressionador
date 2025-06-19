// ===========================
// 📚 Trabalhando com ARRAYS
// ===========================

// Array simples - pode ter vários tipos de dados
let array = ["banana", 23, true, "Theo"];

// Acessando um elemento do array (lembrando que começa no índice 0)
console.log(array[3]); // Resultado: Theo

// ===========================
// 🎯 Manipulando Arrays
// ===========================

let lista = ["banana", "uva", "chocolate"];
console.log(lista); // Mostra o array inteiro

// Modificando um valor do array
lista[0] = "bala"; // Troca 'banana' por 'bala'

// Adicionando um item em uma nova posição
lista[3] = "perfume"; // Adiciona 'perfume' na posição 3

console.log(lista); // ['bala', 'uva', 'chocolate', 'perfume']

// Verificando o tamanho do array
console.log(lista.length); // Resultado: 4

// ===========================
// 🔎 Buscando itens no Array
// ===========================

let frutas = ["banana", "maçã", "uva", "laranja"];

let indice = frutas.indexOf("uva"); // retorna 2
console.log(indice);
console.log(frutas[indice]); // uva

indice = frutas.indexOf("morango"); // não encontrado retorna -1
console.log(indice);

let numeros = [5, 8, 5, 10];
console.log(numeros.indexOf(5)); // 0 (primeiro)
console.log(numeros.lastIndexOf(5)); // 2 (última ocorrência)

// ===========================
// 🛠️ Métodos úteis dos Arrays
// ===========================

// ➕ Adicionar elementos
lista.push("caneta"); // no final
lista.unshift("café"); // no início

// ➖ Remover elementos
lista.pop(); // remove o último
lista.shift(); // remove o primeiro

console.log(lista); // Array atualizado

// 🔍 Verificar se existe
console.log(lista.includes("uva")); // true ou false

// 🔢 Descobrir o índice
console.log(lista.indexOf("chocolate")); // 1 (se existir)

// ===========================
// ✂️ Cortar e Remover
// ===========================

// slice (não altera o array, cria uma cópia)
let novaLista = lista.slice(1, 3);
console.log(novaLista); // elementos de índice 1 até antes do 3

// splice (remove ou substitui, altera o array original)
lista.splice(1, 1); // remove 1 elemento no índice 1
console.log(lista);

// ===========================
// 🔗 Juntar arrays ou transformar em string
// ===========================
let combinado = lista.join(" - ");
console.log(combinado); // bala - chocolate - perfume

// ===========================
// 🔀 Ordenar e inverter
// ===========================
let numeros2 = [10, 5, 100, 50];
numeros2.sort((a, b) => a - b); // crescente
console.log(numeros2);

numeros2.sort((a, b) => b - a); // decrescente
console.log(numeros2);

numeros2.reverse(); // inverte a ordem
console.log(numeros2);

// ===========================
// 🔁 Percorrendo Arrays
// ===========================

// for tradicional
for (let i = 0; i < lista.length; i++) {
  console.log(`Item na posição ${i}: ${lista[i]}`);
}

// for...of
for (let item of lista) {
  console.log(`Item: ${item}`);
}

// forEach (callback)
lista.forEach(function (item, indice) {
  console.log(`Índice ${indice}: ${item}`);
});

// ===========================
// 📐 MATRIZES (Arrays dentro de arrays)
// ===========================

let matrizVendas = [
  [80, 500, 70], // Linha 0
  [400, 200, 60], // Linha 1
  [105, 80, 30], // Linha 2
];

// Acessando elemento [linha][coluna]
console.log(matrizVendas[1][2]); // 60

// ===========================
// 🔢 Somando os valores das linhas
for (let i = 0; i < matrizVendas.length; i++) {
  let somaLinha = 0;
  for (let j = 0; j < matrizVendas[i].length; j++) {
    somaLinha += matrizVendas[i][j];
  }
  console.log(`Soma da linha ${i + 1}: ${somaLinha}`);
}

// ===========================
// 🔢 Somando os valores das colunas
for (let c = 0; c < matrizVendas[0].length; c++) {
  let somaColuna = 0;
  for (let l = 0; l < matrizVendas.length; l++) {
    somaColuna += matrizVendas[l][c];
  }
  console.log(`Soma da coluna ${c + 1}: ${somaColuna}`);
}

// ===========================
// 🔍 Percorrendo linhas e colunas
for (let i = 0; i < matrizVendas.length; i++) {
  for (let j = 0; j < matrizVendas[i].length; j++) {
    console.log(
      `Valor na linha ${i + 1}, coluna ${j + 1}: ${matrizVendas[i][j]}`
    );
  }
}

// ===========================
// 🚀 Spread Operator - Cópias de arrays
// ===========================

let listaA = [1, 2, 3];
let listaB = listaA; // cópia por referência
listaB[0] = 99;
console.log(listaA); // [99, 2, 3] (mudou também)

let listaC = [...listaA]; // cópia independente
listaC.push("chá");
console.log(listaA); // [99, 2, 3] (não muda)
console.log(listaC); // [99, 2, 3, "chá"]

// ===========================
// 🏁 Fim dos exemplos
// ===========================

console.log("✅ Fim do código!");
