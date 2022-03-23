import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/models/language';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  lang:Language

  constructor(private langService:LangService) { 
    this.lang = langService.getLanguage()
  }

  ngOnInit(): void {
  }

}
