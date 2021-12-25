// Função em JS é First-Class Object (Citizens)
// Higher-order function
// JS Trata função como dado

// Criar de forma literal:
function func1() {}

// Armazenar em variável:
const func2 = function() {}

// Armazenar em array:
const array = [function(a,b){return a+b}, func1, func2]

// Função pode ser um atributo de um objeto:
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

// Passar funcao como paramentro p/ outra funcao
function run(fun) {
	fun()
}
run(function(){console.log('Executanto....')})


// Uma função pode retornar/conter uma função
function soma(a, b) {
	return function(c) {
		console.log(a + b + c)
	}
}

soma(2, 3)(4)
// ou armazenar a primeira func em uma variável ou constante para ser invocada posteriormente:
const cincoMais = soma(2, 3)
cincoMais(4) //Retorna o mesmo que "soma(2, 3)(4)"



