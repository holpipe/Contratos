import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicioService } from '../services/servicio.service';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-servicio',
  templateUrl: './agregar-servicio.component.html',
  styleUrls: ['./agregar-servicio.component.css']
})
export class AgregarServicioComponent implements OnInit {
  createServicio: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private _servicioService: ServicioService, private router: Router, private toastr:ToastrService) {
    this.createServicio = this.fb.group({
      contratista: ['', Validators.required],
      empresa: ['', Validators.required],
      tipoServicio: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFinalizacion: ['', Validators.required],
      valor: ['', Validators.required],
      adjuntos: ['', Validators.required]      
    })
  }
  ngOnInit(): void {
  }
  agregarServicio() {
    this.submitted = true;
    if (this.createServicio.invalid) {
      return;
    }
    const servicio: any = {
      contratista: this.createServicio.value.contratista,
      empresa: this.createServicio.value.empresa,
      tipoServicio: this.createServicio.value.tipoServicio,
      descripcion: this.createServicio.value.descripcion,
      fechaInicio: this.createServicio.value.fechaInicio,
      fechaFinalizacion: this.createServicio.value.fechaFinalizacion,
      valor: this.createServicio.value.valor,
      adjuntos: this.createServicio.value.adjuntos,  
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }
    this._servicioService.createServicio(servicio).then(() => {
      this.toastr.success('El servicio fue registrado con exito!', 'Servicio registrado')
      this.router.navigate(['servicios-component'])
    }).catch(error => {
      console.log(error);
    })
  }

}


