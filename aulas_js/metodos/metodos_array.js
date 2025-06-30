let produtos = ["jogo", "teclado"];

produtos.push("Carrinho", "Boneco", "Bola"); /// Adicionar ao final da lista
console.log(produtos);

produtos.unshift("Celular"); // Adicionar ao Inicio da lista
console.log(produtos);

produtos.pop(); // Remover o ultimo elemento
console.log(produtos);

produtos.shift(); // Remover o primeiro elemento
console.log(produtos);

let letras = ["s", "a", "b", "k", "m", "g"];
let numeros = [1, 6, 3, 4, 8, 7];

letras.sort(); // Ordenando os elementos
console.log(letras);

letras.reverse(); // Reverte os elementos
console.log(letras);

numeros.sort();
console.log(numeros);

numeros.reverse();
console.log(numeros);

let mescla = letras.concat(numeros);
console.log(mescla);

let frutas = ["maça", "uva", "laranja"];

console.log(frutas.indexOf("laranja"));

// console.log(frutas.splice(0, 1)); // inicio, quantidade de elementos
console.log(frutas.splice(2, 1, 10)); // substituir um elemento - inicio, quantidade, valor substituindo
console.log(frutas);

let frutas2 = ["Manga", "Banana", "Pera"];

console.log(frutas2.includes("Manga")); // retora true pois tem a string Manga no array.
console.log(frutas2.includes("Uva"));

console.log(
  frutas2.every(function (fruta) {
    return fruta.includes("a");
  })
); // every() Responde true se estiver em todos os elementos

console.log(
  frutas2.some(function (fruta) {
    return fruta.includes("Manga");
  })
); // some() Responde true se estiver em algum elemento

console.log(frutas2.join()); // Quando não passado nenhum argumento retorna ","
