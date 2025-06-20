//  3 - Escreva uma função que recebe do usuário um valor de temperatura em graus Celsius e escreve na
//  tela o texto:
//  a temperatura correspondente em Farenheit é de xºF (sendo x o resultado da conversão.)
//  Obs: temperatura em Farenheit = (9/5)*( temperatura em Celsius ) + 32

function conversor(tempCelsius) {
  let tempFarenheit = (9 / 5) * tempCelsius + 32;

  console.log(
    `A temperatura em ${tempCelsius}ºC correspondente em Farenheit ${tempFarenheit}ºF`
  );
}

conversor(22);
