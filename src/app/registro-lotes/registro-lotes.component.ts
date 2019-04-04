import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface RegistroLotes {
  lote: string;
  produccionAnual: string;
  origen: string;
  destino: string;
  agua: string;
  fertilizantes: string;
  recoleccion: Date;
}

@Component({
  selector: 'app-registro-lotes',
  templateUrl: './registro-lotes.component.html',
  styleUrls: ['./registro-lotes.component.scss']
})
export class RegistroLotesComponent {

  private db: AngularFirestore;
  userCollectionRef: AngularFirestoreCollection<RegistroLotes>;
  items: RegistroLotes[];

  constructor(db: AngularFirestore) {
    this.db = db;
    this.userCollectionRef = db.collection<RegistroLotes>('registro-lotes');

    this.userCollectionRef.snapshotChanges().subscribe(data => {
      if (data) {
        this.items = data.map(item => {
          const data = item.payload.doc.data() as RegistroLotes;
          data.lote = item.payload.doc.id;
          return data;
        });
      }
    },
      err => console.log('Error ' + err),
      () => console.log('yay'))

  }

  createRegistroLotes(lote: string, produccionAnual: string, origen: string, destino: string, agua: string, fertilizantes: string, recoleccion: Date) {
    return this.db.collection('registro-lotes').add({
      lote: lote,
      produccionAnual: produccionAnual,
      origen: origen,
      destino: destino,
      agua: agua,
      fertilizantes: fertilizantes,
      recoleccion: recoleccion
    });
  }
}


