function Pessoa(nome) {
	this.nome = nome

	this.falar = _ => {console.log(`Meu nome é ${this.nome}`)}
}

const p1 = new Pessoa('Filipe')
p1.falar()

consol