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
   console.log(this.cart);
  }

  updateVal(){
    var somthing = this.stuff.shift();
    console.log(this.stuff)
    this.data.changeValue(this.stuff)
    
  }

}
