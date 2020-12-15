import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service"

// jsonProducts file
import * as productData from 'updatedProducts.json';
import { Data } from '@angular/router';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  //global dictionary of items
  stuff:any;

  clothing:boolean = false;
  electronics:boolean =false;  
  groceries:boolean = false;
  hygiene:boolean =false;  
  kitchen:boolean = false;
  toys:boolean =false;

  productTypes:string[] = ['electronics','groceries','clothing','toys','hygiene','kitchen'];
  
  filterArray:Array<any>;
  constructor(private data: DataService) {
    this.filterArray = [];
  }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(stuff => this.stuff = stuff)
  }


  //gets the filters and makes a lst of items that should be displayed
  // based on the filters
  updateFilterArray(){
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
      this.filterArray.push(this.stuff[0]["clothing"]);
    }
    if (filteredKeys["electronics"])
    {
      this.filterArray.push(this.stuff[0]["electronics"]);
    }
    if (filteredKeys["groceries"])
    {
      this.filterArray.push(this.stuff[0]["groceries"]);
    }
    if (filteredKeys.hygiene)
    {
      this.filterArray.push(this.stuff[0]["hygiene"]);
    }
    if (filteredKeys.kitchen)
    {
      this.filterArray.push(this.stuff[0]["kitchen"]);
    }
    if (filteredKeys.toys)
    {
      this.filterArray.push(this.stuff[0]["toys"]);
    }   

  }


}
