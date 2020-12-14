import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service"

import * as productData from 'updatedProducts.json';


@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']

})
export class PurchasesComponent implements OnInit {
  stuff:any;


  products: any = (productData as any).default;

  title = 'FinalProject';
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


  constructor(private data: DataService){
    this.filter = "rating"; //default
    this.rating = "high to low";
    this.maxPrice = 1000; //default
    this.numResults = 10; //default results shown
    this.filterArray = [];
  }

  ngOnInit(): void{
    this.filterArray = this.defaultItems();
    this.data.currentMessage.subscribe(stuff => this.stuff = stuff)
    console.log(this.stuff);

  }

  ProductFilter(){
    //grab list of items
    //grab filter value from drop down selection
    //input up to how expensive items can be shown.
    //press filter button to call ProductFilter() and sort the JSON
    //return sorted list
    this.filterArray = [];
    var filteredKeys = {electronics: this.electronics,
    groceries:this.groceries,
    clothing:this.clothing, 
    toys:this.toys,
    hygiene:this.hygiene,
    kitchen:this.kitchen};
    var filteredSize = Object.keys(filteredKeys);
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
    console.log(this.filterArray);
  }

  

  defaultItems(){
    var results = [];
    for(let stuff in this.products[0]){
      for(let thing of this.products[0][stuff]){
        results.push(thing);
      }
    }
    results.sort((a, b) => (a.rating < b.rating) ? 1 : -1); //high to low
    results = results.slice(0, this.numResults)
    return results;
    console.log(results);
    

  }
}