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
