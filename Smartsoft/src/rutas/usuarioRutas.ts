import { Router } from "express";
const router2 = Router();

import {
  obtenerUsuario,
  obtenerUsuarios,
  registrarUsuario,
  actualizarUsuario,
  eliminarUsuario,
  login
} from "../control/usuarioControl";

router2.get("/usuarios", obtenerUsuarios);
router2.get("/usuario/:id", obtenerUsuario);
router2.post("/registro", registrarUsuario);
router2.put("/updateUser/:id", actualizarUsuario);
router2.delete("/deleteUser/:id", eliminarUsuario); 
router2.post("/login",login);


export default router2;