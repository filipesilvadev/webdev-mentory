const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
	if(x == 5) {
		break //não funciona para o IF, então afeta o esopo de fora mais próximo.
	}
	console.log(`${x} = ${nums[x]}`)
}

console.log(' ')

for (let y in nums) {
	if (y == 5) {
		continue // quando chegar no indice 5, PULA ele e CONTINUA a rotina do laço.
	}
	console.log(`${y} = ${nums[y]}`)
}

console.log(' ')

externo: for (let a in nums) {
	for (let b in nums) {
		if (a == 2 && b == 3){
			break externo //Afetaria o for de dentro caso não referenciassemos o rótumo externo 
		}	console.log(`Par = ${a}, ${b}`)
	}
}