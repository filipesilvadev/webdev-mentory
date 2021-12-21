// Novo recurso do ES2015
// Desestruturando um Objeto

const pessoa = {
	nome: 'Ana',
	idade: 5,
	endereco: {
		logradouro: 'Rua 17 Sul',
		numero: 7
	}
}

const {nome, idade} = pessoa // Tire os valores de pessoa.nome e pessoa.idade e armazena nas constantes nome e idade respectivamente.
console.log(nome, idade)

const {nome: n, idade: i} = pessoa //Tire pessoa.nome e pessoa.idade e crie as consts n e i para armazenar cada valor respectivamente.
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)