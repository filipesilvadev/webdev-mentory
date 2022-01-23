// Array não é um tipo. É um Objeto com características e atributos especiais.
console.log(typeof Array, typeof new Array)

let aprovados = ['Bia', 'Carlos', 'Ana', 'João']
console.log(aprovados)

delete aprovados[1]

aprovados[4] = 'Paulo'
console.log(aprovados)

aprovados[9] = 'Filipe'
console.log(aprovados.length)

aprovados.splice(1, 2)
console.log(aprovados)

aprovados.push('Eloã') // Add elemento no fim do Array

aprovados.splice(1, 2 , 'Add por Splice1', 'Add por Splice2')
console.log(aprovados)

