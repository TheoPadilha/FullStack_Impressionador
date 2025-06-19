// 🎯 ESCOPO GLOBAL, LOCAL (FUNÇÃO) E DE BLOCO

// ✅ O que é Escopo?
// Escopo determina onde uma variável está disponível para ser acessada no código.

// 1️⃣ Escopo Global:
// Variáveis declaradas fora de qualquer função ou bloco.
// Estão disponíveis em todo o código.

let global = "Sou Global"; // Variável de escopo global

// 2️⃣ Escopo Local (Função):
// Variáveis declaradas dentro de uma função só podem ser acessadas dentro dessa função.

function minhaFuncao() {
  let localFuncao = "Sou Local da Função"; // Variável local da função
  console.log(global);       // ✅ Acessa variável global
  console.log(localFuncao);  // ✅ Acessa variável local da função
}

minhaFuncao();

console.log(global);      // ✅ Acessa variável global
// console.log(localFuncao);  // ❌ Erro: variável localFuncao não está acessível aqui (fora da função)


// 3️⃣ Escopo de Bloco:
// Variáveis declaradas com 'let' ou 'const' dentro de blocos (ex: if, for, while) só existem dentro desse bloco.

if (true) {
  let bloco = "Sou do Bloco";  // Variável local ao bloco
  console.log(global);  // ✅ Acessa variável global
  console.log(bloco);   // ✅ Acessa variável local do bloco
}

console.log(global);  // ✅ Acessa variável global
// console.log(bloco); // ❌ Erro: variável bloco não existe fora do bloco 'if'


/*
📋 Resumo rápido do Escopo:

| Escopo          | Onde é acessível?                     | Declaração típica                      |
|-----------------|-------------------------------------|---------------------------------------|
| Global          | Em todo o código                    | var, let, const fora de funções/blocos|
| Local (Função)  | Dentro da função onde foi declarada | let, const dentro da função            |
| Bloco           | Dentro do bloco onde foi declarado  | let, const dentro de { ... }           |
*/
