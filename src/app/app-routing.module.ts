import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerificacionComponent } from './verificacion/verificacion.component';
import { RegistroLotesComponent } from './registro-lotes/registro-lotes.component';
import { NuevoRegistroComponent } from './embotellador/nuevo-registro/nuevo-registro.component';
import { NuevoRegistroSecosComponent } from './embotellador/nuevo-registro-secos/nuevo-registro-secos.component';

const routes: Routes = [
  {path: 'verificacion', component: VerificacionComponent},
  {path: 'registro-lotes', component: RegistroLotesComponent},
  {path: 'embotellador/nuevo-registro-vino', component: NuevoRegistroComponent},
  {path: 'embotellador/nuevo-registro-secos', component: NuevoRegistroSecosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
