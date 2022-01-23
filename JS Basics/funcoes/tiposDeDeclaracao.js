// Function Declaration (Carrega previamente = hoisting)
function soma(x, y) {
	return x + y
}

// Function Expression (Não carrega previamente e não funciona se invocada antes da declaração)
const sub = function(x, y) {
	return x - y
}

// Named Function Expression (Não carrega previamente e não funciona se invocada antes da declaração)
// Pouco usada
const mult = function mult(x, y) {
	return x * y
}

