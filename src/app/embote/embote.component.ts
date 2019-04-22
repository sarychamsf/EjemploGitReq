import { Component, OnInit } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Embote {
  CSS:number;
  GTIN:number;
  Numerolote:number;
  CantidadVino:Number;
}


@Component({
  selector: 'app-embote',
  templateUrl: './embote.component.html',
  styleUrls: ['./embote.component.css']
})

export class EmboteComponent {
  private db: AngularFirestore;
  userCollectionRef: AngularFirestoreCollection<Embote>;
  items: Embote[];

  constructor(db: AngularFirestore) { 
    this.db = db;
    this.userCollectionRef = db.collection<Embote>('embote');
   
    this.userCollectionRef.snapshotChanges().subscribe( data =>{
    if (data) {
      this.items = data.map( item =>{
        const data = item.payload.doc.data() as Embote;
        return data;
      });
    }
   }, 
   err => console.log('Error ' + err),
   () => console.log('yay'))
  
  }

  createEmbote(CSS:number, GTIN:number, Numerolote:number, CantidadVino:Number){
    return this.db.collection('embote').add({
      CSS : CSS,
      GTIN : GTIN,
      Numerolote : Numerolote,
      CantidadVino : CantidadVino
  });
  }

}


