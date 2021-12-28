
let aferirTriangulo = function(a, b, c) {
	if(a == b && b == c && a == c){
		console.log('Triangulo Quadrilátero')
	} else if (a == b || b == c || a == c){
		console.log('Triangulo Isóceles')
	} else {
		console.log('Triangulo Escaleno')
	}
	
}

aferirTriangulo(1, 3, 3)

