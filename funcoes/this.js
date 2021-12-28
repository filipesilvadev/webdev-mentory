// O This seria uma forma de referenciar o objeto atual de uma execução em seu contexto

const pessoa = {
	saudacao: 'Bom dia',
	falar() {
		console.log(this.saudacao)
	}
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // defino que o escopo da função falar() é o objeto pessoa em qualquer camada.
falarDePessoa()