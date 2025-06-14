// ==================================================
// 🔥 OPERADORES LÓGICOS EM JAVASCRIPT
// ==================================================

// ==================================================
// 🔸 && (AND) → E lógico
// → Retorna true se **todas** as condições forem verdadeiras
// ==================================================

let idade = 20;
let codigo = true;

let podeFazerLogin = idade >= 18 && codigo;
console.log(podeFazerLogin); // true → idade é maior que 18 E codigo é true

let idade2 = 15;
let podeFazerLogin2 = idade2 >= 18 && codigo;
console.log(podeFazerLogin2); // false → idade2 não é maior que 18

// ==================================================
// 🔸 || (OR) → OU lógico
// → Retorna true se **pelo menos uma** das condições for verdadeira
// ==================================================

let login = idade >= 18 || codigo;
console.log(login); // true → idade >= 18, então é true

let login2 = idade2 >= 18 || codigo;
console.log(login2); // true → idade2 não é >= 18, mas codigo é true → então true

// ==================================================
// 🔸 ! (NOT) → NÃO lógico
// → Inverte o valor booleano
// ==================================================

let perfil = false;
let alerta = !perfil;
console.log(alerta); // true → perfil é false, !perfil inverte para true

// ==================================================
// 🔥 Exemplo prático usando operadores lógicos
console.log("~~ Blitz de trânsito ~~");

let id = 18;
let carteira = false;

// Verificar se a pessoa pode dirigir
if (id < 18 || carteira == false) {
  console.log("🚫 Receberá uma multa, pois não poderia estar dirigindo.");
} else {
  console.log("✅ Está liberado!");
}

/*
📌 A condição:
(id < 18 || carteira == false)

Significa:
- Se a idade for menor que 18 **OU**
- Se não tiver carteira

Então → Multa 🚫

Caso contrário → Liberado ✅
*/

// ==================================================
// 🚩 RESUMO DOS OPERADORES LÓGICOS

/*
🟩 && → E lógico
- Todas as condições devem ser verdadeiras
Ex.: true && true → true
Ex.: true && false → false

🟦 || → OU lógico
- Pelo menos uma condição deve ser verdadeira
Ex.: true || false → true
Ex.: false || false → false

🟥 ! → NÃO lógico (inversor)
- Inverte o valor
Ex.: !true → false
Ex.: !false → true
*/
