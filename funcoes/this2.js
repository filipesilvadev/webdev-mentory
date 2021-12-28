function Pessoa() {
	this.idade = 0

	const self = this

	setInterval(function(){
		self.idade++
		console.log(self.idade)
	},/*.bind(this)*/ 1000) // Em vez da técnica self, pode-se usar o .bind(this) na chamada da função para amarrar o escopo do THIS
}



new Pessoa
