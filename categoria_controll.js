import req from "express/lib/request.js";
import categoria from "./rutas/categoria.js";
import res from "express/lib/response.js";

class categoria_controll {
  static getAllcategorias = async (req, res) => {
    const obj_categoria = new categoria();
    const categorias = await obj_categoria.getAll();
    res.json(categorias);
  };
  static createCategoria = async (req, res) => {
    try {
      const { nombre, descripcion } = req.body;
      const obj_categoria = new categoria();
      const categoria = await obj_categoria.create(nombre, descripcion);
      res.status(201);
      json(categoria);
    } catch (error) {
      res.status(500).json();
    }
  };
}

export default categoria_controll;
