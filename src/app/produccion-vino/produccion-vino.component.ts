import { Component, OnInit } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ProduccionVino {
   IngredientesMezcla: string;
   ProcesoProduccion: string;
}

@Component({
  selector: 'app-produccion-vino',
  templateUrl: './produccion-vino.component.html',
  styleUrls: ['./produccion-vino.component.css']
})

export class ProduccionVinoComponent  {

  private db: AngularFirestore;
  userCollectionRef: AngularFirestoreCollection<ProduccionVino>;
  items: ProduccionVino[];

  constructor(db: AngularFirestore) { 
  this.db = db;
  this.userCollectionRef = db.collection<ProduccionVino>('produccion-vino');
 
  this.userCollectionRef.snapshotChanges().subscribe( data =>{
  if (data) {
    this.items = data.map( item =>{
      const data = item.payload.doc.data() as ProduccionVino;
      data.IngredientesMezcla= item.payload.doc.id;
      return data;
    });
  }
 }, 
 err => console.log('Error ' + err),
 () => console.log('yay'))

}

createProduccionVino(  IngredientesMezcla: string, ProcesoProduccion: string){
return this.db.collection('produccion-vino').add({
  IngredientesMezcla: IngredientesMezcla, 
  ProcesoProduccion: ProcesoProduccion
});
}
 

}