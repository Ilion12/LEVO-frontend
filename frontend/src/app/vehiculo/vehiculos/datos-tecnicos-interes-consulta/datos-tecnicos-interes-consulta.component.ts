import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosTecnicosInteres } from '../../models/datos-tecnicos-interes';
import { Vehiculo } from '../../models/vehiculo';
import { VehiculoService } from '../../service/vehiculo.service';

@Component({
  selector: 'app-datos-tecnicos-interes-consulta',
  templateUrl: './datos-tecnicos-interes-consulta.component.html',
  styleUrls: ['./datos-tecnicos-interes-consulta.component.css']
})
export class DatosTecnicosInteresConsultaComponent implements OnInit {

  datosTecnicosInteres!: DatosTecnicosInteres;
  vehiculo!: Vehiculo;

  constructor(private vehiculoService: VehiculoService,
    private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    let id: string = this.cargarVehiculo();
    this.vehiculoService.getVehiculo(id).subscribe(response => 
      this.vehiculo = this.vehiculoService.mapearVehiculo(response));
  }

  cargarVehiculo(): string {
    return this.activatedRoute.snapshot.params['id'];
  }


}
