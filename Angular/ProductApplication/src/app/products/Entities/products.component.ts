import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProductService } from './product.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, AfterViewInit {

 
  products;
  constructor(private serv:ProductService, private router:Router,private route :ActivatedRoute,) { 
  }

  ngAfterViewInit()
  { 
    setTimeout(() => this.serv.getproducts().subscribe(data=>{
      this.products=data;
      console.log(data);
    }), 200)
    
  }
  ngOnInit() {
  
    this.serv.getproducts().subscribe(data=>{
      this.products=data
    });
  }

  editproduct(id):void{
    this.router.navigate(['editproduct',id])
    
  }
  
  DeleteProd(id):void{
    this.router.navigate(['delproduct',id])
  }
}
