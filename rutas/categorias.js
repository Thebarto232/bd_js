import express from "express";
import categoria_controll from "../categoria_controll.js";

const router = express.Router();
router.get("/", categoria_controll.getAllcategorias);

router.post("/", (req, res) => {
  console.log(req.body);
});

router.put("/id", (req, res) => {
  console.log(req.body);
}); /**la ruta no se importa se coloca espesificamente no se imprime */

export default router;
