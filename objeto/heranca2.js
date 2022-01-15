// Cadeia de protótipos (prototype chain)

const avo = {attr1: 'A'} // Por default aponta para Object.prototype
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr1)

// Exemplo na prática

const carro = {
	velAtual: 0,
	velMax: 200,
	acelerarMais(delta) {
		if (this.velAtual + delta <= this.velMax) {
			this.velAtual += delta
		}else{
			this.velAtual = this.velMax
		}
	},
	status() {
		return `${this.velAtual}Km/h de ${this.velMax}Km/h`
	}

}


const ferrari = {
		modelo: 'F40',
		velMax: 324 //Shadowing
	}

const volvo = {
	modelo: 'V40',
	status() {
		return `${this.modelo}: ${super.status()}` //O Super serve para referenciar a função do pai para não executar de forma recursiva.
	}
}

// Estabelece relação de protótipo entre 2 objetos (É o mesmo que __proto__):
Object.setPrototypeOf(ferrari, carro) 
Object.setPrototypeOf(volvo, carro) 





console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(400)
console.log(ferrari.status())