import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service"

@Component({
  selector: 'app-near-me',
  templateUrl: './near-me.component.html',
  styleUrls: ['./near-me.component.scss']
})
export class NearMeComponent implements OnInit {

  stuff:any;

  cart:any
  
  
  constructor(private data: DataService) { 
  
  }

  ngOnInit(): void {
   this.data.currentMessage.subscribe(stuff => this.stuff = stuff)
   this.data.updatedCart.subscribe(cart => this.cart = cart)
  }


  Checkout(){
    for(let each of this.cart){
      for(let thing in this.stuff[0]){
        
        for(let chicken of this.stuff[0][thing]){
          if(each == chicken){
            this.stuff[0][thing][chicken.id-1].stock--
            this.stuff[0][thing][chicken.id-1].sales++
          }
        }
      }
    }
    this.data.changeValue(this.stuff);
    this.cart = [];
    this.data.AddToCart(this.cart);
  }

  removeItemFromCart(itemToRemove:{}){
    var newCart = []
    for(let product of this.cart){
      if(itemToRemove != product){
        newCart.push(product);
      }
    }
    console.log(newCart);
    this.cart = newCart;
    console.log(this.cart)
    this.data.AddToCart(this.cart);
  }
}
