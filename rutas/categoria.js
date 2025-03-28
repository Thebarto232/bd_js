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
}
export default categoria;
