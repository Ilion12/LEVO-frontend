import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MantenimientoPreventivo } from '../../models/planes-preventivos';
import { MantenimientoPreventivoImpl } from '../../models/planes-preventivos-impl';
import { Vehiculo } from '../../models/vehiculo';
import { VehiculoService } from '../../service/vehiculo.service';

@Component({
  selector: 'app-mantenimiento-preventivo-consulta',
  templateUrl: './mantenimiento-preventivo-consulta.component.html',
  styleUrls: ['./mantenimiento-preventivo-consulta.component.css']
})
export class MantenimientoPreventivoConsultaComponent implements OnInit {
mantenimientoPreventivo: MantenimientoPreventivo = new MantenimientoPreventivoImpl();
vehiculo!: Vehiculo; 

constructor(private vehiculoService: VehiculoService,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id: string = this.cargarVehiculo();
    this.vehiculoService.getVehiculo(id).subscribe(response => 
      this.vehiculo = this.vehiculoService.mapearVehiculo(response));
  }

  cargarVehiculo(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

}
