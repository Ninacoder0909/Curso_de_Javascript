const autenticado = true;

if (autenticado) {
  console.log("El usuario esta autenticado");
} else {
}

const puntaje = 450;

function revisarpuntaje() {
  if (puntaje > 400) {
    console.log("Excelente!!!");
    return; // el return corta los otros if que esten por debajo pero solo funciona dentro de una funcion
  }

  if (puntaje > 300) {
    console.log("Buen puntaje... felicidades");
    return;
  }
}

revisarpuntaje();
