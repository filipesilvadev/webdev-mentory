const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(valor, indice) {
	console.log(`${indice + 1}. ${valor}`)
}

fabricantes.filter(imprimir)

