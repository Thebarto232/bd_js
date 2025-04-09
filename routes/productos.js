import express from "express";
import producto_controll from "../controller/productos_control.js";

const router = express.Router();
router.get("/", producto_controll.getAllproductos);
router.post("/", producto_controll.createproductos);
router.put("/:id", producto_controll.actualizarproductos);
router.delete("/:id", producto_controll.deleteproductos);
router.patch("/", producto_controll.patch);
export default router;
