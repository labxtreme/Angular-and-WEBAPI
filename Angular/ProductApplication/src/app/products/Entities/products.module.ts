import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { DelproductComponent } from './delproduct/delproduct.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductService } from './product.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductsComponent } from './products.component';
import { ProductFilterPipe } from '../productfilter.pipe';


const productroutes:Routes = [
  {path:'products',component:ProductsComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'delproduct/:id',component:DelproductComponent},
  {path:'editproduct/:id',component:EditproductComponent},
];


@NgModule({
  declarations: [AddproductComponent, EditproductComponent, DelproductComponent, ProductsComponent,ProductFilterPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(productroutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[ProductService]
})
export class ProductsModule { }
