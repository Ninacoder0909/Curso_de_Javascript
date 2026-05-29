const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo cancion con el id ${id}`);
  },
  pausar: function (params) {
    console.log("pausando...");
  },
  borrar: function (params) {
    console.log("Borrando cancion...");
  },
  crearPlaylist: function (nombre) {
    console.log(`Creando la playlist de ${nombre}`);
  },
  reproducirPlaylist: function (nombre) {
    console.log(`Reproduciendo la playlist de ${nombre}`);
  },
};

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar();
reproductor.crearPlaylist("Heavy metal");
reproductor.reproducirPlaylist("Romanticas");
