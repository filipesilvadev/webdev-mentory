// Object.preventExtensions
// Este método bloqueia a criação de novos atributos mas permite a modificação e exclusão dos que já existem quando o obj é declarado.

const produto = Object.preventExtensions({
	nome: 'Lápis', preco: 1.99, tag: 'Promoção'
})
console.log('Extensíve?', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' //Não permite
delete produto.tag
console.log(produto)

// Object.seal
// Não consegue add nem excluir, apenas modificar os atributos já declarados.
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
pessoa.sobrenome = 'Oliveira'
delete pessoa.nome
pessoa.idade = 29 //Permite

// Object.freeze
	// É parecido com o seal mas não deixa nem modificar os atribulos existente. Fica tudo constante!