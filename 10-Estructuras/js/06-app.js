const usuario = false;
const puedepagar = false;

if (usuario && puedepagar) {
  console.log("Si puedes comprar");
} else if (!puedepagar && !usuario) {
  console.log("No puedes comprar usuario inexistente y saldo insuficiente");
} else if (!usuario) {
  console.log("Inicie sesion o saca una cuenta");
} else if (!puedepagar) {
  console.log("Fondos insuficientes");
} else {
  console.lo("No puedes comprar");
}
