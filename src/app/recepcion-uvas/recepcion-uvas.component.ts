import { Component, OnInit } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface RecepcionUvas {
  IdProveedor:string;
  DetallesProductos:string;
  RecepcionUva:Date;
}

@Component({
  selector: 'app-recepcion-uvas',
  templateUrl: './recepcion-uvas.component.html',
  styleUrls: ['./recepcion-uvas.component.css']
})
export class RecepcionUvasComponent {

  private db: AngularFirestore;
  userCollectionRef: AngularFirestoreCollection<RecepcionUvas>;
  items: RecepcionUvas[];

  constructor(db: AngularFirestore) { 
  this.db = db;
  this.userCollectionRef = db.collection<RecepcionUvas>('recepcion-uvas');
 
  this.userCollectionRef.snapshotChanges().subscribe( data =>{
  if (data) {
    this.items = data.map( item =>{
      const data = item.payload.doc.data() as RecepcionUvas;
      data.IdProveedor= item.payload.doc.id;
      return data;
    });
  }
 }, 
 err => console.log('Error ' + err),
 () => console.log('yay'))

}

createRecepcionVino(IdProveedor: string, DetallesProductos: string, RecepcionUva:Date){
return this.db.collection('recepcion-uvas').add({
IdProveedor: IdProveedor,
DetallesProductos: DetallesProductos,
RecepcionUva:RecepcionUva
});
}
}