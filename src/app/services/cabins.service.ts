import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


interface cabin {
  name:String,
  about:String,
  cabin:number
}

@Injectable({
  providedIn: 'root'
})
export class CabinsService {


  constructor() {
    

  }

  getCabins(){

    let cabins = new Subject<any[]>()
    return cabins.asObservable()
  }

  getCabinWithId(id:number):Observable<cabin> {
    let subj = new Subject<cabin>()
    this.getCabins().subscribe( xs => xs
      .forEach( x => {
        if (x.cabin == id){
          subj.next(x)
        }
    })
    )

    return subj.asObservable()
  }
}
