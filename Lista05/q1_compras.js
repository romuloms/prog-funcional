const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
  { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
  { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
  { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
  { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
]

const converteEmDolar = carrinho.map((obj) => obj.preco * 5.07)
console.log(`Precos de cada item em dólar: ${converteEmDolar} \n`)

const totalReal = (total, lista) => total + lista.qtde * lista.preco 
const totalEmReal = carrinho.reduce(totalReal, 0)
console.log(`Total gasto com a compra em R$: ${totalEmReal} \n`)

const totalEmDolar = totalEmReal * 5.07
console.log(`Total gasto com a compra em $: ${totalEmDolar} \n`)

const desconto10 = totalEmReal * 0.9
console.log(`Total em real com 10% de desconto: ${desconto10}`)

const desconto10Dolar = totalEmDolar * 0.9
console.log(`Total em dólar com 10% de desconto: ${desconto10Dolar} \n`)

const frageis = carrinho.filter((obj) => obj.fragil)
const totFrageis = frageis.reduce((acc, obj) =>
  acc + obj.preco * obj.qtde, 0)
console.log(`Total gasto em produtos frágeis: ${totFrageis} \n`)

const iniciadosPorC = carrinho.filter((obj) => obj.nome[0] == 'C')
const totalProdC = iniciadosPorC.reduce((acc, obj) =>
  acc + obj.preco * obj.qtde, 0)
console.log(`Total gasto em produtos iniciados por C: ${totalProdC} \n`)
