import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { VerificacionComponent } from './verificacion/verificacion.component';
import { FormsModule } from '@angular/forms';
import { RegistroLotesComponent } from './registro-lotes/registro-lotes.component';
import { NuevoRegistroComponent } from './embotellador/nuevo-registro/nuevo-registro.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VerificacionComponent,
    RegistroLotesComponent,
    NuevoRegistroComponent
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
