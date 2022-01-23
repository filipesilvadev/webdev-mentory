// Estratégias antigas para gerar valor padrão de atributos

// Estratégia OU (Problema: Buga se receber valor 0, porque 0 é FALSE)
function soma1(a, b, c) {
	a = a || 1
	b = b || 1
	c = c || 1
	return a + b + c
}

// Estratégias com ternário
function soma2(a, b, c) {
	a = a !== undefined ? a : 1
	b = 1 in arguments ? b : 1
	c = isNaN(c) ? 1 : c
	return a + b + c
}


// Estratégia do ES2015 (MELHOR!)

function soma3 (a = 1, b = 1, c = 1) {
	return a + b + c
}

console.log(soma1(0, 0 , 0)) // Buga
console.log(soma2(0, 0 , 0)) // Funciona mas não é o melhor design
console.log(soma3(0, 0 , 0)) // Melhor Design!!