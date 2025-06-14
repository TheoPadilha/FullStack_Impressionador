//  Você tem três variáveis: uma que representa se um produto está disponível como
//  um booleano (true), outra que representa a quantidade de produtos no estoque (10), e uma
//  terceira que representa a quantidade mínima necessária de produtos no estoque (15). Verifique
//  se o produto está disponível e se a quantidade é suficiente (igual ou maior que a quantidade
//  mínima necessária) usando operadores lógicos NOT e AND. Imprima no console se o produto
//  está disponível e tem a quantidade suficiente.
//  Exemplo de Saída: “'O produto está disponível e tem quantidade suficiente: false” e “'O
//  produto está indisponível: false”

let ProdDisp = true;
let ProdQuant = 15;
let ProdQuantMin = 15;
let quantSuficiente = ProdQuant >= ProdQuantMin;

console.log(
  `"O produto está disponível e tem quantidade suficiente: ${
    quantSuficiente && ProdDisp
  }" e "O produto está indisponível: ${!ProdDisp}"`
);
