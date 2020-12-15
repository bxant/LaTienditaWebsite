import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service"

import * as productData from 'updatedProducts.json';
import { ThrowStmt } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']

})
export class PurchasesComponent implements OnInit {
  // stuff is default data being displayed.
  stuff:any;

  // cart is global array for cart, necessary to shift data
  // when user decides to make a purchase
  cart:any;

  // mock data grabbed from JSON file
  products: any = (productData as any).default;

  public myCart:Array<any>;
  public cartItem:any;

  title = 'LaTiendita';
  rating:string;
  filter:string;
  maxPrice:number;
  numResults:number;

  filterArray:Array<any>;

  clothing:boolean = false;
  electronics:boolean =false;  
  groceries:boolean = false;
  hygiene:boolean =false;  
  kitchen:boolean = false;
  toys:boolean =false;


  constructor(private data: DataService, private toastr:ToastrService){
    // DataService Constructor is for use of a global array for myCart
    // ToasterService will notify user item has been added to cart
    this.myCart = [];
    this.filter = "rating"; //default
    this.rating = "high to low";
    this.maxPrice = 1000; //default
    this.numResults = 10; //default results shown
    this.filterArray = [];
  }

  ngOnInit(): void{
    this.filterArray = this.defaultItems();
    this.data.currentMessage.subscribe(stuff => this.stuff = stuff)
    this.data.updatedCart.subscribe(cart => this.cart = cart)
    console.log(this.cart)

  }
  

  addToCart(addedItem:any)
  {
    // user will be able to addToCart here
    // pressing add to cart calls this function
    this.cart.push(addedItem);
    this.data.AddToCart(this.cart);

  }

  ProductFilter(){
    //This grabs a list of items based on user
    // filters.
    this.filterArray = [];
    var filteredKeys = {electronics: this.electronics,
    groceries:this.groceries,
    clothing:this.clothing, 
    toys:this.toys,
    hygiene:this.hygiene,
    kitchen:this.kitchen};
    if (filteredKeys["clothing"])
    {
      for(let thing of this.products[0]["clothing"]){
        if(thing.price < this.maxPrice){
          this.filterArray.push(thing);
        }
      }
        
    }
    if (filteredKeys["electronics"])
    {
      for(let thing of this.products[0]["electronics"]){
        if(thing.price < this.maxPrice){
          this.filterArray.push(thing);
        }
      }
    }
    if (filteredKeys["groceries"])
    {
      for(let thing of this.products[0]["groceries"]){
        if(thing.price < this.maxPrice){
          this.filterArray.push(thing);
        }
      }
    }
    if (filteredKeys.hygiene)
    {
      for(let thing of this.products[0]["hygiene"]){
        if(thing.price < this.maxPrice){
          this.filterArray.push(thing);
        }
      }
    }
    if (filteredKeys.kitchen)
    {
      for(let thing of this.products[0]["kitchen"]){
        if(thing.price < this.maxPrice){
          this.filterArray.push(thing);
        }
      }
    }
    if (filteredKeys.toys)
    {
      for(let thing of this.products[0]["toys"]){
        if(thing.price < this.maxPrice){
          this.filterArray.push(thing);
        }
      }
    }

    if(this.rating == "high to low"){
      this.filterArray.sort((a, b) => (a[this.filter] < b[this.filter]) ? 1 : -1); //high to low
    }
    else{
      this.filterArray.sort((a, b) => (a[this.filter] > b[this.filter]) ? 1 : -1); //low to high
    }
    
    this.filterArray = this.filterArray.slice(0,this.numResults)
  }

  

  defaultItems(){
    // default loadout of page will dispay information
    // the default display shows 10 most popular items
    var results = [];
    for(let stuff in this.products[0]){
      for(let thing of this.products[0][stuff]){
        results.push(thing);
      }
    }
    results.sort((a, b) => (a.rating < b.rating) ? 1 : -1); //high to low
    results = results.slice(0, this.numResults)
    return results;
  
  }
}