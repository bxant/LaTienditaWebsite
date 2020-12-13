import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-near-me',
  templateUrl: './near-me.component.html',
  styleUrls: ['./near-me.component.scss']
})
export class NearMeComponent implements OnInit {

  public static checkedItemsList = [] as any;
  // selectedItemsList:Array<any>;
  
  checkboxesDataList = [
    {
      id: 'C001',
      label: 'Photography',
      isChecked: true
    },
    {
      id: 'C002',
      label: 'Writing',
      isChecked: true
    },
    {
      id: 'C003',
      label: 'Painting',
      isChecked: true
    },
    {
      id: 'C004',
      label: 'Knitting',
      isChecked: false
    },
    {
      id: 'C004',
      label: 'Dancing',
      isChecked: false
    },
    {
      id: 'C005',
      label: 'Gardening',
      isChecked: true
    },
    {
      id: 'C006',
      label: 'Drawing',
      isChecked: true
    },
    {
      id: 'C007',
      label: 'Gyming',
      isChecked: false
    },
    {
      id: 'C008',
      label: 'Cooking',
      isChecked: true
    },
    {
      id: 'C009',
      label: 'Scrapbooking',
      isChecked: false
    },
    {
      id: 'C010',
      label: 'Origami',
      isChecked: false
    }
  ];
  constructor() { 
    // const selectedItemsList = [] as any;
    const checkedIDs = [] as any;
  //   this.selectedItemsList = [];
  // this.checkedIDs = [];
  }

  ngOnInit(): void {
    this.fetchSelectedItems();
    this.fetchCheckedIDs();
  }

  changeSelection() {
    this.fetchSelectedItems();
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.checkboxesDataList.filter((value, index) => {
      return value.isChecked;
    });
  }

  fetchCheckedIDs() {
    this.checkedIDs = [];
    this.checkboxesDataList.forEach((value, index) => {
      if (value.isChecked) {
        this.checkedIDs.push(value.id);
      }
    });
  }

}
