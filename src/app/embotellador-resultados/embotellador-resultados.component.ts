import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface EmbotelladorResultados {
  idResultados: string;
  resultados: string;
}

@Component({
  selector: 'app-embotellador-resultados',
  templateUrl: './embotellador-resultados.component.html',
  styleUrls: ['./embotellador-resultados.component.scss']
})

export class EmbotelladorResultadosComponent {

  private db: AngularFirestore;
  userCollectionRef: AngularFirestoreCollection<EmbotelladorResultados>;
  items: EmbotelladorResultados[];

  constructor(db: AngularFirestore) {
    this.db = db;
    this.userCollectionRef = db.collection<EmbotelladorResultados>('embotellador-resultados');

    this.userCollectionRef.snapshotChanges().subscribe(data => {
      if (data) {
        this.items = data.map(item => {
          const data = item.payload.doc.data() as EmbotelladorResultados;
          data.idResultados = item.payload.doc.id;
          return data;
        });
      }
    },
      err => console.log('Error ' + err),
      () => console.log('yay'))
  }

  createEmbotelladorResultados(resultados: string) {
    return this.db.collection('embotellador-resultados').add({
      resultados: resultados
    });
  }
}





