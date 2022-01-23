function Carro(velocidadeMaxima = 200, delta = 5) {
	// atributo privado
	let velocidadeAtual = 0

	// metodo público
	this.acelerar = _ => {
		if(velocidadeAtual + delta <= velocidadeMaxima) {
			velocidadeAtual += delta
		}else{
			velocidadeAtual = velocidadeMaxima
		}
	}

	// metodo público
	this.getVelocidadeAtual = _ => console.log(velocidadeAtual)
}

const uno = new Carro // Se não vamos sobrescrever os params padrão da construtora, não precisa dos ()

uno.acelerar()
uno.getVelocidadeAtual()

const ferrari = new Carro(380, 25) //setando parametros diferentes dos padrões da construtora
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.getVelocidadeAtual()
