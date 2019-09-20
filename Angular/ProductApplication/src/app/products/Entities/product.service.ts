import { Injectable } from '@angular/core';
import { Product } from './product.entity';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {tap,catchError} from 'rxjs/operators';
import {throwError, Observable} from 'rxjs';

@Injectable()
export class ProductService {

  producturl='https://localhost:44307/api/Products';
  headersa = new HttpHeaders().set('Content-Type', 'application/json').set('Accept','application/json');
  httpOptions = {
    headers: this.headersa
  };


  
  constructor(private http : HttpClient) { }

  private handleError(error: any){
    console.error(error);
    return throwError(error);
  }


  Postproducts(prod:Product):Observable<Product>{
    console.log(prod)
    return this.http.post<Product>(this.producturl,prod,this.httpOptions).pipe(tap(data=>console.log(data)),catchError(this.handleError))
  }



  getproducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.producturl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
      );
  }

  deleteProduct(id:number):Observable<Product>{
    const url=`${this.producturl}/${id}`;
    return this.http.delete<Product>(url,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  putProduct(id:number,Prod:Product):Observable<null|Product>{
    const url=`${this.producturl}/${id}`;
    return this.http.put<Product>(url,Prod,this.httpOptions).pipe(tap(data=>console.log(data)),catchError(this.handleError))
 
  }

  getproductbyid(id){
    return this.http.get<Product[]>(this.producturl+"/"+id).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
      );
  }

}
