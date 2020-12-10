import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes
import {ProductoComponent} from './components/producto/producto.component';
import { RegistroComponent } from './components/registro/registro.component';
import{LoginComponent} from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'producto',component:ProductoComponent},
  {path: 'dashboard',component:DashboardComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
