import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
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


  constructor(private store:Firestore) {
    

  }

  getCabins(){

    let cabins = new Subject<any[]>()
    const c = collection(this.store, 'posts')
    let items = collectionData(c)
    items.subscribe( xs => {
      cabins.next(xs)
    })

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
