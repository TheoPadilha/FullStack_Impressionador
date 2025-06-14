// ============================================
// 🔥 BOOLEAN E CONVERSÃO DE VALORES NO JAVASCRIPT
// ============================================

// 🔸 Tipos Booleanos
// Boolean é um tipo de dado lógico que possui dois valores:
// ✅ true  → verdadeiro
// ❌ false → falso

let ligado = true;
let desligado = false;

console.log(ligado); // true
console.log(desligado); // false

// ============================================
// 🔸 Conversão de Boolean para Número
// No JavaScript:
// 👉 true é equivalente a 1
// 👉 false é equivalente a 0

console.log(true == 1); // true → true é igual a 1
console.log(false == 0); // true → false é igual a 0

// ============================================
// 🔸 Conversão de Valores para Boolean
// Usamos a função Boolean() para transformar qualquer valor
// em verdadeiro (true) ou falso (false) segundo as regras de truthy/falsy.

let nome = "paulo";
console.log(Boolean(nome)); // true → String não vazia é verdadeira

let num = 0;
console.log(Boolean(num)); // false → 0 é considerado falso

// ============================================
// 🔸 Testes com outros valores

console.log(Boolean("")); // false → String vazia é falsa
console.log(Boolean("oi")); // true  → String com texto é verdadeira
console.log(Boolean(0)); // false → Zero é falso
console.log(Boolean(10)); // true  → Qualquer número diferente de zero é verdadeiro
console.log(Boolean(null)); // false → null é falso
console.log(Boolean(undefined)); // false → undefined é falso
console.log(Boolean(NaN)); // false → Not a Number é falso
console.log(Boolean([])); // true  → Array vazio é verdadeiro
console.log(Boolean({})); // true  → Objeto vazio é verdadeiro

// ============================================
// 🚩 RESUMO IMPORTANTE

/* 
👉 VALORES FALSY (são considerados false):
- false
- 0
- -0
- ""  (string vazia)
- null
- undefined
- NaN

👉 Todos os outros valores são TRUTHY (considerados verdadeiros):
- Strings não vazias ("abc", "0", "false")
- Números diferentes de zero (1, -5, 3.14)
- Objetos e arrays ({} e [])
- Funções

📌 Isso é muito usado em estruturas condicionais (if, while) para testar se uma variável tem valor ou não.

Exemplo:
*/

let teste = "";
if (teste) {
  console.log("Tem valor!");
} else {
  console.log("Está vazio ou falso.");
}
// Resultado: Está vazio ou falso, porque "" é um valor falsy.
