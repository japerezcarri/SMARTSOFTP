import {Producto} from 'src/app/model/producto';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label,Color } from 'ng2-charts';
import {AppModule} from 'src/app/app.module';

import { ProductoService } from '../../services/producto.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public listaProductos: any;
  public categorias: string[]=[];
  public poCategorias:number[]= [];


  constructor(private productoService: ProductoService) { 
    this.ListarProductos();
  }
  
  ngOnInit() {
    this.ListarProductos();

  }

  //funcion de listar productos
  ListarProductos() {
    this.productoService.listarProductos().subscribe((response: any) => {
      this.listaProductos = response;

      const m = this.listaProductos.map((item) => {
       
        if(this.categorias.includes(item.categoria)){
          console.log(this.categorias.findIndex(cat=> cat===item.categoria));
          this.poCategorias[this.categorias.findIndex(cat=> cat===item.categoria)]++;
        }else{
          this.categorias.push(item.categoria);
          this.poCategorias.push(1);
        } 
        
      
      });
      console.log(this.categorias);
      console.log(this.poCategorias);
    });


  }



}


