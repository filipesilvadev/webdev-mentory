function tratarErroELancar(erro){
	throw new Error('Erro pensonalizado')
}

function imprimirNomeGritado(obj) {
	try{
		console.log(obj.name.toUpperCase() + '!!!')
	}catch(e) {
		tratarErroELancar(e)
	}finally {
		console.log('Imprimir nome gritado, finalizado.')
	}
}

obj = {
	nome: 'Filipe'
}

imprimirNomeGritado(obj)