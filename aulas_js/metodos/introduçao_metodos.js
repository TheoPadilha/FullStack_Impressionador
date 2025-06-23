// ===========================
// 📚 Métodos mais utilizados em JavaScript
// ===========================

// 🚩 Métodos de STRING:
let texto = "JavaScript é incrível";

console.log(texto.length); // 🔸 Conta caracteres (inclui espaços)
console.log(texto.toUpperCase()); // 🔸 Tudo maiúsculo
console.log(texto.toLowerCase()); // 🔸 Tudo minúsculo
console.log(texto.includes("é")); // 🔸 Verifica se contém
console.log(texto.startsWith("Java")); // 🔸 Começa com
console.log(texto.endsWith("ível")); // 🔸 Termina com
console.log(texto.indexOf("Script")); // 🔸 Retorna o índice onde começa
console.log(texto.replace("incrível", "fantástico")); // 🔸 Substitui texto
console.log(texto.slice(0, 10)); // 🔸 Recorta parte da string
console.log(texto.trim()); // 🔸 Remove espaços das pontas
console.log(texto.split(" ")); // 🔸 Quebra a string em array

// 🚩 Métodos de ARRAY:
let numeros = [1, 2, 3, 4, 5];

console.log(numeros.length); // 🔸 Quantidade de elementos
console.log(numeros.push(6)); // 🔸 Adiciona no final
console.log(numeros.pop()); // 🔸 Remove do final
console.log(numeros.unshift(0)); // 🔸 Adiciona no início
console.log(numeros.shift()); // 🔸 Remove do início
console.log(numeros.includes(3)); // 🔸 Verifica se contém
console.log(numeros.indexOf(4)); // 🔸 Posição do elemento
console.log(numeros.join(" - ")); // 🔸 Junta os elementos em string
console.log(numeros.reverse()); // 🔸 Inverte a ordem
console.log(numeros.slice(1, 3)); // 🔸 Recorta parte (não altera o original)
console.log(numeros.splice(2, 1)); // 🔸 Remove a partir do índice (altera o original)

// Métodos de Alta Ordem:
let dobrados = numeros.map((n) => n * 2); // 🔸 Cria novo array com transformação
let pares = numeros.filter((n) => n % 2 === 0); // 🔸 Filtra elementos
let soma = numeros.reduce((acc, n) => acc + n, 0); // 🔸 Reduz para um único valor

// 🚩 Métodos de OBJETO:
let pessoa = {
  nome: "Theo",
  idade: 19,
  cidade: "Balneário",
};

console.log(Object.keys(pessoa)); // 🔸 Retorna as chaves (keys)
console.log(Object.values(pessoa)); // 🔸 Retorna os valores
console.log(Object.entries(pessoa)); // 🔸 Retorna array de arrays [chave, valor]
console.log(pessoa.hasOwnProperty("idade")); // 🔸 Verifica se tem a propriedade

// 🚩 Métodos de MATH (Matemática):
console.log(Math.PI); // 🔸 Pi
console.log(Math.round(4.6)); // 🔸 Arredonda
console.log(Math.ceil(4.3)); // 🔸 Arredonda pra cima
console.log(Math.floor(4.9)); // 🔸 Arredonda pra baixo
console.log(Math.random()); // 🔸 Número aleatório entre 0 e 1
console.log(Math.max(1, 2, 3)); // 🔸 Maior número
console.log(Math.min(1, 2, 3)); // 🔸 Menor número
console.log(Math.sqrt(25)); // 🔸 Raiz quadrada

// 🚩 Métodos de NUMBER:
let numero = 1234.56789;

console.log(numero.toFixed(2)); // 🔸 Fixa casas decimais (retorna string)
console.log(numero.toString()); // 🔸 Converte para string
console.log(Number.isInteger(10)); // 🔸 Verifica se é inteiro
console.log(parseInt("10")); // 🔸 Converte string para inteiro
console.log(parseFloat("10.5")); // 🔸 Converte string para float

// ✅ Fim dos métodos mais usados

