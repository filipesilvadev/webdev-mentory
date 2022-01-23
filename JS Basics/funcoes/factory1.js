// O Conceito de Factory é basicamente uma função que retorna um objeto.

// Factory simples
function criarPessoa() {
	return {
		nome: 'Eloã',
		sobrenome: 'Crispim'
	}
}

console.log(criarPessoa())