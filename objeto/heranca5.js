function Aula(nome, videoID) {
	this.nome = nome
	this.videoID = videoID
		// return `Retorna: ${this.nome}, ID: ${videoID}`
}

const aula1 = new Aula('Bem Vindo', 123)
console.log(aula1)


// simulando o new

function novo(funcao, ...parametros) { //O operador "..." referencia o recebimento de varios parametros que serão transformados em um Array.
	const obj = {}
	obj.__proto__ = funcao.prototype
	funcao.apply(obj, parametros)
		return obj
} 

console.log(novo(Aula, 'Aula 3', 456))
