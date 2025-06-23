// Anotações aula

function saudacao(nome) {
  return `Ola ${nome}`;
}
console.log(saudacao("Theo"));

const pessoa = {
  nome: "Theo",
  saudacao: function () {
    return `Ola ${pessoa.nome}`;
  },
};

console.log(pessoa.saudacao());

// String - Sequência de caracteres
let nome = "Theo";
let string = "Ola " + nome;
console.log(string.toUpperCase()); // Letras maiúsculas
console.log(string.toLowerCase()); // Letras minúsculas

// slice(start , end) Extrai uma parte da string
// ("Obrigatória" , "Opcional")
console.log(string.slice(1, 7));
console.log(string.slice(-5)); // de trás para frente - inverso

// substring(start , end) Retorna uma parte da string
//  ("Obrigatória" , "Opcional")
console.log(string.substring(1, 7));
console.log(string.substring(-5)); // converte 0 = substrings(0)
console.log(string.substring(7, 3)); // inverter esse valores (3,7)

let texto = "O Theo eh lindo";

// replace(search , replaceWith)
console.log(texto.replace("lindo", "fantástico")); // Não subtitui o valor original
console.log(texto.replace("h", "fantástico"));

console.log(texto);

console.log(texto.indexOf("Th")); // -1 significa que não à a ocorrencia na string análisada

// split("delimiter" , limit)
//       ("Opcional" , "Opcional")

let t2 = "maçã  banana  laraja  uvas";

let f = t2.split(",")// Delimitador  -  A cada "," separe os elementos
let f2 = t2.split("," , 4) // delimitador + limite de elementos da nossa lista
let f3 = t2.split()

let frutas = t2.split(/\s+/)
console.log(frutas)

// splice(indice , numeroIntensRemov , i1)

frutas.splice(1,2)
console.log(frutas)