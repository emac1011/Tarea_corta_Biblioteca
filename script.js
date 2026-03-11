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
      console.error("El libro ya existe:", libro.titulo);
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
      throw new Error("Libro no existe");
    }

    if (!libro.disponible) {
      console.log("El libro no está disponible");
      return;
    }

    libro.disponible = false;
    console.log("Libro prestado:", libro.titulo);
  }

  estadisticas() {
    const total = this.libros.length;

    const disponibles = this.libros.filter((l) => l.disponible).length;

    const prestados = total - disponibles;

    console.log("Total de libros:", total);
    console.log("Disponibles:", disponibles);
    console.log("Prestados:", prestados);
  }
}

const miBiblioteca = new Biblioteca("Mi Biblioteca");

// Agregar libros
miBiblioteca.agregarLibro(
  new Libro("Cien años de soledad", "García Márquez", "Ficción", 1967)
);

miBiblioteca.agregarLibro(
  new Libro("El código Da Vinci", "Dan Brown", "Thriller", 2003)
);

miBiblioteca.agregarLibro(
  new Libro("Breve historia del tiempo", "Stephen Hawking", "Ciencia", 1988)
);

miBiblioteca.agregarLibro(
  new Libro("1984", "George Orwell", "Ficción", 1949)
);

miBiblioteca.agregarLibro(
  new Libro("Sapiens", "Yuval Noah Harari", "Historia", 2011)
);

// Duplicado
miBiblioteca.agregarLibro(
  new Libro("El código Da Vinci", "Dan Brown", "Thriller", 2003)
);

// Prestar
try {
  miBiblioteca.prestar("Cien años de soledad");
  miBiblioteca.prestar("Cien años de soledad");
} catch (error) {
  console.error("Error:", error.message);
}

// Buscar
const ciencia = miBiblioteca.buscarPorGenero("ciencia");

console.log(
  "Libros de Ciencia:",
  ciencia.map((l) => l.info())
);

// Estadísticas
miBiblioteca.estadisticas();