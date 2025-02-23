// Coeção Implicita

console.log(5 + "5"); // número eh convertido para string
console.log("10" - 5); // string eh convertido para number
console.log("3" * "5"); // string são convertidas para number

// Converção Explicita

let num = 123;
console.log(typeof num);
num = String(num);
console.log(typeof num);

let num2 = 50;
console.log(num2.toString());

let string = "mensagem";
let num3 = 0;
console.log(Boolean(num3));
console.log(Boolean(string));

let stringnum = "2563";
console.log(Number(stringnum));
console.log(Number(string));

let booleano = true;

console.log(String(booleano))