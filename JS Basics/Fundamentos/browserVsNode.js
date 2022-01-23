let pessoa = {
	nome: 'Ana',
	falar: function(){
		return `Eu sou ${this.nome}`
	}
}

console.log(pessoa.falar())

