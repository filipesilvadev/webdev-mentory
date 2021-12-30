// Classe
class Pessoa {
	constructor(nome) {
		this.nome = nome
	}

	falar() {
		console.log(`Meu nome é ${this.nome}`)
	}
}

const p1 = new Pessoa('Filipe')
p1.falar()



// Factory
const criarPessoa = nome => {
	return {
		falar: _ => console.log(`Meu nome é ${nome}`)
	}
}

const p2 = criarPessoa('Eloã')
p2.falar()