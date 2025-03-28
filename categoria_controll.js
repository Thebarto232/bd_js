import categoria from "./rutas/categoria.js";

class categoria_controll {
  static getAllcategorias = async (req, res) => {
    const obj_categoria = new categoria();
    const categorias = await obj_categoria.getAll();
    res.json(categorias);
  };
}

export default categoria_controll;
