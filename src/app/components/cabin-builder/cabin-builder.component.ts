import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/models/language';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-cabin-builder',
  templateUrl: './cabin-builder.component.html',
  styleUrls: ['./cabin-builder.component.css']
})
export class CabinBuilderComponent implements OnInit {

  models = [
    {name:"Model 1*", price:90000, checked:false },
    {name:"Model 2**", price:125000, checked:false }
  ]
  
  acessories = [
    {name:'Clear lacquered inside with panel protection', price:4500},
    {name:'Plastic carpet or click floor in the main room', price:5000},
    {name:'Waterproof carpets in the bathroom floor', price:4000},
    {name:'Waterproof carpets in bathroom including the shower walls', price:9000},
    {name:'Bathroom: toilet + sink + shower with warm water heating system', price:32000},
    {name:'Kitchen: 2 base cabinets (60 + 60), 1 top cabinet (60). Oak worktop, sink and gas stove without wate', price:12000},
    {name:'Kitchen: 2 base cabinets (60 + 60), 1 top cabinet (60). Oak worktop, sink and gas stove with cold water', price:15000},
    {name:'Electrics : 12V and 230V connections with 3 x 230V power sockets, and 12V lights', price:12000},
    {name:'Wall-mounted bed in Dala style 120cm without mattress. (Also available in 90 cm)', price:6500},
    {name:'Trailer', price:65000}
  ]

  lang:Language  

  price = 0

  constructor(private langService:LangService) {
    this.lang = langService.getLanguage()
    switch (this.lang) {
      case 'Swe':
        this.models = [
          {name:"Model 1*", price:90000, checked:false },
          {name:"Model 2**", price:125000, checked:false }
        ]
        
        this.acessories = [
          {name:'Klarlackad invändigt med panellack.', price:4500},
          {name:'Plastmatta eller klickgolv i rummet', price:5000},
          {name:'Våtrums matta', price:4000},
          {name:'Våtrumsmatta golv och vägg', price:9000},
          {name:'Badrum: toalett + handfat + dusch med varmvatten', price:32000},
          {name:'Kök: 2st underskåp(60+60), 1st överskåp(60). Ekbänkskiva, diskho och gasolkök utan vatten', price:12000},
          {name:'Kök: 2st underskåp(60+60), 1st överskåp(60). Bänkskiva, diskho och gasolkök med kallvatten', price:15000},
          {name:'Elsystem. !2v och 220v med 12 voltsbelysning och 3 st eluttag 220v', price:12000},
          {name:'Väggfast säng i dalastil 120cm utan madrass. (Kan även fås i 90 cm)', price:6500},
          {name:'Trailer', price:65000}
        ]
        break;
    
      default:
        break;
    }
  }

  ngOnInit(): void {
  }

  modelsCheck(model:any,event:any){
    this.models.forEach(model => {
      if(model.checked)
        this.price -= model.price
      model.checked = false;
    });

    model.checked = true;
    this.price += model.price

    event.preventDefault()

  }

  checked(price:number, event:any){
    if(event.target.checked){
      this.price += price
    }else {
      this.price -= price
    }
  }

}
