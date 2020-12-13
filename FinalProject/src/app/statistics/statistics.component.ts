import { Component, OnInit } from '@angular/core';

// jsonProducts file
import * as productData from 'updatedProducts.json';


class productType {
  public id:String;
  public label:String;
  public isChecked:Boolean;

  constructor(id:String,label:String,isChecked:Boolean) {
    this.id = id;
    this.label = label;
    this.isChecked = isChecked;
  }
}

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

  selectedItemsList:productType[];
  checkedIDs:String[];
  // checkedIDs:productType[];
  // other list
  // checkedIDs:Array<any>;

  checkboxDataList = [new productType('electronics', "Electronics", false),
  new productType("groceries","Groceries",false),
  new productType("clothing","Clothing",false),
  new productType("toys","Toys",false),
  new productType("hygiene","Hygiene",false),
  new productType("kitchen","Kitchen",false)];
  
  
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
    this.checkedIDs = [];
  }

  ngOnInit(): void {
    this.run();
    this.fetchSelectedItems()
    this.fetchCheckedIDs()
  }

  changeSelection() {
    this.fetchSelectedItems()
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.checkboxDataList.filter((value, index) => {
      return value.isChecked
    });
    console.log(this.selectedItemsList);
  }

  fetchCheckedIDs() {
    this.checkedIDs = [];
    this.checkboxDataList.forEach((value, index) => {
      if (value.isChecked) {
        this.checkedIDs.push(value.id);
      }
    });
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
