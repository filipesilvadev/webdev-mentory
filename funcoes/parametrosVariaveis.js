function soma() {
	let soma = 0
	for (i in arguments) {
		soma += arguments[i]
	}
	return console.log(soma)
}


soma(15, 5)




