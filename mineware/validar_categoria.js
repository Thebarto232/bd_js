export const validar_categoria = (req, res, next) => {
  const { nombre, descripcion } = req.body;

  if (!nombre || nombre.trim() == "") {
    return res
      .status(400)
      .json({ mensaje: "EL NOMBRE EN LA CATEGORIA ES OBLIGATORIO" });
  }
  if (!descripcion || descripcion.trim() == "") {
    return res
      .status(400)
      .json({ mensaje: "LA DESCRIPCION EN LA CATEGORIA ES OBLIGATORIO" });
  }
  next();
};
