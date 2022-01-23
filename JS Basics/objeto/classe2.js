class Avo {
	constructor(sobrenome) {
		this.sobrenome = sobrenome
	}
}

class Pai extends Avo {
	constructor(sobrenome, profissao = 'Professor'){
		super(sobrenome) //Assume o sobrenome da Superclasse Avo
		this.profissao = profissao
		}
}

class Filho extends Pai {
	constructor() {
		super('Silva')
	}
}

const vovo = new Avo
vovo.sobrenome = 'Manoel'

console.log(vovo)


const filho = new Filho
console.log(filho)


