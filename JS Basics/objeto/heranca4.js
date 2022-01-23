console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
	return this.split('').reverse().join('')
}

console.log('Filipe'.reverse())

Array.prototype.first = function() {
	return this[0]
}

console.log(['uno', 'dos', 'tres'].first())


// Ao usar esse tipo de técnica ter muito cuidado para não sobrescrever métodos que já existam nos propotypes globais.
	// Ex.: String.prototype.toString = ...