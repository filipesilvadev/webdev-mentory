// O contexto do THIS na Arrow Function é previsível. Diferente das funções tradicionais.

function Pessoa() {
	this.idade = 0

	setInterval(() => {
		this.idade++
		console.log(this.idade) //Não precisa de bind nem técnica self pois a chamada de this está no contexto de uma arrow function.
		},1000)
	}

	new Pessoa


