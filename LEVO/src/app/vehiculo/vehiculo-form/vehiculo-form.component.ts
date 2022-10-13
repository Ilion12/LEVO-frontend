import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosTecnicosInteres } from '../models/datos-tecnicos-interes';
import { DatosTecnicosInteresImpl } from '../models/datos-tecnicos-interes-impl';
import { MantenimientoPreventivoImpl } from '../models/mantenimiento-preventivo-impl';
import { Vehiculo } from '../models/vehiculo';
import { VehiculoImpl } from '../models/vehiculo-impl';
import { DatosTecnicosInteresService } from '../service/datos-tecnicos-interes.service';
import { MantenimientoPreventivoService } from '../service/mantenimiento-preventivo.service';
import { VehiculoService } from '../service/vehiculo.service';


@Component({
  selector: 'app-vehiculo-form',
  templateUrl: './vehiculo-form.component.html',
  styleUrls: ['./vehiculo-form.component.css']
})
export class VehiculoFormComponent implements OnInit {

  vehiculo: Vehiculo = new VehiculoImpl;
  datosTecnicosInteres: DatosTecnicosInteres =new DatosTecnicosInteresImpl();
  mantenimientoPreventivo: MantenimientoPreventivoImpl = new MantenimientoPreventivoImpl();
  tipoVehiculo;
  opcionSeleccionada: string = '0'
  verSeleccion: string = '';

  constructor(
    private vehiculoService: VehiculoService,
    private datosTecnicosInteresService: DatosTecnicosInteresService,
    private mantenimientoPreventivoService: MantenimientoPreventivoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.tipoVehiculo=["Turismo", "Todo Terreno","Motocicleta", "Otros"];
   }

  ngOnInit(): void {
    let id: string = this.cargarVehiculo();
  }

  cargarVehiculo(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

  create(): void{
    this.vehiculoService.crearVehiculo(this.vehiculo)
  }

  onAddVehiculo(): void {
    this.vehiculoService.crearVehiculo(this.vehiculo).subscribe();
    let id: string = this.cargarVehiculo();
    this.router.navigate([`/vehiculos/editar/${id}`]);
  }


  capturar() {
    this.verSeleccion = this.opcionSeleccionada;

}
}
