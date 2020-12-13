import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';


@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CATSComponent implements OnInit {

  imagePath:string;

  constructor() { 
    this.imagePath = "images1.jpg";
  }

  ngOnInit(): void {
    this.imagePath = "images1.jpg"
  }

  spawnCat()
  {
    // var pathImage = "/catImages/images2.jpg"
    // this.imagePath = "images" + (Math.floor(Math.random() * 16) + 1).toString() + ".jpg"  
    // this.imagePath = pathImage;
    console.log("cat Spawned");
  }

}
