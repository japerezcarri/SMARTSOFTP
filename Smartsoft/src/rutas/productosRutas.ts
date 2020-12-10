  
import { Router } from "express";
const router = Router();

import {
  obtenerProductos,
  obtenerProducto,
  crearProducto,
  actualizarProducto,
  eliminarProducto, 
  busquedaProd
} from "../control/productoControl";

router.get("/productos", obtenerProductos);
router.get("/product/:id", obtenerProducto);
router.post("/createProduct", crearProducto);
router.put("/updateProduct/:id", actualizarProducto);
router.delete("/deleteProduct/:id", eliminarProducto); 
router.post("/search", busquedaProd)


export default router;