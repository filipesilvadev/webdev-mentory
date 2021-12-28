let comparaComThis = function(param) {
	console.log(this === param)
}

comparaComThis(global)

const obj = {}

comparaComThis = comparaComThis.bind(obj)

comparaComThis(global) //FALSE porque agora o contexto do THIS é o Obj passado como parâmetro.
comparaComThis(obj) // TRUE


// Já em uma arrow function....

let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj) // O Escopo de uma arrow function é mais forte que o próprio BIND.
comparaComThisArrow(obj) 
comparaComThisArrow(module.exports) 

