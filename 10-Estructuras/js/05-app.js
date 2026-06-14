//Switch case
const metodoPago = "efectivo";

switch (metodoPago) {
  case "efectivo":
    pagar();
    break;
  case "cheque":
    console.log(`Pagaste con ${metodoPago}`);
    break;
  default: // este es obligatorio es un tipo de else final
    console.log(
      "Aun no has seleccionado un metodo de pago o metodo de pago no soportado",
    );
    break;
}

function pagar() {
  console.log("Pagando...");
}
