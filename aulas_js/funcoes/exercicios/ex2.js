// - Imagine agora que o aluno do item anterior não atingiu a média mínima pra passar, e por isso está
//  de prova final. Faça uma nova função que calcula a média final desse aluno a partir de 4 notas, as das 3
//  primeiras provas + a nota da prova final. O cálculo deve ser o seguinte:

//  média_final = (média_antes_da_pf + pf)/2

// Você deve usar a função do exercício 1 para calcular a média final. Faça as modificações que julgar
//  necessário.
//  Ao término do processo, devemos ter a mensagem "a média final desse aluno é x" (sendo x o
//  resultado do cálculo).

// function media(n1 = 0, n2 = 0, n3 = 0, pf = null) {
//   let resultado = (n1 + n2 + n3) / 3;
//   let resutFormat = Number(resultado.toFixed(2));

//   console.log("Lembrando: MÉDIA = 6");
//   console.log(`A média do aluno é: ${resutFormat}`);

//   if (resutFormat < 6) {
//     console.log("Aluno esta de recuperação!");

//     if (pf !== null) {
//       let mediaFinal = (resutFormat + pf) / 2;
//       console.log(`A média final do aluno foi ${mediaFinal}`);

//       if (mediaFinal < 6) {
//         console.log("Aluno REPROVOU");
//       } else {
//         console.log("Aluno PASSOU");
//       }
//     } else {
//       console.log("Faltou informar a nota da recuperação (pf).");
//     }
//   } else {
//     console.log("Aluno passou!");
//   }
// }

// media(4, 6, 7,8);

function media(n1 = 0, n2 = 0, n3 = 0) {
  let resultado = (n1 + n2 + n3) / 3;
  const resutFormat = resultado.toFixed(2);

  return Number(resutFormat);
}

function cmediaFinal(n1, n2, n3, pf) {
  let mediaSemPf = media(n1, n2, n3);
  let mediaFinal = (mediaSemPf + pf) / 2;

  console.log(`A média final desse aluno é ${mediaFinal}`);
}
cmediaFinal(7, 7, 7, 7);
