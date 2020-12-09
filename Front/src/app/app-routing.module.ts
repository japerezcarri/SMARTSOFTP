import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes
import {ProductoComponent} from './components/producto/producto.component';
import { RegistroComponent } from './components/registro/registro.component';
import{LoginComponent} from './components/login/login.component';
import{AppComponent} from './app.component';
import {SideBarComponent}from './components/side-bar/side-bar.component';

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'home',component:SideBarComponent},
  /* {path:'producto',component:ProductoComponent}, */
  {path:'/auxRouter',component:ProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
