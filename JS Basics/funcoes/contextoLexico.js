const valor = 'Global'

function minhaFuncao() {
	console.log(valor)
}

function exec() {
	const valor = 'Local'
	minhaFuncao()
}

exec() //Imprime Global porque a função minhaFuncao() tem consciência do contexto de sua declaração e respeita esse escopo.