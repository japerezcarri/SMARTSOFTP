import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
//import {MatDialog} from '@angular/material/dialog';

import { AceptarComponent } from '../dialog/aceptar/aceptar.component';


const material=[
  MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    //MatDialog,
    MatButtonModule,
    
]
@NgModule({
  declarations: [
    AceptarComponent
  ],
  imports: [
    CommonModule,
    material
  ],
  exports:[
    material
  ],
  entryComponents:[AceptarComponent]
})
export class MaterialModule { }
