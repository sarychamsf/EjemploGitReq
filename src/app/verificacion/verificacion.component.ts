import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.component.html',
  styleUrls: ['./verificacion.component.scss']
})
export class VerificacionComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  onsubmit(form: NgForm) {
    console.log(form.value);
    console.log(form.value.fechaSalidaProductor);
  }

}
