const a = 1
const b = 2
const c = 3

const obj1 = {
	a,
	b,
	c
}
console.log(obj1)

const nomeAttr = 'Nota'
const valorAttr = 7.87

const obj3 = {}

obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)