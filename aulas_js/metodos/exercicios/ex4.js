//  Exercício 4: Dada a string 'cadeira, mesa, sofá, armário', divida essa string em um array de
//  produtos e remova o item 'sofá' da lista.
//  Exemplo de Saída: “["cadeira", "mesa", "armário"]”

let texto = "cadeira, mesa, sofá, armário";

let produtos = texto.split(", ")

console.log(produtos.splice(2 , 1))
// console.log(produtos.splice(produtos.indexOf("sofá") , 1))

console.log(produtos)
