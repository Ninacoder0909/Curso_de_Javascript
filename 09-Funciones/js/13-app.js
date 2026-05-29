const reproductor = {
  cancion: "",
  reproducir: (id) => console.log(`Reproduciendo cancion con el id ${id}`),
  pausar: () => console.log("pausando..."),
  borrar: () => console.log("Borrando cancion..."),
  crearPlaylist: (nombre) => console.log(`Creando la playlist de ${nombre}`),
  reproducirPlaylist: (nombre) =>
    console.log(`Reproduciendo la playlist de ${nombre}`),

  set nuevacancion(cancion) {
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}`);
  },
  get obtenercancion() {
    console.log(`${this.cancion}`);
  },
};

reproductor.nuevacancion = "Enter sandman";

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar();
reproductor.crearPlaylist("Heavy metal");
reproductor.reproducirPlaylist("Romanticas");
