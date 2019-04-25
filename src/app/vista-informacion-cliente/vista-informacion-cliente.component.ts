import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {almacenamientovino} from '../almacenamiento-vino/almacenamientovino';
import {bodtrans} from '../bodtrans/bodtrans';
import {mayoristasminoristas} from '../mayoristas-minoristas/mayoristasminoristas';
import {produccionvino} from '../produccion-vino/produccionvino';
import {recepcionuvas} from '../recepcion-uvas/recepcionuvas';
import {recepcionuvasbodega} from '../recepcion-uvas-bodega/recepcionuvasbodega';
import {registroentrega} from '../registro-entrega/registroentrega';
import {registrolotes} from '../registro-lotes/registrolotes';
import {verificacion} from '../verificacion/verificacion';
import { AlmacenamientoVino } from '../almacenamiento-vino/almacenamiento-vino.component';
import { Transportador } from '../bodtrans/bodtrans.component';
import { Mayorista } from '../mayoristas-minoristas/mayoristas-minoristas.component';
import { ProduccionVino } from '../produccion-vino/produccion-vino.component';
import { RecepcionUvas } from '../recepcion-uvas/recepcion-uvas.component';
import { RecepcionUvasBodega } from '../recepcion-uvas-bodega/recepcion-uvas-bodega.component';
import { RegistroEntrega } from '../registro-entrega/registro-entrega.component';
import { RegistroLotes } from '../registro-lotes/registro-lotes.component';


@Component({
  selector: 'app-vista-informacion-cliente',
  templateUrl: './vista-informacion-cliente.component.html',
  styleUrls: ['./vista-informacion-cliente.component.css']
})
export class VistaInformacionClienteComponent {
    private db: AngularFirestore;
   
    userCollectionRef3: AngularFirestoreCollection<ProduccionVino>;
    
    items3: ProduccionVino[];


  
    constructor(db: AngularFirestore) {
      this.db = db;
      
      this.userCollectionRef3 = db.collection<ProduccionVino>('produccion-vino');
    
     

      this.userCollectionRef3.snapshotChanges().subscribe( data =>{
        if (data) {
          this.items3 = data.map( item =>{
            const data = item.payload.doc.data() as ProduccionVino;
            data.IngredientesMezcla = item.payload.doc.id;
            return data;
          });
        }
       }, 
       err => console.log('Error ' + err),
       () => console.log('yay'))

       
      }

    public getVerResultadosVinos() {
      return this.db.collection('produccion-vino').snapshotChanges();
  
    }


}
