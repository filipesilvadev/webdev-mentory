{{{{{var sera = 'Sera?'}}}}}

console.log(sera)

// Uma variável definida com VAR só tem 2 escopos possíveis: Global ou Função.
	// É sempre importante fugir do escopo global quando se cria variáveis, pois facilmente elas podem ser sobrescritas acidentalmente.

function teste(){
	var local = 123
	console.log(local)
}




teste()

	console.log(local)