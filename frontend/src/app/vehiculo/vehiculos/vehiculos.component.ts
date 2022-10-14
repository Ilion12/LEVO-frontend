import { Component, OnInit } from '@angular/core';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Vehiculo } from '../models/vehiculo';
import { VehiculoService } from '../service/vehiculo.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {
  vehiculos:Vehiculo[]=[];
  todosVehiculos: Vehiculo[] = [];
  numeroPaginas:number=0;

  constructor(private vehiculoService: VehiculoService,
    private auxService: AuxiliarService) { }

  ngOnInit(): void {
    this.vehiculoService.getVehiculos().subscribe((response)=> this.vehiculos=this.vehiculoService.extraerVehiculos(response));
    this.getTodosVehiculos();
  }

  getTodosVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe(r => {
      this.numeroPaginas = this.auxService.getPaginasResponse(r);
      for (let index = 1; index <= this.numeroPaginas; index++) {
        this.vehiculoService.getVehiculosPagina(index)
          .subscribe(response => {
            this.todosVehiculos.push(...this.vehiculoService.extraerVehiculos(response));
          });
      }
    });
  }

}
