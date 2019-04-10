import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface NuevoRegistro {
  IdProductor: string;
  EntradaEmbotellamiento: Date; 
}

@Component({
  selector: 'app-nuevo-registro',
  templateUrl: './nuevo-registro.component.html',
  styleUrls: ['./nuevo-registro.component.scss']
})
export class NuevoRegistroComponent  {

  private db: AngularFirestore;
  userCollectionRef: AngularFirestoreCollection<NuevoRegistro>;
  items: NuevoRegistro[];

  constructor(db: AngularFirestore) { 
  this.db = db;
  this.userCollectionRef = db.collection<NuevoRegistro>('NuevoRegistro');
 
  this.userCollectionRef.snapshotChanges().subscribe( data =>{
  if (data) {
    this.items = data.map( item =>{
      const data = item.payload.doc.data() as NuevoRegistro;
      data.IdProductor= item.payload.doc.id;
      return data;
    });
  }
 }, 
 err => console.log('Error ' + err),
 () => console.log('yay'))

}

createNuevoRegistro(IdProductor: string, EntradaEmbotellamiento:Date){
    return this.db.collection('NuevoRegistro').add({
    IdProveedor: IdProductor,
    RecepcionVino: EntradaEmbotellamiento,
  
  });
  }
 

}
