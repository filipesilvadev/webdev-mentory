// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função.

const x = 'Global'

function fora() {
	const x = 'Local'
	function dentro() {
		return x
	}
	return dentro
}

const minhaFuncao = fora()

console.log(minhaFuncao()) // O Closure fará com que a função retorne a constante de nível mais interno a ela: const x = 'Local'