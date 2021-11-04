import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  servicios: any []=[];
  constructor(private _servicioService: ServicioService) {
   }

  ngOnInit(): void {
    this.getServicios();
  }

  getServicios(){
    this._servicioService.getServicios().subscribe(data=>{
      data.forEach((element:any) => {
      /*  console.log(element.payload.doc.id);*/
      /*  console.log(element.payload.doc.data());*/
      this.servicios.push({
        id: element.payload.doc.id,
         ...element.payload.doc.data()
      })
      });
    });
  }

}
