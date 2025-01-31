"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var productoControl_1 = require("../control/productoControl");
router.get("/productos", productoControl_1.obtenerProductos);
router.get("/product/:id", productoControl_1.obtenerProducto);
router.post("/createProduct", productoControl_1.crearProducto);
router.put("/updateProduct/:id", productoControl_1.actualizarProducto);
router.delete("/deleteProduct/:id", productoControl_1.eliminarProducto);
router.post("/search", productoControl_1.busquedaProd);
exports.default = router;
