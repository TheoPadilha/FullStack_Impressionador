const produto = {
  nome: "Celular",
  preco: 2500,
  disponivel: false,
  emEstoque: 0,
};

console.log(Object.keys(produto)); // Mostra as chaves do objeto EX: nome , preco
console.log(Object.values(produto)); // Mostra o valor da chaves do objeto
console.log(Object.entries(produto)); // Mostra a chave e o valor junto em forma de array.

Object.assign(produto, { categoria: "Eletrônico" }); // Adicionar novas propriedades.
console.log(produto);

Object.defineProperty(produto, "emEstoque", { value: 10 }); // Modifica o valor de uma propriedade existente.
Object.defineProperty(produto, "disponivel", { value: true });
console.log(produto);

const pessoa = {};

const patrimonio = {};

const rico = {};

const pobre = {};

Object.assign(pessoa, { nome: "Theo" });
Object.assign(pessoa, { idade: 20 });

Object.assign(patrimonio, {total: 10000});
Object.assign(patrimonio, {investido: 10000});

console.log(pessoa)

const determinante = () => {
  if (patrimonio.total > 10000) {
    Object.assign(pobre, pessoa, patrimonio);
   
  } else {
    Object.assign(rico, pessoa, patrimonio);

  }
};


determinante();
console.log(`Pessoa Pobre:` , pobre);
console.log("Pessoa rica: " ,rico );
