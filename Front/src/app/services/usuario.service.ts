import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable()
export class UsuarioService {

  sesion: boolean = false;
  admin: boolean = false;
  nombreUs: string;


  url = 'http://localhost:3000/'

  public identidad; //variable de sesion

  constructor(
    private _http: HttpClient
  ) { }
  // registrar usuario 
  registrarUsuario(usuarioNuevo) {
    let params = JSON.stringify(usuarioNuevo);
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
   
    return this._http.post(
      this.url + 'registro', params, options).pipe(map(res => res));
  }

  iniciarSesion(usuarioLogueado) {
    let params = JSON.stringify(usuarioLogueado);
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this._http.post(
      this.url + 'login',
      params,
      options
    ).pipe(map(res => res));
  }
  //------------------------------------------
  //Declarar el metodo del servicio obtenerNombreUsuaario
  obtenerNombreUsuario() {
    /*En la varible identidad recogemos los datos
    de nuestro usuario una vez que haya iniciado sesion.
    Estos datos se encuentrar en el local storage */
    let usuarioAutorizado = JSON.parse(localStorage.getItem('sesion'));
    if (usuarioAutorizado != 'undefined') {
      this.identidad = usuarioAutorizado;
    } else {
      this.identidad = null;
    }
    return this.identidad;
  }
  //-----------------------------------------------------
  //Declarar el metodo del servicio editarUsuario

  editarUsuario(id, usuarioActualizado) {
    let params = JSON.stringify(usuarioActualizado);
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this._http.put(
      this.url + 'updateUser/' + id,
      params,
      options
    ).pipe(map(res => res));
  }


  eliminarUsuario(id) {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    return this._http.delete(
      this.url + 'deleteUser/' + id,
      options
    ).pipe(map(res => res));
  }
}
