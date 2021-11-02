import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  listaServicios: Observable<any[]> | any;

  constructor(firesotre: AngularFirestore) {
    this.listaServicios = firesotre.collection('servicios').valueChanges();
   }

  ngOnInit(): void {
  }

}
