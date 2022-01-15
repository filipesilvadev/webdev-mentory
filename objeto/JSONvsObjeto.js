const obj = { a: 1, b: 2, c: 3, soma() {return a + b + c} }
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{ a: 1, b: 2, c: 3}")) INVALIDO PQ OS ATRIBUTOS E QQR TEXTO PRECISAM ESTAR ENTRE ASPAS DUPLAS
//console.log(JSON.parse("{ "a": 1, "b": 2, "c": 3}))INVALIDO PQ OS ATRIBUTOS E QQR TEXTO PRECISAM ESTAR ENTRE ASPAS DUPLAS

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))

