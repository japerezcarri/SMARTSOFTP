import { Router } from "express";
const router = Router();

import {
  obtenerUsuario,
  obtenerUsuarios,
  registrarUsuario,
  actualizarUsuario,
  eliminarUsuario,
  login
} from "../control/usuarioControl";

router.get("/usuarios", obtenerUsuarios);
router.get("/usuario/:id", obtenerUsuario);
router.post("/registro", registrarUsuario);
router.put("/updateUser/:id", actualizarUsuario);
router.delete("/deleteUser/:id", eliminarUsuario); 
router.get("/login/:correo",login);


export default router;