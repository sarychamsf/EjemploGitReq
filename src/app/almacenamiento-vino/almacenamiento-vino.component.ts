import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface AlmacenamientoVino {
  lote: string;
  proceso: string;
  recoleccion: Date;
}

@Component({
  selector: 'app-almacenamiento-vino',
  templateUrl: './almacenamiento-vino.component.html',
  styleUrls: ['./almacenamiento-vino.component.scss']
})

export class AlmacenamientoVinoComponent {

  private db: AngularFirestore;
  userCollectionRef: AngularFirestoreCollection<AlmacenamientoVino>;
  items: AlmacenamientoVino[];

  constructor(db: AngularFirestore) {
    this.db = db;
    this.userCollectionRef = db.collection<AlmacenamientoVino>('Almacenamiento-vino');

    this.userCollectionRef.snapshotChanges().subscribe(data => {
      if (data) {
        this.items = data.map(item => {
          const data = item.payload.doc.data() as AlmacenamientoVino;
          data.lote = item.payload.doc.id;
          return data;
        });
      }
    },
      err => console.log('Error ' + err),
      () => console.log('yay'))

  }

  createAlmacenamientoVino(lote: string, proceso: string, recoleccion: Date) {
    return this.db.collection('Almacenamiento-vino').add({
      lote: lote,
      proceso: proceso,
      recoleccion: recoleccion
    });
  }
}


