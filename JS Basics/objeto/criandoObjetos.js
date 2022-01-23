// Notação Literal (Não confundir com JSON!)
const obj1 = {}

// A partir de Object
const obj2 = new Object


// Funções Construtoras
function Produto(nome, preco, desc){
	this.nome = nome
	this.getPrecoComDesconto = () => {
		return preco * (1 - desc)
	}
}

const p1 = new Produto ('Caneta', 7.99, 0.15)


// Função Factory
const criarFuncionario = (nome, salarioBase, faltas) => {
	return {
		nome,
		salarioBase,
		faltas,
		getSalario() {
			return (salarioBase / 30) * (30 - faltas)
		}
	}
}

const f1 = criarFuncionario('João', 7980, 4)
console.log(f1.getSalario())



// Através do Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


