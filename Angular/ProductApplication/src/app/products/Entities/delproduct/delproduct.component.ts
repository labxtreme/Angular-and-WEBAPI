import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delproduct',
  templateUrl: './delproduct.component.html',
  styleUrls: ['./delproduct.component.css']
})
export class DelproductComponent implements OnInit {
  delprocedureform: FormGroup;
  productidtoedit: number;
  producttodel;
  constructor(private route :ActivatedRoute,private serv:ProductService, private router:Router) { }

  ngOnInit() 
  {
    this.route.params.subscribe((data)=>{
      this.productidtoedit=data.id;
    })
    this.serv.getproductbyid(this.productidtoedit).subscribe(data=>{
      this.producttodel=data;})
    this.delprocedureform=new FormGroup({

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

delProduct(){
  this.route.params.subscribe((data)=>{
    this.serv.deleteProduct(data.id).subscribe(data=>{
    this.producttodel=data;
  });
})
this.router.navigate(['products'])
}
Goback():void{
  this.router.navigate(['home'])
}

}

