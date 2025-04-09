import { Producto } from "../modelo/productos.js";

class producto_controll {
  static getAllproductos = async (req, res) => {
    const obj_producto = new Producto();
    const producto = await obj_producto.getAll();
    res.json(producto);
  };
  static createproductos = async (req, res) => {
    try {
      const { nombre, descripcion, precio, categorias_id } = req.body;
      const obj_producto = new Producto();
      const producto = await obj_producto.create(
        nombre,
        descripcion,
        precio,
        categorias_id
      );
      res.json(producto);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static actualizarproductos = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, precio, categorias_id } = req.body;
    try {
      const obj_producto = new Producto();
      const producto = await obj_producto.update(
        nombre,
        descripcion,
        precio,
        categorias_id,
        id
      );
      res.json(producto);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static patch = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, precio, categorias_id } = req.body;
    try {
      const obj_producto = new Producto();
      const producto = await obj_producto.patch(
        nombre,
        descripcion,
        precio,
        categorias_id,
        id
      );
      res.json(producto);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static deleteproductos = async (req, res) => {
    const { id } = req.params;
    try {
      const obj_producto = new Producto();
      const producto = await obj_producto.delete(id);
      res.json(producto);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}
export default producto_controll;
