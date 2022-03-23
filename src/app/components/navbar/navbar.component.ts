import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/models/language';
import { LangService } from 'src/app/services/lang.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  navItems = [
    {text:'Home', link:""},
    {text:'Our cabins', link:"/ourcabins"},
    {text:'Contact us', link:"/contact"}
  ]

  collapsed = true

  lang:Language

  toggleNav(){
    this.collapsed = !this.collapsed
  }

  constructor(private langService:LangService, private router:Router) {
    this.lang = langService.getLanguage()
    switch (this.lang) {
      case 'Swe':
        this.navItems = [
          {text:'Hem', link:""},
          {text:'Våra stugor', link:"/ourcabins"},
          {text:'Kontakta oss', link:"/contact"}
        ]
        break;
      case 'Eng':
        this.navItems = [
          {text:'Home', link:""},
          {text:'Our cabins', link:"/ourcabins"},
          {text:'Contact us', link:"/contact"}
        ]
        break;
      default:
        break;
    }

  }

  ngOnInit(): void {
  }

  setLang(lang:Language) {
    this.langService.setLang(lang)
  }

}
