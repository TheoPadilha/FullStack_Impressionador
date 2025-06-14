// ==================================================
// OBJETOS EM JAVASCRIPT - ANOTAÇÕES COMPLETAS
// ==================================================

// Um objeto é uma coleção de propriedades (chaves) e valores.
// Pode conter strings, números, arrays, objetos, funções etc.

let carro = {
  marca: "Ferrari",            // chave: marca | valor: string
  modelo: "F40",               // chave: modelo | valor: string
  ano: 2025,                   // chave: ano | valor: number
  cor: "Vermelho",             // chave: cor | valor: string
  preco: 1630000,              // chave: preco | valor: number
  acessorios: ["turbina", "aero fólio"],  // chave: acessorios | valor: array de strings
};

// --------------------------------------------------
// ACESSAR VALORES DAS PROPRIEDADES
console.log(carro);            // imprime o objeto inteiro
console.log(carro.marca);      // acessa a propriedade marca (Ferrari)
console.log(carro["cor"]);     // acessa a propriedade cor usando colchetes

// --------------------------------------------------
// ALTERAR VALORES DAS PROPRIEDADES
carro.preco = 2000000;         // altera o valor da propriedade preco
console.log(carro);

// --------------------------------------------------
// ADICIONAR NOVAS PROPRIEDADES
carro.estado = "novo de fábrica";   // cria uma nova propriedade estado
console.log(carro);

// --------------------------------------------------
// DELETAR PROPRIEDADES
delete carro.estado;           // remove a propriedade estado
console.log(carro);

// --------------------------------------------------
// VERIFICAR EXISTÊNCIA DE PROPRIEDADE COM 'in'
console.log("marca" in carro);    // true
console.log("estado" in carro);   // false (pois foi deletada)

// --------------------------------------------------
// MÉTODOS EM OBJETOS - funções como propriedades

let pessoa = {
  nome: "Theo",
  idade: 19,
  saudacao: function() {  // método do objeto
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
};

pessoa.saudacao();  // Executa o método

// --------------------------------------------------
// PERCORRER PROPRIEDADES COM for...in

for (let chave in carro) {
  console.log(chave + ": " + carro[chave]);
}

// --------------------------------------------------
// OBJETOS ANINHADOS - objetos dentro de objetos

let usuario = {
  nome: "Theo",
  contato: {
    email: "theo@email.com",
    telefone: "123456789"
  }
};

console.log(usuario.contato.email);  // Acessa propriedade do objeto aninhado

// --------------------------------------------------
// DESTRUCTURING (DESCONSTRUÇÃO) - extrair propriedades em variáveis

let { marca, modelo } = carro;
console.log(marca);  // Ferrari
console.log(modelo); // F40

// --------------------------------------------------
// PROPRIEDADES DINÂMICAS - usar variáveis para criar/alterar propriedades

let chave = "cor";
carro[chave] = "Amarelo";    // altera propriedade 'cor' para 'Amarelo'
console.log(carro.cor);      // Amarelo

// --------------------------------------------------
// Object.keys(), Object.values() e Object.entries()

console.log(Object.keys(carro));    // Array com todas as chaves: ['marca', 'modelo', 'ano', ...]
console.log(Object.values(carro));  // Array com todos os valores: ['Ferrari', 'F40', 2025, ...]
console.log(Object.entries(carro)); // Array com pares chave-valor: [['marca', 'Ferrari'], ['modelo', 'F40'], ...]

// --------------------------------------------------
// EXEMPLO COMPLETO COM OBJETO LIVRO

let livro = {
    titulo: "O segredo da mente milionária",
    autor: "Theo",
    ano: 2020,
    genero: "Finanças"
};

// Adicionando propriedades
livro.paginas = 120;
livro["idioma"] = "Português";

// Deletando propriedade
delete livro.idioma;

// Verificar existência de propriedades
console.log("autor" in livro);     // true
console.log("idioma" in livro);    // false

// --------------------------------------------------
// FINALIZANDO - Objetos são poderosos e versáteis em JS,
// com muitas possibilidades para organizar e manipular dados.
