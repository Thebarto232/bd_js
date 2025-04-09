import express from "express";
import categoria_controll from "../controller/categoria_controll.js";

const router = express.Router();
router.get("/", categoria_controll.getAllcategorias);

router.post("/", categoria_controll.createCategoria);

router.put(
  "/:id",
  categoria_controll.actualizarcategoria
); /**la ruta no se importa se coloca espesificamente no se imprime */
router.patch("/:id", categoria_controll.patch);
router.delete("/:id", categoria_controll.deleteCategoria);
export default router;
