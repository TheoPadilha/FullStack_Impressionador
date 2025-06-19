// ==================================================
// 🔥 OPERADORES DE COMPARAÇÃO EM JAVASCRIPT
// ==================================================

// ==================================================
// 🔸 Igualdade (==) → Compara só o valor, ignora o tipo (não recomendado)
// 🔸 Igualdade estrita (===) → Compara valor e tipo (boa prática)
console.log(5 == "5"); // true → compara só o valor
console.log(5 === "5"); // false → compara valor e tipo (number ≠ string)

// ==================================================
// 🔸 Diferença (!=) → Compara só o valor
// 🔸 Diferença estrita (!==) → Compara valor e tipo (boa prática)
console.log(5 != "5"); // false → 5 é igual a "5" no valor
console.log(5 !== "5"); // true  → tipos diferentes (number ≠ string)

// ==================================================
// 🔸 Maior, Menor, Maior ou Igual, Menor ou Igual
console.log(10 < 20); // true → 10 é menor que 20
console.log(10 <= 20); // true → 10 é menor ou igual a 20
console.log(10 >= 10); // true → 10 é igual a 10

// ==================================================
// 🔸 Exemplo prático: Validação de senha
let senha = 123;
let senhaDigitada = 321;

let comparacao = senha === senhaDigitada; // false, pois 123 ≠ 321

console.log("Aqui é a senha correta? " + comparacao); // false

// ==================================================
// ⚠️ ERRO NO CÓDIGO ORIGINAL
// → Você escreveu console.log(falso), mas "falso" não foi declarado.
// Se quer mostrar a palavra "falso", deve colocar entre aspas.
// Se quer mostrar um valor booleano, deve usar uma variável ou diretamente true/false.

console.log(false); // → Imprime o valor booleano false
console.log("falso"); // → Imprime a palavra 'falso' (string)

// ==================================================
// 🚩 RESUMO IMPORTANTE DOS OPERADORES DE COMPARAÇÃO

/*
🟩 Igualdade:
- ==  → Igualdade (compara só o valor, ignora tipo) → ❌ NÃO recomendado
- === → Igualdade estrita (compara valor e tipo) → ✅ BOA PRÁTICA

🟥 Diferença:
- !=   → Diferente (só valor)
- !==  → Diferente estrito (valor e tipo)

🟦 Maior / Menor:
- >   → Maior
- <   → Menor
- >=  → Maior ou igual
- <=  → Menor ou igual

💡 Sempre que possível, use === e !== no lugar de == e != para evitar erros de tipo!
*/
