import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//material
import {MaterialModule}from './material/material.module'
//componentes
import { ProductoComponent } from './components/producto/producto.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

// modulo formularios
import {FormsModule} from '@angular/forms';
// modulo de httpClientModule
import {HttpClientModule} from '@angular/common/http';
//servicios
import{ProductoService} from './services/producto.service'
import{UsuarioService} from './services/usuario.service';
//import {UsuarioService}from './services/usuario.service';
import { from } from 'rxjs';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    SideBarComponent,
    LoginComponent,
    RegistroComponent,
    NavBarComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
    
   
  ],
  providers: [
    ProductoService, UsuarioService
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
