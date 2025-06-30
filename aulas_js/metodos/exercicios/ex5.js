//  Exercício 1: Dado o array ['Produto A', 'Produto B'], adicione 'Produto C' ao final,
//  remova o primeiro item e exiba o carrinho atualizado.
//  Exemplo de Saída: // ['Produto B', 'Produto C']

let produto = ["Produto A" , "Produto B"]

produto.push("Produto C")

produto.shift()

console.log(produto)