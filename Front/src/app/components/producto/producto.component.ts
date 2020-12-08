import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {Router} from '@angular/router';
import {Producto} from 'src/app/model/producto';
import {Usuario} from 'src/app/model/usuario';
import {ProductoService} from 'src/app/services/producto.service';
import { from } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @ViewChild('imgProd') img:ElementRef;
  
  //public identidad: Usuario;
  public productoActual: Producto;
  public url:String;
  //public archivoSubirImg:File;
  public listaProductos: any;

  constructor(private productoService: ProductoService,private _router:Router){
    this.productoActual= new Producto(0,'','',0,0);
    this.url= productoService.url;
    
  }
  //columnas: string[] = ['codigo', 'descripcion', 'precio'];
  columnas: string[]=['id','nombre','categoria','precio','inventario'];

  dataSource = null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

 
  ngOnInit() {
       this.ListarProductos();
       
  } 
 
  ngOnDoCheck(){
    
  }
  ngAfterViewInit()
  {      
    /* if(localStorage.getItem('sesion'))
    {
      this.identidad = JSON.parse(localStorage.getItem('sesion'));
      console.log(this.identidad.rol);
      if(this.identidad.rol == 'administrador' || this.identidad.rol == 'Administrador')
      {
        
      }else{
        this._router.navigate(['/home']);
      }
    }else{
      this._router.navigate(['/home']);
    } */
  }

  ngDoCheck()
  {
    /* if(this.productoActual.image)
    {
      this.img.nativeElement.src = this.url+'getImgProduct/'+this.productoActual.image;
    } */
  }
  /* -----------------------------Funciones ------------------------------ */
   //procesar formulario
  ProcesarFormulario(){
    
    if(!this.productoActual.id)//validar si el formulario tiene un id
    {
      //agregar
      this.productoService.registrarP(this.productoActual).subscribe(
        (response:any)=>{
          let newProduct=response;
          //console.log(newProduct);
          if(!newProduct.id)
          {
            alert("Error al registrar el producto");

          }else{
            //reasignacion 
          this.productoActual = newProduct;
          //subir img del producto
          /* this.subirarchivos(newProduct._id);*/
          alert(`se ha creado correctamente ${newProduct.nombre}`);
          }
        });
    
    }else{
      //modificar
      this.productoService.actualizarP(this.productoActual,this.productoActual.id).subscribe(
        (response:any)=>{
          let modProducto=response;
          if(!modProducto.id)
          {
            alert("Error al modificar el producto");

          }else{
          this.productoActual = modProducto;
          //this.subirarchivos(modProducto.id);---imagen del producto
          alert(`se ha modificado correctamente ${modProducto.nombre}`);
          }
        });

    }
      
    this.ListarProductos();
      
  }

  /* subirarchivos(id)
  {
      if(this.archivoSubirImg)
          {
              this.peliculaService.cargarImagenPeli(this.archivoSubirImg,id).subscribe(
                (resImg:any)=>{
                  this.productoActual.image = resImg.imagen;
                  this.img.nativeElement.src = this.url+'getMovieImage/'+this.peliculaTrabajada.image;
              });
          }

          if(this.archivoSubirTrailer)
          {
            this.peliculaService.cargarTrailer(this.archivoSubirTrailer,id).subscribe(
              (resVid:any)=>{
                this.peliculaTrabajada.trailer = resVid.video;

                this.vid.nativeElement.src = this.url+'getMovieTrailer/'+this.peliculaTrabajada.trailer;
            });
          }
          
  }

// función dubir archivo de imagen del producto
  subirArchivoImg(file:any){
    this.archivoSubirImg = <File>file.target.files[0];
  }

  */
  deleteId(){
    this.productoActual = new Producto(0,'','',0,0);
    //this.img.nativeElement.src='';
  }
  
  //funcion de listar productos
  ListarProductos(){
    this.productoService.listarProductos().subscribe(
      (response:any)=>{
        this.listaProductos = response;
        console.log(this.listaProductos);
        this.dataSource = new MatTableDataSource<Producto>(this.listaProductos);
        this.dataSource.paginator = this.paginator;
      }
    );
  }
  /*
  //función de buscar películas
  buscarPelicula(find){
    let parametro = {busqueda:find};
    this.productoService.filtrarPeli(parametro).subscribe(
      (respuesta:any)=>
      {
        console.log(respuesta);
        this.listaPeliculas = respuesta.movie;
      }
    );
  }*/
//mostrar producto
  mostrarProducto(id){
    this.productoService.buscarProducto(id).subscribe(
      (response:any)=>{
        this.productoActual = response;
      }
      );
  }
  //eliminar producto
  delProducto(id){
    this.productoService.eliminarP(id).subscribe(
      (response:any)=>{
            
        alert( "se ha elimiado el producto"+response.nombre);
      }
      );
      this.deleteId();
      this.ListarProductos();
  }
 
}
 export class Articulo {
  constructor(public codigo: number, public descripcion: string, public precio: number) {
  }
} 
