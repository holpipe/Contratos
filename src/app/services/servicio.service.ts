import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private firestore: AngularFirestore) { }

  createServicio(servicio: any): Promise<any> {
    return this.firestore.collection('servicios').add(servicio);
  }

  getServicios() : Observable<any>{
    return this.firestore.collection('servicios', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }
}

