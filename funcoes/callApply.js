function getPreco(imposto = 0, moeda = 'R$') {
	return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}//O THIS no contexto dessa função, é tudo o que será resolvido a partir de um objeto que usará essa função.

const produto = {
	nome: 'Notebook',
	preco: 4500, //Resolve THIS.PRECO do getPreco()
	desconto: 0.15,//Resolve THIS.DESCONTO do getPreco()
	getPreco 
}

console.log(produto.getPreco())



// Usando Call ou Apply:
const carro = {
	preco: 50000,
	desconto: 0.20
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
// Fazem a mesma coisa: Recebem o contexto no qual a função getPreco será aplicada.
// A diferença entre eles está apenas na sintaxe quando além do contexto, passamos também parametros.
// Exemplo:

console.log(getPreco.call(carro, 0.15, 'US$')) 
console.log(getPreco.apply(carro, [0.10, '$'])) //Depois do contexto, os parametros vem todos em 1 Array.

