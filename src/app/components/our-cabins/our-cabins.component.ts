import { Component, OnInit } from '@angular/core';
import { CabinsService } from 'src/app/services/cabins.service';

@Component({
  selector: 'app-our-cabins',
  templateUrl: './our-cabins.component.html',
  styleUrls: ['./our-cabins.component.css']
})
export class OurCabinsComponent implements OnInit {
  cards = [
    {
      title:"Basic Model",
      img:"assets/newCabin/image1.jpeg",
      text:"lorem impsum",
      cabin:"model1"
    }
  ]
  constructor(private cabinService:CabinsService) { }

  ngOnInit(): void {

  }

}
