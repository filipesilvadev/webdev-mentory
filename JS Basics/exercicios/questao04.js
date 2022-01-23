let divisaoEResto = function(dividendo, divisor) {
	let resultado = dividendo / divisor
	let resto = dividendo % divisor
		return `${dividendo} dividido por ${divisor} dá: ${resultado} e resta ${resto}.`
}

console.log(divisaoEResto(10, 3))
