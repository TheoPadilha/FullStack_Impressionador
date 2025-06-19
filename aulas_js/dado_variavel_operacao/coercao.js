// ============================================
// 🔥 COERÇÃO DE TIPOS EM JAVASCRIPT
// ============================================

// ===================================================
// 🔸 Coerção Implícita
// Quando o JavaScript converte automaticamente um tipo em outro
// ===================================================

console.log(5 + "5"); // "55" → O número 5 foi convertido em string e concatenou
console.log("10" - 5); // 5 → A string "10" foi convertida para number e subtraiu 5
console.log("3" * "5"); // 15 → Ambas as strings foram convertidas para number e multiplicadas

// ➕ Com o operador "+" → Se tiver string, faz concatenação
// ➖, ✖️, ➗ → Tentam converter para number

// ===================================================
// 🔸 Coerção Explícita
// Quando nós forçamos a conversão de um tipo para outro
// ===================================================

// 🔹 Number → String

let num = 123;
console.log(typeof num); // number

num = String(num); // Convertendo para string
console.log(typeof num); // string

// Outra forma de converter number para string:
let num2 = 50;
console.log(num2.toString()); // "50"

// 🔹 String e Number → Boolean

let string = "mensagem";
let num3 = 0;

console.log(Boolean(num3)); // false → 0 é falsy
console.log(Boolean(string)); // true  → string não vazia é truthy

// 🔹 String → Number

let stringnum = "2563";
console.log(Number(stringnum)); // 2563 → converte string para número (se for número válido)

console.log(Number(string)); // NaN → string "mensagem" não é um número válido

// 🔹 Boolean → String

let booleano = true;
console.log(String(booleano)); // "true"

// 🔹 Boolean → Number

console.log(Number(booleano)); // 1 → true é convertido para 1
console.log(Number(false)); // 0 → false é convertido para 0

// ============================================
// 🚩 RESUMO IMPORTANTE

/* 
🟩 COERÇÃO IMPLÍCITA:
→ O JavaScript decide converter os tipos automaticamente
Exemplos:
- 5 + "5"    → "55" (concatena)
- "10" - 5   → 5 (converte string para número)
- "3" * "5"  → 15 (converte ambas para número)

🟦 COERÇÃO EXPLÍCITA:
→ Você força a conversão usando funções:
- String()   → Converte para string
- Number()   → Converte para número
- Boolean()  → Converte para boolean

📌 Outros métodos:
- .toString()  → Número para string
- parseInt(), parseFloat() → String para número inteiro ou decimal

⚠️ Atenção com erros:
- Number("abc") → NaN (Not a Number)

*/

// ============================================
// 🔥 Exemplo prático de conversão em condições:

let idade = "18";

if (Number(idade) >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
// Saída: Maior de idade
