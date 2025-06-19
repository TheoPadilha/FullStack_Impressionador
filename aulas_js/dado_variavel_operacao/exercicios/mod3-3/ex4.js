//  Exercício 4: Manipulação de Objetos- parte 2
//  a. Crie um objeto chamado venda com as propriedades cliente, produto e valor.
//  b. Adicione a propriedade data ao objeto.
//  c. Remova a propriedade produto e imprima o objeto atualizado.

let venda = {
  cliente: "Theo",
  produto: "teclado",
  valor: 150,
};
console.log(venda)

venda.data = "22/02/2025"
console.log(venda)

delete venda.produto
console.log(venda)
