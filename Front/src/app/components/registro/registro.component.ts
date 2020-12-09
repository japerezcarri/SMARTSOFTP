import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public usuarioModel: Usuario;
  public url: String;

  @ViewChild('tyc') tyc: ElementRef;
  public cedula: String;
  public nombre: String;
  public apellido: String;
  public correo: String;
  public contrasena: String;
  public notificacion: String;

  constructor(private usuarioService: UsuarioService, private _router: Router) {
    this.usuarioModel = new Usuario(0, '', '', '', '');
  }

  ngDoCheck() {
    this.cedula = this.usuarioModel.id.toString();
    this.nombre = this.usuarioModel.nombre;
    this.apellido = this.usuarioModel.apellido;
    this.correo = this.usuarioModel.correo;
    this.contrasena = this.usuarioModel.contrasena;


  }

  ngOnInit(): void {
  }
  validarFormulario() {
    if (this.nombre === "") {

      alert("Por favor llena el campo nombre");
    } else {
      if (this.apellido === "") {

        alert("Por favor llena el campo apellido");
      } else {

        if (this.correo === "") {

          alert("Por favor llena el campo de correo");
        } else {
          if (this.contrasena == "") {

            alert("Por favor llena el campo de contraseña")

          }else{
            this.registrarUsuario();
          }
        }
      }
    }
  }



  registrarUsuario() {
    this.usuarioService.registrarUsuario(this.usuarioModel).subscribe(
      (response: any) => {
        if (response) {
          let usuario = response;
          // this.usuarioService = usuario;
          if (!usuario.id) {

            alert("Error al registrate");
          } else {
  
            alert(`Te registraste correctamente! inicia sesion con ${usuario.correo}`);
            this.usuarioModel = new Usuario(0,'','','','');
            this._router.navigate(['/']);
          }
        } else {
        alert(response);
        }
      }, error => {
        var errorMensaje = <any>error;
        if (errorMensaje != null) {
          console.log(error);
        }
      }
    );

  }
  

}
