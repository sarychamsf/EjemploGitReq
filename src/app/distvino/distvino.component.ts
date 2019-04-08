import { Component, OnInit } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';

export interface Vino {
  CSS: Number;
  Identificacion: Number;
  Numerolote: Number;
  CantidadVino: Number;
  Comentario: String;
  Almacenamiento: String;
  Despacho: String;
  Mezcla: String;
}

@Component({
  selector: 'app-distvino',
  templateUrl: './distvino.component.html',
  styleUrls: ['./distvino.component.css']
})

export class DistvinoComponent  {
  private db: AngularFirestore;
  userCollectionRef: AngularFirestoreCollection<Vino>;
  items: Vino[];

  constructor(db: AngularFirestore) { 
  this.db = db;
  this.userCollectionRef = db.collection<Vino>('distvino');
 
  this.userCollectionRef.snapshotChanges().subscribe( data =>{
  if (data) {
    this.items = data.map( item =>{
      const data = item.payload.doc.data() as Vino;
      return data;
    });
  }
 }, 
 err => console.log('Error ' + err),
 () => console.log('yay'))

}

createVino( CSS: Number, Identificacion: Number,Numerolote: Number,CantidadVino: Number,Comentario: String,Almacenamiento: String,Despacho: String,Mezcla: String){
    return this.db.collection('distvino').add({
      CSS: CSS,
      Identificacion: Identificacion,
      Numerolote: Numerolote,
      CantidadVino: CantidadVino,
      Comentario: Comentario,
      Almacenamiento: Almacenamiento,
      Despacho: Despacho,
      Mezcla: Mezcla
  });
  }
}
