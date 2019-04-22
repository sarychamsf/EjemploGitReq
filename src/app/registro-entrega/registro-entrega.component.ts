import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface RegistroEntrega {
  idRegistroEntrega: string;
  entrega: DataCue;
  distribuidor: string;
  lote: string;
}

@Component({
  selector: 'app-registro-entrega',
  templateUrl: './registro-entrega.component.html',
  styleUrls: ['./registro-entrega.component.scss']
})

export class RegistroEntregaComponent {

  private db: AngularFirestore;
  userCollectionRef: AngularFirestoreCollection<RegistroEntrega>;
  items: RegistroEntrega[];

  constructor(db: AngularFirestore) {
    this.db = db;
    this.userCollectionRef = db.collection<RegistroEntrega>('registro-entrega');

    this.userCollectionRef.snapshotChanges().subscribe(data => {
      if (data) {
        this.items = data.map(item => {
          const data = item.payload.doc.data() as RegistroEntrega;
          data.idRegistroEntrega = item.payload.doc.id;
          return data;
        });
      }
    },
      err => console.log('Error ' + err),
      () => console.log('yay'))

  }

  createRegistroEntrega(entrega: Date, distribuidor: string, lote: string) {
    return this.db.collection('registro-entrega').add({
      entrega: entrega,
      distribuidor: distribuidor,
      lote: lote
    });
  }
}


