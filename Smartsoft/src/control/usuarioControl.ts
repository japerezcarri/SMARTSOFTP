import { Request, Response } from "express";
import { format } from "morgan";
import { getRepository } from "typeorm";
import { Usuario } from "../modelo/Usuario";
import { client, redis } from "../index";


export const obtenerUsuarios = async (
  req: Request, res: Response
): Promise<Response> => {
  const usuario = await getRepository(Usuario).find();
  const listU = res.json(usuario);

  for (let us of usuario) {
    let nom = us.nombre;
    let ap = us.apellido;
    let email = us.correo;
    let id = us.id;
    let pass=us.contrasena;
    
   
    client.hmset(id,
      {
        'nombre': nom,
        'apellido':ap ,
        'correo': email,
        'contrasena': pass
      });

      
   
  }
 

  /*/
  let nom = usuario[0].nombre;
  let ap = usuario[0].apellido;
  let email = usuario[0].correo;
  let id = usuario[0].id;

  client.set("nombre", nom, redis.print);

  client.get("nombre", redis.print);

  client.hmset('test',
    {
      'nombre': nom,
      'apellido': ap,
      'correo': email
    });
  client.hmset('test2',
    ['nombre2', nom,
      'apellido2', ap,
      'correo2', email
    ]);
  client.hgetall('test', function (err: any, object: any) {
    if (err) {
      console.log(err);
    }
    console.log(object);
  });
  client.hgetall('test2', function (err: any, object: any) {
    if (err) {
      console.log(err);
    }
    console.log(object);
  });
  client.sadd(['lenguajes', 'css', 'nodejs', 'angular'], function (err: any, reply: any) {
    if (err) {
      console.log(err);
    }
    console.log(reply); 
  });

  client.smembers('lenguajes', function (err: any, reply: any) {
    if (err) {
      console.log(err);
    }
    console.log(reply);
  });

 */
  return res.json(usuario)

};





export const obtenerUsuario = async (
  req: Request, res: Response
): Promise<Response> => {
  /* const usuario = await getRepository(Usuario).findOne(req.params.id);
  console.log(usuario); */
  const usuario=client.hgetall(req.params.id, function (err: any, object: any) {
    if (err) {
      console.log(err);
    }
      console.log(object);
  });
  
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



