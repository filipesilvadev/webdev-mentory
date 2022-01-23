let dobro = function(a) {
	return 2 * a
}

dobro = (a) => {
	return 2 * a
}

dobro = a => 2 * a //RETURN implícito
console.log(dobro(5))

ola = () => 'Olá!'
ola = _ => 'Olá!!' //possui um parametro fixo. Reduz a sintaxe.

console.log(ola())

