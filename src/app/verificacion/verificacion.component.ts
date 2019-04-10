import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface verificacion {
  IdAgricultor: string;
  NombreAgricultor: string;
  FechaSalidaAgricultor: Date;
  FechaSalidaProductor: Date;
  FechaEntradaProductor: Date; 
  FechaEntradaDistribucion: Date;
  Aceptado: boolean;
  Denegado: boolean;  
}

@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.component.html',
  styleUrls: ['./verificacion.component.scss']
})
export class VerificacionComponent  {

  private db: AngularFirestore;
  userCollectionRef: AngularFirestoreCollection<verificacion>;
  items: verificacion[];

  constructor(db: AngularFirestore) { 
  this.db = db;
  this.userCollectionRef = db.collection<verificacion>('verificacion');
 
  this.userCollectionRef.snapshotChanges().subscribe( data =>{
  if (data) {
    this.items = data.map( item =>{
      const data = item.payload.doc.data() as verificacion;
      data.IdAgricultor= item.payload.doc.id;
      return data;
    });
  }
 }, 
 err => console.log('Error ' + err),
 () => console.log('yay'))

}

createVerificacion(  IdAgricultor: string,
  NombreAgricultor: string,
  FechaSalidaAgricultor: Date,
  FechaSalidaProductor: Date,
  FechaEntradaProductor: Date, 
  FechaEntradaDistribucion: Date,
  Aceptado: boolean,
  Denegado: boolean, ){
return this.db.collection('verificacion').add({
  IdAgricultor: IdAgricultor,
  NombreAgricultor: NombreAgricultor,
  FechaSalidaAgricultor: FechaSalidaAgricultor,
  FechaSalidaProductor: FechaSalidaProductor,
  FechaEntradaProductor:FechaEntradaProductor,
  FechaEntradaDistribucion: FechaEntradaDistribucion,
  Aceptado: Aceptado,
  Denegado: Denegado  
  
});
}


}
