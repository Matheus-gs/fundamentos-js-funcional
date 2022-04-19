const carrinho = [
    { nome: 'Caneta', qtd: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtd: 1, preco: 649.5, fragil: true },
    { nome: 'Caderno', qtd: 4, preco: 27.1, fragil: false },
    { nome: 'Lapis', qtd: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtd: 1, preco: 19.2, fragil: true },
]

// Retornar todos os items frageis
// Totalizar os precos multiplicando preco por qtd
// Retornar a media dos totais

const frageis = (elemento) => elemento.fragil
const precos = (elemento) => elemento.qtd * elemento.preco
const totais = (acumulador, elemento) => acumulador + elemento 

const resultado = carrinho.filter(frageis).map(precos).reduce(totais) / carrinho.length
console.log(resultado)
