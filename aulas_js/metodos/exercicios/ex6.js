//  Exercício 2: Dado o array ['Produto X', 'Produto Y'], adicione 'Produto Z' ao final
//  e una com a nova lista ['Produto A', 'Produto B']. Exiba a lista final de produtos
//  disponíveis.
//  Exemplo de Saída: // ['Produto X', 'Produto Y', 'Produto Z', 'Produto A', 'Produto B']

let produtos = ["Produto X", "Produto Y"]
produtos.push("Produto Z")

let p2 = ["Produto A" , "Produto B"]

let mescla = produtos.concat(p2)
console.log(mescla)