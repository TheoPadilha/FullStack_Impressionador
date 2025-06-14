// Você tem um orçamento de R$ 250,00 e deseja verificar se o custo de um
//  produto, após aplicar um desconto de R$ 50,00, está dentro do orçamento. O custo do produto
//  é R$300,00.
//  Exemplo de Saída: “Preço com desconto: R$ 250” e “Está dentro do orçamento? True”
let orçamento = 250;
let desconto = -50;
let produto = 300;

const produtoDescont = produto + desconto
const ddo = produtoDescont <= orçamento;

console.log(
  `Preço com desconto: ${
    produto + desconto
  } e Está dentro do orçamento?: ${ddo}`
);
