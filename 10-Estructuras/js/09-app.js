//Operadores ternariosS

const autenticado = false;
const puedepagar = true;

console.log(
  autenticado
    ? puedepagar
      ? "Si esta autenticado y puede pagar"
      : "Si autenticado, no puede pagar"
    : "No esta autenticado",
); // ejemplo de ternarios con else if anidados
