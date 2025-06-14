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
// 🛠️ Métodos úteis dos Arrays
// ===========================

// Adicionar no final
lista.push("caneta");

// Remover o último
lista.pop();

// Adicionar no início
lista.unshift("café");

// Remover o primeiro
lista.shift();

console.log(lista); // Mostra o array atualizado

// Verificar se tem um item
console.log(lista.includes("uva")); // true

// Descobrir o índice de um item
console.log(lista.indexOf("chocolate")); // 2

// ===========================
// 🔁 Percorrendo Arrays
// ===========================

// Forma 1: for tradicional
for (let i = 0; i < lista.length; i++) {
  console.log(`Item na posição ${i}: ${lista[i]}`);
}

// Forma 2: for...of (mais simples)
for (let item of lista) {
  console.log(`Item: ${item}`);
}

// Forma 3: forEach (callback)
lista.forEach(function (item, indice) {
  console.log(`Índice ${indice}: ${item}`);
});

// ===========================
// 📐 MATRIZES (Arrays Bidimensionais)
// ===========================

// Matriz: array dentro de array
let matrizVendas = [
  [80, 500, 70], // Linha 0
  [400, 200, 60], // Linha 1
  [105, 80, 30], // Linha 2
];

// Acessando um elemento: [linha][coluna]
console.log(matrizVendas[1][2]); // Resultado: 60 (linha 1, coluna 2)

// ===========================
// 🔢 Somando os valores das linhas
for (let i = 0; i < matrizVendas.length; i++) {
  let somaLinha = matrizVendas[i][0] + matrizVendas[i][1] + matrizVendas[i][2];
  console.log(`Soma da linha ${i + 1}: ${somaLinha}`);
}

// ===========================
// 🔢 Somando os valores das colunas
for (let c = 0; c < matrizVendas[0].length; c++) {
  let somaColuna = matrizVendas[0][c] + matrizVendas[1][c] + matrizVendas[2][c];
  console.log(`Soma da coluna ${c + 1}: ${somaColuna}`);
}

// ===========================
// 🔍 Percorrendo todas as linhas e colunas
for (let i = 0; i < matrizVendas.length; i++) {
  for (let j = 0; j < matrizVendas[i].length; j++) {
    console.log(
      `Valor na linha ${i + 1}, coluna ${j + 1}: ${matrizVendas[i][j]}`
    );
  }
}

// ===========================
// 🏁 Fim dos exemplos
// ===========================

console.log("✅ Fim do código!");
