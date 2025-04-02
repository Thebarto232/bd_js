import conetion from "../utiles/database";
export class producto {
  async create(nombre, descripcion) {
    try {
      const [result] = await conetion.query(
        "INSERT INT categorias(nombre,descripcion)VALUES(?,?)",
        [nombre, descripcion]
      );
      return {
        id: result.id,
        nombre,
        descripcion,
      };
    } catch (error) {
      throw new Error("error al crear categorias");
    }
  }
}
