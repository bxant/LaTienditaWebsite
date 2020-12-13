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

  techProducts:Array<any>;
  
  constructor() { 
    this.techProducts = [];
  }

  ngOnInit(): void {
    console.log("im productData")
    console.log(productData);
    console.log("im products")
    console.log(this.products[0]);
  }

  getTechProducts()
  {
    
  }

  



}
