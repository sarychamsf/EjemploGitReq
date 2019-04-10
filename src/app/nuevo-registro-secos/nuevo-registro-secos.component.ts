import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface NuevoRegistroSecos {
prodName:string;
fechaEntradaStock: Date;
}

@Component({
  selector: 'app-nuevo-registro-secos',
  templateUrl: './nuevo-registro-secos.component.html',
  styleUrls: ['./nuevo-registro-secos.component.scss']
})
export class NuevoRegistroSecosComponent {
  private db: AngularFirestore;
  userCollectionRef: AngularFirestoreCollection<NuevoRegistroSecos>;
  items: NuevoRegistroSecos[];

  constructor(db: AngularFirestore) { 
  this.db = db;
  this.userCollectionRef = db.collection<NuevoRegistroSecos>('NuevoRegistroSecos');
 
  this.userCollectionRef.snapshotChanges().subscribe( data =>{
  if (data) {
    this.items = data.map( item =>{
      const data = item.payload.doc.data() as NuevoRegistroSecos;
      data.prodName= item.payload.doc.id;
      return data;
    });
  }
 }, 
 err => console.log('Error ' + err),
 () => console.log('yay'))

}

createNuevoRegistroSecos(prodName:string, fechaEntradaStock: Date){
    return this.db.collection('NuevoRegistroSecos').add({
      prodName:prodName,
      fechaEntradaStock: fechaEntradaStock
  })
  }

}
