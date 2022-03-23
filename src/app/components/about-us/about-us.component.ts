import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/models/language';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  language: Language
  
  constructor(private langService:LangService) { 
    this.language = langService.getLanguage()
  }

  ngOnInit(): void {
  }

}
