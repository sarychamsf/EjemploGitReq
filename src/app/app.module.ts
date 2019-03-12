import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { VerificacionComponent } from './verificacion/verificacion.component';
import { FormsModule } from '@angular/forms';
import { RegistroLotesComponent } from './registro-lotes/registro-lotes.component';
import { MayoristasMinoristasComponent } from './mayoristas-minoristas/mayoristas-minoristas.component';
import { ProduccionVinoComponent} from './produccion-vino/produccion-vino.component';
import { RecepcionUvasComponent} from './recepcion-uvas/recepcion-uvas.component';
import {RecepcionUvasBodegaComponent} from './recepcion-uvas-bodega/recepcion-uvas-bodega.component';
import {BodtransComponent } from './bodtrans/bodtrans.component';
import {DistvinoComponent } from './distvino/distvino.component';
import {DistprovComponent } from './distprov/distprov.component';
import {EmboteComponent } from './embote/embote.component';


import { NuevoRegistroComponent } from './embotellador/nuevo-registro/nuevo-registro.component';
import { NuevoRegistroSecosComponent } from './embotellador/nuevo-registro-secos/nuevo-registro-secos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VerificacionComponent,
    RegistroLotesComponent, 
    MayoristasMinoristasComponent,
   ProduccionVinoComponent,
  RecepcionUvasComponent,
  RecepcionUvasBodegaComponent,

    RegistroLotesComponent,
    NuevoRegistroComponent,
    NuevoRegistroSecosComponent,
    DistprovComponent,
    DistvinoComponent,
    EmboteComponent,
    BodtransComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
