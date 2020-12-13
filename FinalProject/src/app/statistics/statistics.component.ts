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
  public randomItem;
  
  constructor() { }

  ngOnInit(): void {
    console.log(productData);
  }

  getTechProducts()
  {
    
  }

  getRandomItem()
  {
    this.randomItem = productData[0];
  }



}
