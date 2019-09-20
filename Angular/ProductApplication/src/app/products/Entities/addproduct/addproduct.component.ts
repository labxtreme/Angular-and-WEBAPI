import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Product } from '../product.entity';
import { ProductService } from '../product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  addprocedureform:FormGroup;
  constructor(private serv:ProductService, private cd: ChangeDetectorRef,private router:Router) { }

  stock=false;
  ngOnInit() {
    
    this.addprocedureform=new FormGroup({

      ProductId:new FormControl(null,[Validators.required]),
      Title:new FormControl(null,[Validators.required, Validators.maxLength(50)]),
      Price: new FormControl(null,[Validators.required]),
      Color:new FormControl(null,[Validators.required]),
      Quantity:new FormControl(null,[Validators.required]),
      inStock:new FormControl(null,[Validators.required]),
      Details:new FormControl(null,[Validators.required]),
      Rating:new FormControl(null,[Validators.required]),
      ExpiryDate:new FormControl(null,[Validators.required]),
      ImageUrl:new FormControl(null,[Validators.required])

  })
}
changeinstock(newValue) {
  
  if(newValue>0)
  {
    this.addprocedureform.get('inStock').setValue(true);
  }
  else{
    this.addprocedureform.get('inStock').setValue(false)
  }
} 
prod;
  ADDProduct(addprod:Product){
    this.serv.Postproducts(addprod).subscribe(data=>{
      this.prod=data;
      console.log(this.prod);
    })
    this.router.navigate(['products'])
  }

}
