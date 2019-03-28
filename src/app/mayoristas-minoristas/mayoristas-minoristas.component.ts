import { Component, OnInit } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Mayorista {
  IdProveedor:string;
  RecepcionVino:Date;
  VentaCliente:Date;
}

@Component({
  selector: 'app-mayoristas-minoristas',
  templateUrl: './mayoristas-minoristas.component.html',
  styleUrls: ['./mayoristas-minoristas.component.css']
})
export class MayoristasMinoristasComponent  {
  private db: AngularFirestore;
  userCollectionRef: AngularFirestoreCollection<Mayorista>;
  items: Mayorista[];

  constructor(db: AngularFirestore) { 
  this.db = db;
  this.userCollectionRef = db.collection<Mayorista>('mayoristas-minoristas');
 
  this.userCollectionRef.snapshotChanges().subscribe( data =>{
  if (data) {
    this.items = data.map( item =>{
      const data = item.payload.doc.data() as Mayorista;
      data.IdProveedor= item.payload.doc.id;
      return data;
    });
  }
 }, 
 err => console.log('Error ' + err),
 () => console.log('yay'))

}

createMayorista(IdProveedor: string, RecepcionVino:Date, VentaCliente:Date){
return this.db.collection('mayoristas-minoristas').add({
IdProveedor: IdProveedor,
RecepcionVino: RecepcionVino,
VentaCliente:VentaCliente
});
}
}
  

