import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  navItems = [
    {text:'Home', link:""},
    {text:'Our cabins', link:"/ourcabins"},
    //{text:'Inspiration', link:""},
    {text:'Contact us', link:"/contact"}
  ]

  collapsed = true

  toggleNav(){
    this.collapsed = !this.collapsed
  }

  constructor() { }

  ngOnInit(): void {
  }

}
