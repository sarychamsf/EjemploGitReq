import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerificacionComponent } from './verificacion/verificacion.component';
import { RegistroLotesComponent } from './registro-lotes/registro-lotes.component';
import {MayoristasMinoristasComponent} from './mayoristas-minoristas/mayoristas-minoristas.component';
import {ProduccionVinoComponent} from './produccion-vino/produccion-vino.component';
import {RecepcionUvasComponent} from './recepcion-uvas/recepcion-uvas.component';
import {RecepcionUvasBodegaComponent} from './recepcion-uvas-bodega/recepcion-uvas-bodega.component';
import {BodtransComponent } from './bodtrans/bodtrans.component';
import {DistvinoComponent } from './distvino/distvino.component';
import {DistprovComponent } from './distprov/distprov.component';
import {EmboteComponent } from './embote/embote.component';

const routes: Routes = [
  {path: 'verificacion', component: VerificacionComponent},
  {path:'registro-lotes', component: RegistroLotesComponent},
  {path:'mayoristas-minoristas', component: MayoristasMinoristasComponent},
  {path:'produccion-vino', component: ProduccionVinoComponent},
  {path:'recepcion-uvas', component: RecepcionUvasComponent},
  {path:'recepcion-uvas-bodega', component: RecepcionUvasBodegaComponent},
  {path:'distprov', component: DistprovComponent},
  {path:'distvino', component: DistvinoComponent},
  {path:'embote', component: EmboteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
