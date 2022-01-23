let formatarValor =  function(valor){
	let valorFormatado = valor.toFixed(2).toString().replaceAll('.', ',')
	return `R$${valorFormatado}`
}


console.log(formatarValor(0.30000000000000004))