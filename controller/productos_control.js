import { producto } from "../modelo/productos";

class producto_controll {
  static getAllcategorias = async (req, res) => {
    const obj_categoria = new Categoria();
    const categorias = await obj_categoria.getAll();
    res.json(categorias);
  };
}
export default producto_controll;
