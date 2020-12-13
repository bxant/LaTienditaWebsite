import { Component, OnInit } from '@angular/core';

import * as productData from 'updatedProducts.json';


@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']

})
export class PurchasesComponent implements OnInit {
  products: any = (productData as any).default;

  title = 'FinalProject';
  rating:string;
  filter:string;
  maxPrice:number;
  numResults:number

  clothing:boolean = false;
  electronics:boolean =false;  
  groceries:boolean = false;
  hygiene:boolean =false;  
  kitchen:boolean = false;
  toys:boolean =false;

  constructor(){
    this.filter = "popularity"; //default
    this.rating = "high to low";
    this.maxPrice = 999999; //default
    this.numResults = 10; //default results shown
  }

  ngOnInit(): void{
    this.defaultItems();
  }

  ProductFilter(){
    //grab list of items
    //grab filter value from drop down selection
    //input up to how expensive items can be shown.
    //press filter button to call ProductFilter() and sort the JSON
    //return sorted list
  }

  defaultItems(){
    var results = [];
    console.log(this.products[0])
    for(let stuff in this.products[0]){
      for(let thing of this.products[0][stuff]){
        results.push(thing);
      }
    }
    

  }
}