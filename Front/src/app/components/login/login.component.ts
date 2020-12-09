import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
// Importar el modelo
import { Usuario } from '../../model/usuario'
// Importar el servicio
import { UsuarioService } from '../../services/usuario.service';
// Importar el manejo de rutas
import { Router, ActivatedRoute, Params } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
   @ViewChild('logincont') Login;
  @ViewChild('container') Container; 

  // Declaración variable de usuario
  public login: Usuario; 

  // Declaración variable de identidad
  public identidad;


  constructor(
    private usuarioService: UsuarioService,
    private _router: Router
    
  ) {
    this.login = new Usuario(0,'','','','');
   }

   public sesion = JSON.parse(localStorage.getItem('sesion'));

  ngOnInit(): void {
  }
  //  Metodo iniciar sesio o Login

  loginUsuario() {
    console.log("aca");
    console.log(this.login);

    this.usuarioService.iniciarSesion(this.login).subscribe(
      (response: any)=>{
        // console.log(response)
        let usuario = response;
        this.login = usuario;

        if (this.login) {
          let usuarioLogueado = new Usuario(
            this.login.id,
            this.login.nombre,
            this.login.apellido,
            this.login.correo,
            this.login.contrasena,
          );

          // Crear localStorage
          localStorage.setItem('sesion',JSON.stringify(usuarioLogueado));
          // Consumir el servicio obtenerNombreUsuario
          this.identidad = this.usuarioService.obtenerNombreUsuario();

          alert(`Hola ${this.identidad.nombre}. Empieza a disfurtar de nuestros productos!`);
          this.usuarioService.sesion = true;
          this.usuarioService.nombreUs = this.identidad.nombre;

         

          // Redirección al perfil
           alert(this.usuarioService.sesion);
          this._router.navigate(['/home']);
        } else{

          alert("Usuario no identificado")
          this.login = new Usuario(0,'', '', '',  '');
        }
        // Cierre validación
      },error =>{
        if(error != null){
          console.log(error);
        }
      }
    );  
  }

}
