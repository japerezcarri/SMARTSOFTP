import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
 //variable de la ruta de la api
 url="http://localhost:3000/";

 constructor(
   private _http: HttpClient,
 ) { }

 /* Servicios */
 //registrar nuevo producto
 registrarP(nProducto){
   let params= JSON.stringify(nProducto);
   let options={
     headers: new HttpHeaders({'Content-type': 'application/json'})
   };
   return this._http.post(
     this.url+ 'createProduct',
     params,
     options
   ).pipe(map(res=>res));
 }

  //servicio actualizar producto
  actualizarP(prodActualizar, id) {
    let params = JSON.stringify(prodActualizar);
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this._http.put(
      this.url + 'updateProduct/' + id,
      params,
      options
    ).pipe(map(res => res));
  }
  // servicio eliminar producto
  eliminarP(id) {

    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this._http.delete(
      this.url + 'deleteProduct/' + id,
      options
    ).pipe(map(res => res));
  }
 /*  //servicio cargar imagen del producto
  cargarImagenProducto(file: File, id) {
    let formData = new FormData();
    formData.append('imagenp', file);
    return this._http.put(
      this.url +'imgProduct/' + id,
      formData
    ).pipe(map(res => res));
  } */
 /*  obtenerImagenProduct(file)
  {
    return this._http.get(this.url+'obtenerImgProduct/'+file).pipe(map(res => res));
  } */

   //servicio traer todas las canciones orden asc
  listarProductos()
  {
    return this._http.get(
      this.url+'productos'
      ).pipe(map(res=>res));
  }
  buscarProducto(id)
  {
    return this._http.get(
      this.url+'product/'+id
      ).pipe(map(res=>res));
  } 

/*   filtrarProducto(busqueda)
  {
    let params = JSON.stringify(busqueda);
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this._http.post(this.url+'searchProduct',params,options).pipe(map(res=>res));
  } */
 

}