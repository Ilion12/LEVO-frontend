import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/vehiculo/models/vehiculo';
import { VehiculoImpl } from 'src/app/vehiculo/models/vehiculo-impl';
import { faMagnifyingGlass, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-busqueda-item',
  templateUrl: './busqueda-item.component.html',
  styleUrls: ['./busqueda-item.component.css']
})
export class BusquedaItemComponent implements OnInit {

  faMagnifyingGlass = faMagnifyingGlass;
  faPencil = faPencil;
  faTrashCan = faTrashCan;

  @Input() vehiculo: Vehiculo = new VehiculoImpl;
  @Output() vehiculoConsultar = new EventEmitter<VehiculoImpl>();
  @Output() vehiculoEliminar = new EventEmitter<VehiculoImpl>();
  @Output() vehiculoEditar = new EventEmitter<Vehiculo>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  consultarVH(): void{
    this.vehiculoConsultar.emit(this.vehiculo);
  }

  eliminar(): void{
    this.vehiculoEliminar.emit(this.vehiculo);
  }

  editar(): void {
    this.vehiculoEditar.emit(this.vehiculo);
  }

}
