import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../models/vehiculo';
import { VehiculoImpl } from '../models/vehiculo-impl';

@Component({
  selector: 'app-vehiculo-consulta',
  templateUrl: './vehiculo-consulta.component.html',
  styleUrls: ['./vehiculo-consulta.component.css']
})
export class VehiculoConsultaComponent implements OnInit {

  vehiculo: Vehiculo =new VehiculoImpl();

  constructor() { }

  ngOnInit(): void {
  }

}
