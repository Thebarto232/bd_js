import conetion from "../utiles/database.js";
class producto {
  constructor(nombre, descripcion, precio, stock) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.stock = stock;
  }

  async getAll() {
    try {
      const [rows] = await connection.query("SELECT * FROM productos;");
      return rows;
    } catch (error) {
      throw new Error("error al obtener productos");
    }
  }

  async create() {
    try {
      const [result] = await connection.query(
        "INSERT INTO productos (nombre, descripcion, precio, stock) VALUES (?, ?, ?, ?)",
        [this.nombre, this.descripcion, this.precio, this.stock]
      );

      return {
        id: result.insertId,  // Usamos insertId para obtener el ID generado automáticamente
        nombre: this.nombre,
        descripcion: this.descripcion,
        precio: this.precio,
        stock: this.stock,
      };
    } catch (error) {
      throw new Error("error al crear productos");
    }
  }
}




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
