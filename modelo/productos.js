import conetion from "../utiles/database.js";
export class Producto {
  async getAll() {
    try {
      const [rows] = await conetion.query("SELECT * FROM productos;");
      return rows;
    } catch (error) {
      throw new Error("error al obtener categorias");
    }
  }
  async create(nombre, descripcion, precio, categorias_id) {
    try {
      const [result] = await conetion.query(
        "INSERT INTO productos (nombre,descripcion, precio, categorias_id)VALUES(?,?,?,?)",
        [nombre, descripcion, precio, categorias_id]
      );
      return {
        nombre,
        descripcion,
        precio,
        categorias_id,
      };
    } catch (error) {
      throw new Error("error al crear categorias");
    }
  }

  async update(nombre, descripcion, precio, categorias_id, id) {
    try {
      const [result] = await conetion.query(
        `UPDATE productos SET nombre = ? ,descripcion = ?, precio = ?, categorias_id = ? WHERE id = ?`,
        [nombre, descripcion, precio, categorias_id, id]
      );
      if (result.affectBows === 0) {
        throw new Error("categoria no encontrada");
      }
      return {
        id,
        nombre,
        descripcion,
        precio,
        categorias_id,
      };
    } catch (error) {
      throw new Error("Error al crear el producto");
    }
  }
  async patch(nombre, descripcion, precio, categorias_id, id) {
    try {
      const [result] = await conetion.query(
        `UPDATE productos SET nombre = ? ,descripcion = ?, precio = ?, categorias_id = ? WHERE id = ?`,
        [nombre, descripcion, precio, categorias_id, id]
      );
      if (result.affectBows === 0) {
        throw new Error("producto no encontrada");
      }
      return {
        id,
        nombre,
        descripcion,
        precio,
        categorias_id,
      };
    } catch (error) {
      throw new Error("error producto ");
    }
  }
  async relacionado_productos(id) {
    const [result] = await conetion.query(
      `SELECT * FROM productos WHERE categorias_id = ?;`,
      [id]
    );
    return result.length > 0;
  }

  async delete(id) {
    try {
      const relacionado = await this.relacionado_productos(id);
      if (relacionado) {
        throw new Error(
          "no se puede ilimar por que la categoira esta relcionada con prodcutos"
        );
      }
      const [result] = await conetion.query(
        `delete from productos WHERE id = ?`,
        [id]
      );
      if (result.affectedRows == 0) {
        throw new Error("producto no encontrada");
      }
      return { error: "eliminmado correctamente" };
    } catch (error) {
      throw new Error(error.message || "error al eliminar la categoria");
    }
  }
}
