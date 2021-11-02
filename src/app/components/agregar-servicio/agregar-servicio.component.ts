import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-servicio',
  templateUrl: './agregar-servicio.component.html',
  styleUrls: ['./agregar-servicio.component.css']
})
export class AgregarServicioComponent implements OnInit {
  agregarServicio: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) {
    this.agregarServicio = this.fb.group({
      tipoServicio: ['', Validators.required],
      nombreServicio: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFinalizacion: ['', Validators.required],
      valor: ['', Validators.required],
      descripcion: ['', Validators.required]
    })
  }
  ngOnInit(): void {
  }
  createServicio(){
    console.log(this.agregarServicio);
  }

}
