let criarProduto = (nome, preco, desconto = 0.1) => {
	return produto = {
		nome,
		preco: preco - (preco * desconto)
		
	}
}

const iPhone = criarProduto('iPhone', 5000, 0.5);

console.log(iPhone)