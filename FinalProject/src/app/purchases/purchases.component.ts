import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})
export class PurchasesComponent implements OnInit {
  title = 'FinalProject';
  filter:string;
  maxPrice:number;
  numResults:number

  constructor(){
    this.filter = "popularity"; //default
    this.maxPrice = 999999; //default
    this.numResults = 10; //default results shown
  }

  ngOnInit(): void{

  }

  ProductFilter(){
    //grab list of items
    //grab filter value from drop down selection
    //input up to how expensive items can be shown.
    //press filter button to call ProductFilter() and sort the JSON
    //return sorted list
  }
}