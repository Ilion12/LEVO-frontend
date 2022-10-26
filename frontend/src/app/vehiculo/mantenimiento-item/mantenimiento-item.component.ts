import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Mantenimiento } from '../models/mantenimiento';
import { MantenimientoImpl } from '../models/mantenimiento-impl';

@Component({
  selector: 'app-mantenimiento-item',
  templateUrl: './mantenimiento-item.component.html',
  styleUrls: ['./mantenimiento-item.component.css']
})
export class MantenimientoItemComponent implements OnInit { 


  @Input()
  mantenimiento: MantenimientoImpl= new MantenimientoImpl();
  mantenimientos: Mantenimiento[] = [];
  todosMantenimientos: Mantenimiento[] = [];
  numeroPaginas: number=0;

  constructor() { }
  @Output() mantenimientoEliminar = new EventEmitter<MantenimientoImpl[]>();
  @Output() mantenimientoEditar= new EventEmitter<MantenimientoImpl[]>();
  @Output() mantenimientoConsultar = new EventEmitter<MantenimientoImpl[]>();

  ngOnInit(): void {console.log(this.mantenimiento)
  }

  consultarMantenimiento():void{
    this.mantenimientoConsultar.emit(this.mantenimientos)
  }

  borrarVehiculo(): void {
    if(confirm('Va a eliminar el vehiculo y todos sus datos ¿Desea continuar?'))
    this.mantenimientoEliminar.emit(this.mantenimientos);
  }

  editarVehiculo():void {
    this.mantenimientoEditar.emit(this.mantenimientos);
  }

}
