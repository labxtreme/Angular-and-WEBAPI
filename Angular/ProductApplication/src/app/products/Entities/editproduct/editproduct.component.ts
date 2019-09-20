import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import {FormBuilder, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl} from "@angular/forms"
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  productidtoedit:any;
  editprocedureform:FormGroup;
  producttoedit;
  constructor(private route :ActivatedRoute, private pserv:ProductService, private fb:FormBuilder, private router:Router)
   {  
    this.route.params.subscribe((data)=>{
      this.productidtoedit=data.id;
    })

  
    this.editprocedureform=new FormGroup({
      ProductId:new FormControl([Validators.required]),
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

  ngOnInit() {
  
    this.productbyid();
    
   
  }

  editProd(element){
    this.editprocedureform=this.fb.group({
      ProductId:[element.ProductID,[Validators.required]],
      Title:[element.Title,[Validators.required, Validators.maxLength(50)]],
      Price: [element.Price,Validators.required],
      Color:[element.Color,Validators.required],
      Quantity:[element.Quantity,Validators.required],
      inStock:[element.inStock,Validators.required],
      Details:[element.Details,Validators.required],
      Rating:[element.Rating,Validators.required],
      ExpiryDate:[element.ExpiryDate,Validators.required],
      ImageUrl:[element.ImageUrl,Validators.required]
    })
  }
prod;

  updateProduct()
  {   this.route.params.subscribe((data)=>{
    this.productidtoedit=data.id;
    this.pserv.putProduct(this.productidtoedit,this.editprocedureform.value).subscribe(data1=>{
      this.prod=data1;
    })
  })
  
  this.router.navigate(['products'])
  

  }
  productbyid(){
    this.pserv.getproductbyid(this.productidtoedit).subscribe(data=>{
      this.producttoedit=data;
      this.editProd(this.producttoedit);
    })
  }
  
  Goback():void{
    this.router.navigate(['home'])
  }


  changeinstock(newValue) {
  
    if(newValue>0)
    {
      console.log(newValue)
      this.editprocedureform.get('inStock').setValue(true);
    }
    else{
      this.editprocedureform.get('inStock').setValue(false)
    }
  } 
  
}
