import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nuevo-registro-secos',
  templateUrl: './nuevo-registro-secos.component.html',
  styleUrls: ['./nuevo-registro-secos.component.scss']
})
export class NuevoRegistroSecosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onsubmit(form: NgForm) {
    console.log(form.value);
    console.log(form.value.fechaSalidaProductor);
  }

}
