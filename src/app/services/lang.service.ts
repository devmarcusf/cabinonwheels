import { Injectable } from '@angular/core';
import { Language } from '../models/language';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  language : Language = "Swe"

  constructor() { 
    let cookie = document.cookie.split("=")
    if(cookie.length < 2){
      return
    }

    if(cookie[1] === "Eng"){
      this.language = 'Eng'
      return
    }

    if(cookie[1] === "Swe"){
      this.language = 'Swe'
      return
    }


  }

  getLanguage(): Language{
    return this.language
  }

  setLang(lang:Language){
    this.language = lang
    document.cookie = "lang="+lang;
    window.location.reload();
  }
}
