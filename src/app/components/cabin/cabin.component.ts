import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Language } from 'src/app/models/language';
import { CabinsService } from 'src/app/services/cabins.service';
import { LangService } from 'src/app/services/lang.service';


interface post {
  name:String,
  about:String
}

@Component({
  selector: 'app-cabin',
  templateUrl: './cabin.component.html',
  styleUrls: ['./cabin.component.css']
})
export class CabinComponent implements OnInit {

  cabins = [
    {
      id:"model1",
      title:"Basic Model",
      info:"Includes pre-assembled frame without windows and doors, insulated floor, roof trusses with wind sheet protection, sheet metal roofs. Roof is uninsulated.",
      images: ["assets/newCabin/image1.jpeg","assets/newCabin/image2.jpeg","assets/newCabin/image3.jpeg"]
    }
  ]

  cabinNr = ""
  title = ""

  images:String[] = []

  lang:Language

  info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus est omnis quibusdam obcaecati voluptas facilis dolore debitis consequatur, asperiores, blanditiis amet quas enim sit eius mollitia nulla? Sunt, cum distinctio!"
  cabin:any

  constructor(private route: ActivatedRoute, private cabinService:CabinsService, private langService:LangService) {
    this.lang = langService.getLanguage()
    switch (this.lang) {
      case 'Eng':
        this.cabins = [
          {
            id:"model1",
            title:"Basic Model",
            info:"Includes pre-assembled frame without windows and doors, insulated floor, roof trusses with wind sheet protection, sheet metal roofs. Roof is uninsulated.",
            images: ["assets/newCabin/image1.jpeg","assets/newCabin/image2.jpeg","assets/newCabin/image3.jpeg"]
          }
        ]
        break;
      case 'Swe':
        this.cabins = [
          {
            id:"model1",
            title:"Bas Model",
            info:"Includes pre-assembled frame without windows and doors, insulated floor, roof trusses with wind sheet protection, sheet metal roofs. Roof is uninsulated.",
            images: ["assets/newCabin/image1.jpeg","assets/newCabin/image2.jpeg","assets/newCabin/image3.jpeg"]
          }
        ]
        break;
    
      default:
        break;
    }
  }

  ngOnInit(): void {
    this.route.queryParams.forEach(x => this.cabinNr = x['cabin'])
    let xs = this.cabins.find(x => x.id == this.cabinNr)
    if(xs){
      this.info = xs?.info;
      this.title = xs?.title;
      this.images = xs?.images;
      console.log(this.images)
    }
  }

}
