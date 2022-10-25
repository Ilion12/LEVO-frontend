import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosTecnicosInteres } from 'src/app/vehiculo/models/datos-tecnicos-interes';
import { DatosTecnicosInteresImpl } from 'src/app/vehiculo/models/datos-tecnicos-interes-impl';
import { MantenimientoPreventivoImpl } from 'src/app/vehiculo/models/planes-preventivos-impl';
import { Vehiculo } from 'src/app/vehiculo/models/vehiculo';
import { VehiculoImpl } from 'src/app/vehiculo/models/vehiculo-impl';
import { MantenimientoPreventivoService } from 'src/app/vehiculo/service/mantenimiento-preventivo.service';
import { VehiculoService } from 'src/app/vehiculo/service/vehiculo.service';
import { DatosTecnicosInteresService} from 'src/app/vehiculo/service/datos-tecnicos-interes.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  matricula: string = '';
  vehiculos: Vehiculo[] = [];
  vehiculoVerDatos: Vehiculo = new VehiculoImpl();
  datosTecnicosInteres!: DatosTecnicosInteresImpl;
  mantenimientoPreventivo!: MantenimientoPreventivoImpl;

  constructor(private vehiculoService: VehiculoService, private datosTecnicosInteresService: DatosTecnicosInteresService,
    private mantenimientoPreventivoService: MantenimientoPreventivoService,
              private router: Router) {}

  ngOnInit(): void {
  }

  onVehiculoConsultar(vehiculo: Vehiculo){
    this.verDatos(vehiculo);
    console.log(vehiculo);
    let url = `consultar/${vehiculo.id}`;
    this.router.navigate([url])
  }

  verDatos(vehiculo: Vehiculo): void {
    this.vehiculoVerDatos = vehiculo;
  }

  vehiculoBuscado(matricula: string) {
    this.vehiculoService.getBusquedaPorMatricula(matricula).subscribe((response) => {
      this.vehiculos = this.vehiculoService.extraerVehiculos(response);
    console.log(response)
    });
  }

  onVehiculoEliminar(vehiculo: Vehiculo){
    this.vehiculoService.deleteVehiculo(vehiculo.id).subscribe();
  }

  onVehiculoEditar(vehiculo: Vehiculo){
    this.verDatos(vehiculo);
    let url = `editar/${vehiculo.id}`;
    this.router.navigate([url])
  }

}
