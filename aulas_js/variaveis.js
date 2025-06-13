console.log("Hello word"); // console.log = exibir
console.log("bem vindo ao curso");

// Declaração de variaveis

/* Declaração do tipo  + Nome da variavel = informação armazenada
 (var , let , const) + nome da variavel = "texto" , 12 , [] */

//  var: Declara variáveis com escopo de função ou global. Permite redeclaração e sofre hoisting (movida para o topo do escopo). Não deve ser usada em código moderno.

// let: Declara variáveis com escopo de bloco. Não permite redeclaração no mesmo escopo, mas pode ser atualizada. Ideal para valores mutáveis.

// const: Declara variáveis com escopo de bloco. Não permite atualização ou redeclaração. Ideal para valores constantes ou referências de objetos/arrays.

// TIPO VAR

var nome = "Theo";
console.log(nome);

var nome = "Mih";
console.log(nome);

nome = "Vera"; // declaração esta incorreta
console.log(nome);

// TIPO LET

let mensagem = "Ola impressionador";
console.log(mensagem);

// declaração do tipo let
let cor = "vermelho";
console.log(cor);

// Redeclaração não eh permitido = let cor "Azul"
cor = "azul"; // reatribuição correto
console.log(cor);

// TIPO CONST

const outraMensagem = "Ola denovo";
console.log(outraMensagem);

// Tipo const não pode ser redeclarada - ou criada novamente
// Não podemos reatribuir o valor - outraMensagem = oi?

// outraMensagem = "oi?"
// console.log(outraMensagem)

//PI = 3,14

// Redeclaração

var msg = "ola mundo";
console.log(msg);
var msg = "oi";
console.log(msg);
msg = "ola";
console.log(msg);

// Reatribuição - Mutabilidade

let a = "abc";
console.log(a);
a = "cba";
console.log(a);

// Hoisting

let b;
console.log(b);

// Visibilidade
{
  console.log("isso eh um bloco");
  let idade = 22;
  const dois = 2;
  console.log(idade);
  console.log(dois); // console.log(idade),(dois) não funciona fora das chaves
}
