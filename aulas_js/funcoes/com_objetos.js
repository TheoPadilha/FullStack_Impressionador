// 🎯 Funções com Objetos como Argumentos (JavaScript)

// ✅ O que é isso?
// Quando temos muitos dados relacionados (como informações de um cliente ou pedido),
// podemos agrupar esses dados dentro de um objeto e, assim, passar o objeto como argumento
// para uma função, em vez de passar vários parâmetros separados.

// 🚀 Vantagens:
// - Deixa o código mais organizado e limpo.
// - Reduz a quantidade de parâmetros na função.
// - Facilita a manutenção e leitura do código.

// 🔹 Exemplo de Objeto:
let pedido = {
  id: 1234,
  nome: "Theo",
  email: "Theo@gmail.com",
  x_salada: 30,
  refri: 10,
};

// 🔹 Maneira tradicional (sem passar o objeto diretamente):
function enviarNot(nome, email, idPedido) {
  console.log(
    `Enviando email para ${email} confirmando o pedido número ${idPedido}`
  );
  console.log(`Mensagem: ${nome}, pedido confirmado!`);
}

// Chamando a função com propriedades individuais:
enviarNot(pedido.nome, pedido.email, pedido.id);

// 🔹 Função que processa itens do pedido:
function processarPedido(id, i1, i2) {
  let totalPedido = i1 + i2;
  console.log(`Pedido: ${id} processado.`);
  console.log(`Total do pedido: R$${totalPedido}`);
  return totalPedido;
}

// Chamando a função:
let retorno = processarPedido(pedido.id, pedido.x_salada, pedido.refri);
console.log(retorno); // Saída: 40

// ⚙️ 🔥 Melhorando o código: Passando o OBJETO DIRETAMENTE na função

function enviarNotMelhorado(pedido) {
  console.log(
    `Enviando email para ${pedido.email} confirmando o pedido número ${pedido.id}`
  );
  console.log(`Mensagem: ${pedido.nome}, pedido confirmado!`);
}

enviarNotMelhorado(pedido);

// Outra função usando objeto:
function processarPedidoMelhorado(pedido) {
  let total = pedido.x_salada + pedido.refri;
  console.log(`Pedido: ${pedido.id} processado.`);
  console.log(`Total do pedido: R$${total}`);
  return total;
}

let total = processarPedidoMelhorado(pedido);
console.log(total); // Saída: 40

// ✅ ⚠️ Observação:
// Se o objeto crescer (adicionar mais produtos, por exemplo), a função continua funcionando sem precisar alterar a quantidade de parâmetros.
