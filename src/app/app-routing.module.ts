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
import {AlmacenamientoVinoComponent} from './almacenamiento-vino/almacenamiento-vino.component';
import {RegistroEntregaComponent} from './registro-entrega/registro-entrega.component';
import {EmbotelladorResultadosComponent } from './embotellador-resultados/embotellador-resultados.component';
import {SensoresComponent} from './sensores/sensores.component';
import { NuevoRegistroComponent } from './nuevo-registro/nuevo-registro.component';
import { NuevoRegistroSecosComponent } from './nuevo-registro-secos/nuevo-registro-secos.component';
import {VistaInformacionClienteComponent} from './vista-informacion-cliente/vista-informacion-cliente.component';
import {NuevoUsuarioComponent} from './nuevo-usuario/nuevo-usuario.component';


const routes: Routes = [
  {path:'verificacion', component: VerificacionComponent},
  {path:'registro-lotes', component: RegistroLotesComponent},
  {path:'mayoristas-minoristas', component: MayoristasMinoristasComponent},
  {path:'produccion-vino', component: ProduccionVinoComponent},
  {path:'recepcion-uvas', component: RecepcionUvasComponent},
  {path:'recepcion-uvas-bodega', component: RecepcionUvasBodegaComponent},
  {path:'bodtrans', component: BodtransComponent},
  {path:'distprov', component: DistprovComponent},
  {path:'distvino', component: DistvinoComponent},
  {path:'embote', component: EmboteComponent},
  {path:'almacenamiento-vino', component: AlmacenamientoVinoComponent},
  {path:'registro-entrega', component: RegistroEntregaComponent},
  {path:'embotellador-resultados', component: EmbotelladorResultadosComponent},
  {path:'sensores', component: SensoresComponent},
  {path:'verificacion', component: VerificacionComponent},
  {path:'nuevo-registro', component: NuevoRegistroComponent},
  {path:'nuevo-registro-secos', component: NuevoRegistroSecosComponent},
  {path:'vista-informacion-cliente', component: VistaInformacionClienteComponent},
  {path:'NuevoUsuario', component: NuevoUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
