// Coleção dinâmica de chave: valor

const produto = new Object

produto.nome = 'Cadeira'
produto['Marca'] = 'Xiaomi'
produto.preco = 220

console.log(produto)


const carro = {
	modelo: 'Civic',
	valor: 75000,
	proprietario: {
		nome: 'Filipe Oliveira',
		idade: 33,
		endereco: {
			rua:'17 Sul',
			numero: 7,
		}
	}
	condutores: [{
		nome: 'Eloã Crispin',
		idade: 35
	}, {
		nome: 'Rebeca Oliveira',
		idade: 20
	}],
	calcularValorSeguro: function() {
		//...
	}
}

carro.proprietario.endereco.numero