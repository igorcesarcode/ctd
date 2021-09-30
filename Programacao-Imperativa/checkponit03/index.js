const produtos = [
  {
    nomeProduto: 'Batata',
    valorProduto: 500,
    quantidadeProduto: 100,
    status: true
  },
  {
    nomeProduto: 'Pizza',
    valorProduto: 97,
    quantidadeProduto: 50,
    status: false
  },
  {
    nomeProduto: 'Tomate',
    valorProduto: 700,
    quantidadeProduto: 100,
    status: false
  },
  {
    nomeProduto: 'Arroz',
    valorProduto: 600,
    quantidadeProduto: 70,
    status: true
  }
]

const carrinho = produtos.filter(item => (item.valorProduto >= 482 && item.valorProduto <= 1600 && item.quantidadeProduto >= 60 && item.status))

carrinho.map(item => console.log(`Produto com valor de ${item.valorProduto} com contidade de ${item.quantidadeProduto}`))

const valorTotal = carrinho.map(produtos => produtos.valorProduto).reduce((total, valor) => total + valor )

console.log('Sua compra teve um totoal de: ' + valorTotal)