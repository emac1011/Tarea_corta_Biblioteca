class Libro {
  constructor(titulo, autor, genero, anio) {
    this.titulo = titulo;
    this.autor = autor;
    this.genero = genero;
    this.anio = anio;
    this.disponible = true;
  }

  info() {
    const estado = this.disponible ? "Disponible" : "Prestado";
    return `${this.titulo} de ${this.autor} (${this.anio}) - ${estado}`;
  }
}

class Biblioteca {
  constructor(nombre) {
    this.nombre = nombre;
    this.libros = [];
  }

  agregarLibro(libro) {
    const existe = this.libros.find((l) => l.titulo === libro.titulo);

    if (existe) {
      console.error("El libro ya existe");
      return;
    }

    this.libros.push(libro);
    console.log("Libro agregado:", libro.titulo);
  }

  buscarPorGenero(genero) {
    return this.libros.filter(
      (l) => l.genero.toLowerCase() === genero.toLowerCase()
    );
  }

  prestar(titulo) {
    const libro = this.libros.find((l) => l.titulo === titulo);

    if (!libro) {
      throw new Error("Libro no encontrado");
    }

    libro.disponible = false;
    console.log("Libro prestado:", libro.titulo);
  }

  estadisticas() {
    const total = this.libros.length;

    const disponibles = this.libros.filter((l) => l.disponible).length;

    const prestados = total - disponibles;

    console.log("Total:", total);
    console.log("Disponibles:", disponibles);
    console.log("Prestados:", prestados);
  }
}