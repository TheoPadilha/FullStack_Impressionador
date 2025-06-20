//  - Faça uma função que recebe as notas das 3 provas de um aluno e calcula a média dessas. Ao
//  término do processo, devemos ter a mensagem "a média desse aluno é x" (sendo x o resultado do
//  cálculo).

function media(n1 = 0, n2 = 0, n3 = 0) {
  let resultado = (n1 + n2 + n3) / 3;
  const resutFormat = resultado.toFixed(2);

  console.log("Lembrando: MÉDIA = 6");
  console.log(`A média desse aluno é ${resutFormat}`);

  if (resutFormat < 6) {
    console.log("Aluno REPROVADO");
  } else {
    console.log("Aluno APROVADO");
  }
  console.log(`As notas do aluno foram: P1:${n1} , P2:${n2} , P3:${n3}`)
}

media(7, 7 , 5 );
