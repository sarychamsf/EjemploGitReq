import { Component, OnInit } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Transportador {
  
  CSS:number;
  GTIN:number;
  Numerolote:number;
  CantidadVino:Number;
}


@Component({
  selector: 'app-bodtrans',
  templateUrl: './bodtrans.component.html',
  styleUrls: ['./bodtrans.component.css']
})
export class BodtransComponent {
  private db: AngularFirestore;
  userCollectionRef: AngularFirestoreCollection<Transportador>;
  items: Transportador[];

  constructor(db: AngularFirestore) { 
    this.db = db;
    this.userCollectionRef = db.collection<Transportador>('bodtrans');
   
    this.userCollectionRef.snapshotChanges().subscribe( data =>{
    if (data) {
      this.items = data.map( item =>{
        const data = item.payload.doc.data() as Transportador;
        return data;
      });
    }
   }, 
   err => console.log('Error ' + err),
   () => console.log('yay'))
  
  }

  createBodtrans(  CSS:number,GTIN:number,Numerolote:number,CantidadVino:Number){
    return this.db.collection('bodtrans').add({
      CSS : CSS,
      GTIN : GTIN,
      Numerolote : Numerolote,
      CantidadVino : CantidadVino
  });
  }

}
