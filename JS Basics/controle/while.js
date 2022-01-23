function getInteiroAleatorioEntre(min, max) {
	const valor = Math.random() * (max-min) + min
		return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){ //executa enquanto for true
	opcao = getInteiroAleatorioEntre(-1, 10)
	console.log(`Foi sorteado o ${opcao}`)
}

console.log('Fim!')