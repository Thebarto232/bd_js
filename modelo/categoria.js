import conetion from "../utiles/database.js";
// class productos {
//   constructor(nombre, descripcion, precio) {
//     this.nombre = nombre;
//     this.descripcion = descripcion;
//     this.precio = precio;
//   }

//   async getAll() {
//     try {
//       const [rows] = await connection.query("SELECT * FROM productos;");
//       return rows;
//     } catch (error) {
//       throw new Error("error al obtener productos");
//     }
//   }

//   async create() {
//     try {
//       const [result] = await connection.query(
//         "INSERT INTO productos (nombre, descripcion, precio);",
//         [this.nombre, this.descripcion, this.precio, this.stock]
//       );
//       return {
//         id: result.insertId,
//         nombre: this.nombre,
//         descripcion: this.descripcion,
//         precio: this.precio,
//       };
//     } catch (error) {
//       throw new Error("error al crear productos");
//     }
//   }
// }

export class Categoria {
  // constructor(nombre, descripcion) {
  //   this.nombre = nombre;
  //   this.descripcion = descripcion;
  // }

  async getAll() {
    try {
      const [rows] = await conetion.query("SELECT * FROM categorias;");
      return rows;
    } catch (error) {
      throw new Error("error al obtener categorias");
    }
  }
  async create(nombre, descripcion) {
    try {
      const [result] = await conetion.query(
        "INSERT INTO categorias(nombre,descripcion)VALUES(?,?)",
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

  async update(nombre, descripcion, id) {
    try {
      console.log("de la clase", nombre, descripcion, id);
      const [result] = await conetion.query(
        `UPDATE categorias SET nombre = ? ,descripcion = ? WHERE id = ?`,
        [nombre, descripcion, id]
      );
      if (result.affectBows === 0) {
        throw new Error("categoria no encontrada");
      }
      return {
        id,
        nombre,
        descripcion,
      };
    } catch (error) {
      throw new Error("Error al crear la categoria");
    }
  }
  async patch(nombre, descripcion, id) {
    try {
      console.log("del dia", nombre, descripcion, id);
      const [result] = await conetion.query(
        `UPDATE categorias SET nombre = ? ,descripcion = ? WHERE id = ?`,
        [nombre, descripcion, id]
      );
      if (result.affectBows === 0) {
        throw new Error("categoria no encontrada");
      }
      return {
        id,
        nombre,
        descripcion,
      };
    } catch (error) {
      throw new Error("errroca cateogoria");
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
        `delete from categorias WHERE id = ?`,
        [id]
      );
      if (result.affectedRows == 0) {
        throw new Error("categoria no encontrada");
      }
      return { error: "eliminmado correctamente" };
    } catch (error) {
      throw new Error(error.message || "error al eliminar la categoria");
    }
  }
}
