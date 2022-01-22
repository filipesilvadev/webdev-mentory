// Object.defineProperty(obj, 'forEach2',{
//     value: function(array){
//         for (let i = 0; i < array.length; i++) {
//             const valor = array[i];
//             const indice = i
//             const array = array
//         }
//     }
// })

//  Errado /\ Pois não queremos tratar Objeto e sim Array. Logo:

Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}



const aprovados = ['Filipe', 'Eloã', 'Nilcéia', 'Francisco', 'Rebeca']

aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})



