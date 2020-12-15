import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service"

@Component({
  selector: 'app-near-me',
  templateUrl: './near-me.component.html',
  styleUrls: ['./near-me.component.scss']
})
export class NearMeComponent implements OnInit {
  //global dicitonary of the items available
  stuff:any;
  //gloabl array fo the items that are in the cart currently
  cart:any
  
  
  constructor(private data: DataService) { 
  
  }

  ngOnInit(): void {
   this.data.currentMessage.subscribe(stuff => this.stuff = stuff)
   this.data.updatedCart.subscribe(cart => this.cart = cart)
  }

  //goes through the cart and updates the global dictionary by subtracting 
  //one to the number of stock of the item and adding one to number of sales
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

  //Runs when you press the remove item button
  //it removes it from the global cart
  removeItemFromCart(itemToRemove:{}){
    var newCart = []
    var count = 0;
    for(let product of this.cart){
      if(itemToRemove != product || count == 1){
        newCart.push(product);

      }
      else{
        count = 1;
      }
    }
    this.cart = newCart;
    this.data.AddToCart(this.cart);
  }
}
