import { Component, OnInit } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface RecepcionUvasBodega {
   IdBodega: string;
   InformacionProductos: string;
   RecepcionProductosBodega: Date;
}


@Component({
  selector: 'app-recepcion-uvas-bodega',
  templateUrl: './recepcion-uvas-bodega.component.html',
  styleUrls: ['./recepcion-uvas-bodega.component.css']
})
export class RecepcionUvasBodegaComponent  {

  private db: AngularFirestore;
  userCollectionRef: AngularFirestoreCollection<RecepcionUvasBodega>;
  items: RecepcionUvasBodega[];

  constructor(db: AngularFirestore) { 
  this.db = db;
  this.userCollectionRef = db.collection<RecepcionUvasBodega>('recepcion-uvas-bodega');
 
  this.userCollectionRef.snapshotChanges().subscribe( data =>{
  if (data) {
    this.items = data.map( item =>{
      const data = item.payload.doc.data() as RecepcionUvasBodega;
      data.IdBodega= item.payload.doc.id;
      return data;
    });
  }
 }, 
 err => console.log('Error ' + err),
 () => console.log('yay'))

}

createRecepcionUvasBodega(IdBodega: string, InformacionProductos: string, RecepcionProductosBodega: Date){
return this.db.collection('recepcion-uvas-bodega').add({
  IdBodega: IdBodega,
  InformacionProductos: InformacionProductos,
  RecepcionProductosBodega: RecepcionProductosBodega
});
}

 

}