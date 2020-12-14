import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service"

@Component({
  selector: 'app-near-me',
  templateUrl: './near-me.component.html',
  styleUrls: ['./near-me.component.scss']
})
export class NearMeComponent implements OnInit {

  stuff:any;
  
  
  constructor(private data: DataService) { 
  
  }

  ngOnInit(): void {
   this.data.currentMessage.subscribe(stuff => this.stuff = stuff)
  }

  updateVal(){
    var somthing = this.stuff.shift();
    console.log(this.stuff)
    this.data.changeValue(this.stuff)
    
  }

}
