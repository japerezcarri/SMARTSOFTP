import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes
import {ProductoComponent} from './components/producto/producto.component';
const routes: Routes = [
  {path:'', component: ProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
