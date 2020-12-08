import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Producto } from "../modelo/Producto";

export const obtenerProductos = async (
  req: Request, res: Response
): Promise<Response> => {
  const product = await getRepository(Producto).find();
  return res.json(product);
};

export const obtenerProducto= async (
  req: Request, res: Response
): Promise<Response> => {
  const prod = await getRepository(Producto).findOne(req.params.id);
  return res.json(prod);
};

export const crearProducto = async (
  req: Request, res: Response
): Promise<Response> => {
  const nProducto = getRepository(Producto).create(req.body);
  const prod = await getRepository(Producto).save(nProducto);
  return res.json(prod);
};

export const actualizarProducto = async (
  req: Request, res: Response
): Promise<Response> => {
  const prodA = await getRepository(Producto).findOne(req.params.id);
  if (prodA) {
    getRepository(Producto).merge(prodA, req.body);
    const resultado = await getRepository(Producto).save(prodA);
    return res.json(resultado);
  }

  return res.json({msg: 'Not user found'});
};

export const eliminarProducto = async (
  req: Request, res: Response
  ): Promise<Response> => {
  const prodA = await getRepository(Producto).delete(req.params.id);
  return res.json(prodA);
};



 