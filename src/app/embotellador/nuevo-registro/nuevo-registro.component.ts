import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nuevo-registro',
  templateUrl: './nuevo-registro.component.html',
  styleUrls: ['./nuevo-registro.component.scss']
})
export class NuevoRegistroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onsubmit(form: NgForm) {
    console.log(form.value);
    console.log(form.value.fechaSalidaProductor);
  }

}
