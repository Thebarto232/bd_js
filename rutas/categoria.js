import conetion from "../utiles/database.js";

class categoria {
  constructor(nombre, descripcion) {
    this.nombre = nombre;
    this.descripcion = descripcion;
  }

  async getAll() {
    try {
      const [rows] = await conetion.query("SELECT * FROM categorias;");
      return rows;
    } catch (error) {
      throw new Error("error al obtener categorias");
    }
  }
  async create() {
    try {
      const [result] = await conetion.query(
        "INSERT INT categorias(nombre,descripcion)VALUES(?,?)",
        [this.nombre, this.descripcion]
      );

      return {
        id: result.id,
        nombre: this.nombre,
        descripcion: this.descripcion,
      };
    } catch (error) {
      throw new Error("error al crear categorias");
    }
  }
}
export default categoria;
