// && (AND)  - Ambas as condicoes sejam verdadeiras
let idade = 20;
let codigo = true;

let podeFazerLogin = idade >= 18 && codigo;
console.log(podeFazerLogin);

let idade2 = 15;
let podeFazerLogin2 = idade2 >= 18 && codigo;
console.log(podeFazerLogin2);

// || (OR) - apenas uma das condições tem que ser verdadeiras
let login = idade >= 18 || codigo;
let login2 = idade2 >= 18 || codigo;

console.log(login);
console.log(login2);

// !  (NOT) - inverte o valor booleano
let perfil = false;

let alerta = !perfil;

console.log(alerta);

console.log("~~Blitz~~");

let id = 18;
let carteira = false;
(id < 18) = (carteira = false)

 if (id < 18 || carteira == false) {
  console.log("Receberá uma multa, pois nao poderia estar dirigindo");
} else {
  console.log("Está liberado!");
}
