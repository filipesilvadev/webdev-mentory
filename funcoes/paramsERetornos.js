// Parametros e Retornos são Opcionais e altamente flexíveis em JS

function area(largura, altura) {
	const area = largura * altura
	if(area > 20) {
		console.log(`Valor acima do permitido: ${area}m2.`)
		return 'Tente de novo'
	}else{
		return area
	}
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 5, 17, 20, 44))
console.log(area(5, 5))