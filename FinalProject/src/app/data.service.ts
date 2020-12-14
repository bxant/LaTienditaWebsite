import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import * as productData from 'updatedProducts.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products: any = (productData as any).default;

  
  format(){
      var results = [];
      for(let stuff in this.products[0]){
          for(let thing of this.products[0][stuff]){
              results.push(thing);
          }
      }
      return results;
      
  }
  public productStuff = this.format();

  private messageSource = new BehaviorSubject<any>(this.productStuff);
  currentMessage = this.messageSource.asObservable();

  public emptyCart=[];
  private message2Source = new BehaviorSubject<any>(this.emptyCart);
  updatedCart = this.message2Source.asObservable();
  constructor() {}

  changeValue(shop: any){
      this.messageSource.next(shop);
  }

  AddToCart(cart: any){
    this.message2Source.next(cart);
  }
}