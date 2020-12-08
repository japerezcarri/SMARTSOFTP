  
import { Router } from "express";
const router = Router();

import {
  obtenerProductos,
  obtenerProducto,
  crearProducto,
  actualizarProducto,
  eliminarProducto 
} from "../control/productoControl";

router.get("/productos", obtenerProductos);
router.get("/product/:id", obtenerProducto);
router.post("/createProduct", crearProducto);
router.put("/updateProduct/:id", actualizarProducto);
router.delete("/deleteProduct/:id", eliminarProducto); 
router.get("/getImgProduct")


export default router;