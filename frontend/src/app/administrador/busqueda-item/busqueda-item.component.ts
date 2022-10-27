import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vehiculo } from 'src/app/vehiculo/models/vehiculo';
import { VehiculoImpl } from 'src/app/vehiculo/models/vehiculo-impl';

@Component({
  selector: 'app-busqueda-item',
  templateUrl: './busqueda-item.component.html',
  styleUrls: ['./busqueda-item.component.css']
})
export class BusquedaItemComponent implements OnInit {

  @Input() vehiculo: Vehiculo = new VehiculoImpl;
  @Output() vehiculoConsultar = new EventEmitter<VehiculoImpl>();
  @Output() vehiculoEliminar = new EventEmitter<VehiculoImpl>();
  @Output() vehiculoEditar = new EventEmitter<Vehiculo>();

  constructor() { }

  ngOnInit(): void {
  }

  consultar(): void{
    this.vehiculoConsultar.emit(this.vehiculo);
  }

  eliminar(): void{
    this.vehiculoEliminar.emit(this.vehiculo);
  }

  editar(): void {
    this.vehiculoEditar.emit(this.vehiculo);
  }

}
