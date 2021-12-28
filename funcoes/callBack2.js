const notas = [7.7, 5.2, 6.5, 3.6, 7.1, 9.0]

// Sem callback
const notasBaixas1 = []
for (let i in notas) {
	if(notas[i] < 7) {
		notasBaixas1.push(notas[i])
	}
}

console.log(notasBaixas1)


// Com callback

// const notasBaixas2 = notas.filter(function(nota){
// 	return nota < 7
// })

const notasMenorQue7 = nota => nota < 7

const notasBaixas2 = notas.filter(notasMenorQue7)
console.log(notasBaixas2)

