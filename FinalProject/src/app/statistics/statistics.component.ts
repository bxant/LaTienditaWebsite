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

  public techProducts: Array<any>;
  public groceryProducts: Array<any>;
  public clothingProducts: Array<any>;
  public toyProducts: Array<any>;
  public hygieneProducts: Array<any>;
  public kitchenProducts: Array<any>;
  public dictTypes;
  selectedType:Array<any>;

  selectedItemsList:Array<any>;
  checkedID = [];
  checkboxesDataList = [{id:"electronics", label: "Electronics", isChecked: false},
  {id:"groceries", label: "Groceries", isChecked: false},
  {id:"clothing", label: "Clothing", isChecked: false},
  {id:"toys", label: "Toys", isChecked: false},
  {id:"hygiene", label: "Hygiene", isChecked: false},
  {id:"kitchen", label: "Kitchen", isChecked: false}]
  
  
  constructor() { 
    this.dictTypes = this.products[0];
    this.techProducts = [];
    this.groceryProducts = [];
    this.clothingProducts = [];
    this.toyProducts = [];
    this.hygieneProducts = [];
    this.kitchenProducts = [];
    this.selectedType = []

    this.selectedItemsList = [];
  }

  ngOnInit(): void {
    this.run()
    console.log("im productData")
    console.log(this.dictTypes);
    console.log("im products")
    console.log(this.techProducts);
  }


  grabSelectedItems() {
    // this.selectedType = this.checkboxDataList.filter((value, index) => {
    //   return value.isChecked
    // });
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.checkboxesDataList.filter((value, index) => {
      return value.isChecked
    });
  }

  changeSelection() {
    this.fetchSelectedItems()
  }

  run(){
    this.techProducts = this.techProducts.concat(this.dictTypes['electronics']);
    this.groceryProducts = this.groceryProducts.concat(this.dictTypes['groceries']);
    this.clothingProducts = this.clothingProducts.concat(this.dictTypes['clothing']);
    this.toyProducts = this.toyProducts.concat(this.dictTypes['toys']);
    this.hygieneProducts = this.hygieneProducts.concat(this.dictTypes['hygiene']);
    this.kitchenProducts = this.kitchenProducts.concat(this.dictTypes['kitchen']);
  }

  

  



}
