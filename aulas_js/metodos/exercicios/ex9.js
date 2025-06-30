//  Exercício 5: Dado o array [4, 6, 8, 2], verifique se todos os números são maiores que 3.
//  Exemplo de Saída: // false

let num = [4, 6, 8, 2];

console.log(
  num.every(function (n) {
    let menor = n > 3;
    return menor;
  })
);

let resultado = num.every((n) => numero > 3)
console.log("Resultado" , resultado)