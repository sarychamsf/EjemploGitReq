import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerificacionComponent } from './verificacion/verificacion.component';

const routes: Routes = [
  {path: 'verificacion', component: VerificacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
