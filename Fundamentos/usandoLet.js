
// No caso do LET, ele respeita o escopo de bloco, diferente de VAR

let numero = 1

{
	let numero = 2
	console.log('dentro = ', numero)
}

console.log('fora = ', numero)