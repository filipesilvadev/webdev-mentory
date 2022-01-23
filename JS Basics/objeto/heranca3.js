const pai = {nome: 'Pedro', corCabelo: 'Preto'}

const filha1 = Object.create(pai) // Objeto já é criado como um protótipo de (pai).
filha1.nome = 'Ana'

console.log(filha1.corCabelo) // Já herdou corCabelo



const filha2 = Object.create(pai, {
	nome: {value: 'Bia', writable: false, enumerable: false}
})

filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`) // Continua sendo Bia porque .nome é writable: false!

console.log(Object.keys(filha1))
console.log(Object.keys(filha2)) //Não exive 'nome' porque tem enumerable: false

for(let attr in filha1){
	filha1.hasOwnProperty(attr) ?
		console.log(attr) : console.log(`Por herança: ${attr}`)
}