import { Component, OnInit } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';


export interface TProveedor{
  Identificador: number;

}

@Component({
  selector: 'app-distprov',
  templateUrl: './distprov.component.html',
  styleUrls: ['./distprov.component.css']
})

export class  DistprovComponent  {
  private db: AngularFirestore;
  userCollectionRef: AngularFirestoreCollection<TProveedor>;
  items: TProveedor[];

  constructor(db: AngularFirestore) { 
  this.db = db;
  this.userCollectionRef = db.collection<TProveedor>('distprov');
 
  this.userCollectionRef.snapshotChanges().subscribe( data =>{
  if (data) {
    this.items = data.map( item =>{
      const data = item.payload.doc.data() as TProveedor;
      return data;
    });
  }
 }, 
 err => console.log('Error ' + err),
 () => console.log('yay'))

}

createTProveedor(Identificador: number){
    return this.db.collection('distprov').add({
      Identificador: Identificador
  });
  }
}