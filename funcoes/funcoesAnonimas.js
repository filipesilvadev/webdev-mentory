const soma = function(x, y) {
	return x + y
}

const imprimirResultado = function (a, b, operacao = soma) { // Em "operacao = soma" eu chamo a 1ª função como parâmetro dessa armazenando.
	console.log(operacao(a, b)) // Aqui eu invoco a func. soma através do parametro opecarao que armazena ela.
}

imprimirResultado(3, 4) // o return vem da própria func. soma

imprimirResultado(3, 4, function(x, y){ // Posso passar uma outra função literalmente como 3º parametro
	return x - y // Ela irá sobrescrever a func. soma
})

imprimirResultado(3, 4, (x, y) => x * y) //Também funciona com arrow function

