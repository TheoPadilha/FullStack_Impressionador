//  Exercício 5: Manipulação dos Tipos Referências
//  a. Crie um array estoque e atribua seus valores para um novo array novoEstoque.
//  b. Modifique um elemento de novoEstoque e mostre que estoque não foi alterado.
//  c. Crie um objeto funcionario e atribua seus valores para um novo objeto
//  novoFuncionario.
//  d. Modifique uma propriedade de novoFuncionario e mostre que funcionario não foi
//  alterado.

let estoque = [
  "Pão",
  "Trigo",
  "Batata",
  "Arroz",
  "Feijão",
  "Açúcar",
  "Sal",
  "Macarrão",
  "Farinha de trigo",
  "Farinha de mandioca",
  "Café",
  "Óleo de soja",
  "Azeite",
];
let novoEstoque = [...estoque];
console.log(novoEstoque.indexOf("Sal"));
novoEstoque[6] = "Controle";

estoque.sort();
novoEstoque.sort();

console.log(estoque);
console.log(novoEstoque);


let funcionario = {
    Nome: "Theo",
    Idade: 19
}
let novoFuncionario = {...funcionario}
funcionario.Nome = "MIh"
console.log(funcionario)
console.log(novoFuncionario)