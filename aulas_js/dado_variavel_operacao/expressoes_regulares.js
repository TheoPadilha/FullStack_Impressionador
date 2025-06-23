// // ===================================================
// // 📜 EXPRESSÕES REGULARES EM JAVASCRIPT
// // ===================================================

// // ===============================
// // 🔢 Caracteres básicos
// // ===============================

// /\d/       // Qualquer dígito (0-9)
// /\D/       // Qualquer caractere NÃO numérico
// /\w/       // Qualquer caractere de palavra (letra, número, ou _)
// /\W/       // Qualquer caractere NÃO de palavra
// /\s/       // Espaço em branco (space, tab, quebra de linha)
// /\S/       // Qualquer caractere que NÃO seja espaço
// /./        // Qualquer caractere (menos quebras de linha)
// /^abc/     // Começa com "abc"
// /abc$/     // Termina com "abc"
// /^$/       // String vazia

// // ===============================
// // 🔢 Quantificadores
// // ===============================

// /a*/       // Zero ou mais ocorrências de "a"
// /a+/       // Uma ou mais ocorrências de "a"
// /a?/       // Zero ou uma ocorrência de "a"
// /a{3}/     // Exatamente 3 ocorrências de "a"
// /a{2,4}/   // De 2 até 4 ocorrências de "a"

// // ===============================
// // 🔢 Operadores
// // ===============================

// /a|b/      // "a" ou "b"
// /[abc]/    // Qualquer um dos caracteres: a, b ou c
// /[^abc]/   // Qualquer caractere EXCETO a, b ou c
// /[0-9]/    // Qualquer número de 0 a 9
// /[a-z]/    // Qualquer letra minúscula
// /[A-Z]/    // Qualquer letra maiúscula
// /[a-zA-Z]/ // Qualquer letra (maiúscula ou minúscula)

// // ===============================
// // 🔍 Exemplos práticos
// // ===============================

// // Verificar se é um e-mail
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// console.log(emailRegex.test("email@dominio.com")); // true

// // Verificar se é um CPF (formato 000.000.000-00)
// const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
// console.log(cpfRegex.test("123.456.789-10")); // true

// // Verificar se é um CEP brasileiro (formato 00000-000)
// const cepRegex = /^\d{5}-?\d{3}$/;
// console.log(cepRegex.test("88000-000")); // true

// // Verificar se é um telefone brasileiro
// const telefoneRegex = /^\(?\d{2}\)?\s?\d{4,5}\-?\d{4}$/;
// console.log(telefoneRegex.test("(47) 91234-5678")); // true

// // Remover todos os espaços de uma string
// const texto = "  Olá   Mundo  ";
// const resultado = texto.replace(/\s/g, '');
// console.log(resultado); // "OláMundo"

// // ===============================
// // 🚩 Flags importantes
// // ===============================
// // g → global (procura todas as ocorrências)
// // i → case insensitive (ignora maiúsculas/minúsculas)
// // m → multilinha

// // Exemplo com flags
// const regex = /abc/gi;

// // ===============================
// // ✍️ Fim das anotações
// // ===============================
