let array = [3.5, 7.9, 9.2, 10.0]

for(let i in array) {
	console.log(i, `${array[i]}`)
}

var pessoa = {
	Nome: 'Eloã',
	Sobrenome: 'Hazaitz',
	idade: 34
}

for(let atributo in pessoa){
	console.log(atributo, `${pessoa[atributo]}`)
}