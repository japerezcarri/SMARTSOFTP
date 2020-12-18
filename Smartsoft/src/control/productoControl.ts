import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Producto } from "../modelo/Producto";
const redis =require('redis');



export const obtenerProductos = async (
  req: Request, res: Response
): Promise<Response> => {
  const productos = await getRepository(Producto).find({
    order: {
      id: "ASC",
    }
  });
  return res.json(productos);
};



export const obtenerProducto = async (
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
  } else {
    return res.json({ msg: 'No se encuentra producto' });
  }
};

export const eliminarProducto = async (
  req: Request, res: Response
): Promise<Response> => {
  const prodA = await getRepository(Producto).delete(req.params.id);
  return res.json(prodA);
};

export const busquedaProd = async (
  req: Request, res: Response
): Promise<Response> => {
  var parametros = req.body;
  var busqueda = parametros.busqueda;
  const prodA = await getRepository(Producto).find({
    where: [{ nombre: busqueda },
    { categoria: busqueda }]
  });
  return res.json(prodA);
};






