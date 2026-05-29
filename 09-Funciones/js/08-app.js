function sumar(a, b) {
  console.log(a + b);
}

sumar(2, 3);

const resultado = sumar(5, 3);

console.log(resultado);

//ejemplo mas avanzado
let total = 0;
function agregarCarrito(precio) {
  return (total += precio);
}

function calcularImpuesto(total) {
  return total * 1.15;
}
agregarCarrito(300);
agregarCarrito(700);

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de ${totalPagar}`);
console.log(total);
