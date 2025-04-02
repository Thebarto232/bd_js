import { Categoria } from "../modelo/categoria.js";

class categoria_controll {
  static getAllcategorias = async (req, res) => {
    const obj_categoria = new Categoria();
    const categorias = await obj_categoria.getAll();
    res.json(categorias);
  };
  static createCategoria = async (req, res) => {
    try {
      const { nombre, descripcion } = req.body;
      const obj_categoria = new categoria();
      const categoria = await obj_categoria.create(nombre, descripcion);
      res.status(500).json();
      json(categoria);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static actualizarcategoria = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    try {
      const obj_categoria = new Categoria();
      const categorias = await obj_categoria.update(nombre, descripcion, id);
      res.json(categorias);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static patch = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    try {
      const obj_categoria = new Categoria();
      const categoria = await obj_categoria.patch(nombre, descripcion, id);
      res.json(categoria);
    } catch (error) {
      res.json(500).json({ error: error.message });
    }
  };
}

export default categoria_controll;
