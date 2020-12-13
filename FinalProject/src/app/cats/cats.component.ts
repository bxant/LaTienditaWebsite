import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';


@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CATSComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }

  generateCat(){
    var min = Math.ceil(1);
    var max = Math.ceil(218);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
