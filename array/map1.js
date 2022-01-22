const nums = [1, 2, 3, 4, 5]

//O Map pode ser considerado um "For com Propósito"
// Retorna outro array e é capaz de manipular cada indice antes de gerar o novo array.

let resultado = nums.map(function(elementos){
    return elementos * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
