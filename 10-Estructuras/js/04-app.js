//Operador mayor que menor que
const dinero = 300;
const totalApagar = 500;
const tarjeta = false;
const cheque = true;

if (dinero >= totalApagar) {
  console.log("Si podemos pagar");
} else if (tarjeta) {
  console.log("Si puedo pagar porque tengo la tarjeta");
} else if (cheque) {
  console.log("Si puedo pagar porque tengo cheque");
} else {
  console.log("Fondos insuficientes");
}
