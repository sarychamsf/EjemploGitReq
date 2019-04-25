import { Component, OnInit } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface NuevoUsuario  {
  NombreUsuario: string;
  CorreoUsuario: string;
  ContrasenaUsuario: string;
  RepetirContrasenaUsuario: string;
  TipoUsuario: boolean;
}

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent  {
  private db: AngularFirestore;
  userCollectionRef: AngularFirestoreCollection<NuevoUsuario>;
  items: NuevoUsuario[];

  constructor(db: AngularFirestore) { 
  this.db = db;
  this.userCollectionRef = db.collection<NuevoUsuario>('CrearUsuario');
 
  this.userCollectionRef.snapshotChanges().subscribe( data =>{
  if (data) {
    this.items = data.map( item =>{
      const data = item.payload.doc.data() as NuevoUsuario;
      data.NombreUsuario= item.payload.doc.id;
      return data;
    });
  }
 }, 
 err => console.log('Error ' + err),
 () => console.log('yay'))

}

CrearUsuario(NombreUsuario: string, CorreoUsuario: string, ContrasenaUsuario: string, RepetirContrasenaUsuario: string, TipoUsuario: boolean){
    return this.db.collection('CrearUsuario').add({
      NombreUsuario: NombreUsuario,
      CorreoUsuario: CorreoUsuario,
      ContrasenaUsuario: ContrasenaUsuario,
      RepetirContrasenaUsuario: RepetirContrasenaUsuario,
      TipoUsuario: TipoUsuario
  });
  }

}