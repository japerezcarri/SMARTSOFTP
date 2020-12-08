import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//componentes
import { ProductoComponent } from './components/producto/producto.component';
//import { SlideBarComponent } from './components/slide-bar/slide-bar.component';
//import { LoginComponent } from './components/login/login.component';
//import { RegistroComponent } from './components/registro/registro.component';


// modulo formularios
import {FormsModule} from '@angular/forms';
// modulo de httpClientModule
import {HttpClientModule} from '@angular/common/http';
//servicios
import{ProductoService} from './services/producto.service'
//import {UsuarioService}from './services/usuario.service';

import { from } from 'rxjs';

//import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
