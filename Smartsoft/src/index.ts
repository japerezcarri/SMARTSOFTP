 import 'reflect-metadata';
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import {createConnection} from 'typeorm'

import productosRutas from './rutas/productosRutas'
import usuarioRutas from    './rutas/usuarioRutas'
export const redis=require('redis');



//servidor
const app=express();
const port=3000;

export const client=redis.createClient({
  host: 'redis-server',
  port: 6379
});

 client.on('connect', function(){
  console.log('Conected to redis');
  });


  //ejemplo
  client.set('visits',0);
  //defining the root endpoint
  app.get('/', (req, res) => {
  client.get('visits', (err:any, visits:any) => {
      res.send('Number of visits is: ' + visits + 1)
      client.set('visits', parseInt(visits) + 1)
  })
})

createConnection();

//MIDLEWARES
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));



//routes
app.use(productosRutas);
app.use(usuarioRutas);

app.listen(port);
console.log('Puerto: '+ port); 

