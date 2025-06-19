// 🎯 Valores Padrão em Funções (Parâmetros Default)

// ✅ O que é?
// Valores padrão permitem definir um valor inicial para um parâmetro da função,
// caso nenhum valor ou undefined seja passado na chamada da função.

// Isso evita erros e facilita quando o usuário não informar todos os argumentos.

// 🔹 Sintaxe básica:
function cumprimentar(nome = "Visitante", saudacao = "Seja bem vindo") {
  console.log(`Olá ${nome}, ${saudacao}!`);
}

// 🔹 Exemplos de uso:
cumprimentar("Theo", "Boa tarde"); // Saída: Olá Theo, Boa tarde!
cumprimentar("Maria"); // Saída: Olá Maria, Seja bem vindo!
cumprimentar(); // Saída: Olá Visitante, Seja bem vindo!

// 🔹 Passando undefined para pular um parâmetro e usar o valor padrão:
function exemplo(a = 1, b = 2) {
  console.log(a, b);
}

exemplo(5); // Saída: 5 2   (b usa o valor padrão)
exemplo(undefined, 7); // Saída: 1 7   (a usa o valor padrão)
