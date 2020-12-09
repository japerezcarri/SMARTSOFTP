import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Usuario } from "../modelo/Usuario";

export const obtenerUsuarios = async (
  req: Request, res: Response
): Promise<Response> => {
  const usuario = await getRepository(Usuario).find();
  return res.json(usuario);
};

export const obtenerUsuario = async (
  req: Request, res: Response
): Promise<Response> => {
  const usuario = await getRepository(Usuario).findOne(req.params.id);
  return res.json(usuario);
};

export const login = async (
  req: Request, res: Response
): Promise<Response> => {
  var parametros = req.body;
  var cont = parametros.contrasena;
  const usuario = await getRepository(Usuario).findOne(req.params.correo);
  if (!usuario) {
    return res.json({ msg: 'El usuario no existe' });
  } else {
    if (usuario.contrasena != cont) {
      return res.json({ msg: 'Contraseña incorrecta' });
    } else {
      return res.json(usuario);
    }
  }

};

export const registrarUsuario = async (
  req: Request, res: Response
): Promise<Response> => {
  const nUsuario = getRepository(Usuario).create(req.body);
  const usu = await getRepository(Usuario).save(nUsuario);

  return res.json(usu);

};

export const actualizarUsuario = async (
  req: Request, res: Response
): Promise<Response> => {
  const usuarioA = await getRepository(Usuario).findOne(req.params.id);
  if (usuarioA) {
    getRepository(Usuario).merge(usuarioA, req.body);
    const resultado = await getRepository(Usuario).save(usuarioA);
    return res.json(resultado);
  } else {

    return res.json({ msg: 'Not user found' });
  }
};

export const eliminarUsuario = async (
  req: Request, res: Response
): Promise<Response> => {
  const resultado = await getRepository(Usuario).delete(req.params.id);
  return res.json(resultado);
};



