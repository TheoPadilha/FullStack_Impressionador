//  Exercício 3: Dada a string "Aprendendo Python", extraia a palavra "Python" e substitua por
//  “Javascript”.
//  Exemplo de Saída: // “Aprendendo Javascript”
let texto = "Aprendendo Python";
let extrair = texto.slice(11);
let texto2 = texto.replace(extrair, "Javascript");

console.log(texto2);

// let frase = "Aprendendo Python";
// let palavraExtrair = frase.slice(11);
// let fraseNova = frase.replace(palavraExtrair, "Javascript");
// console.log(fraseNova);
