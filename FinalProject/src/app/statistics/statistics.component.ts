import { Component, OnInit } from '@angular/core';

// jsonProducts file
import * as productData from 'updatedProducts.json';




@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  products: any = (productData as any).default;

  clothing:boolean = false;
  electronics:boolean =false;  
  groceries:boolean = false;
  hygiene:boolean =false;  
  kitchen:boolean = false;
  toys:boolean =false;

  stuff:string[] = ['electronics','groceries','clothing','toys','hygiene','kitchen'];
  
  
  constructor() {
  }

  ngOnInit(): void {
    console.log(this.products[0]);
    this.typeChosen();
  }

  typeChosen(){
    console.log(this.clothing);
  }

  createList(){}


}
