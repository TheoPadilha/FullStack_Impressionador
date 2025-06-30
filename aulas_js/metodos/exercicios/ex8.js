//  Exercício 4: Dado o array [2, 5, 8, 1], verifique se pelo menos um dos números é maior
//  que 7.
//  Exemplo de Saída: // true

let num = [2, 5, 8, 1];

let resultado = num.some((n) => numero > 7)
console.log("Resultado" , resultado)

console.log(
  num.some(function (n) {
    let maior = n > 7;
    return maior;
  })
);
