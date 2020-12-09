 import 'reflect-metadata';
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import {createConnection} from 'typeorm'

import productosRutas from './rutas/productosRutas'
import usuarioRutas from    './rutas/usuarioRutas'

//servidor
const app=express();
const port=3000;

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

