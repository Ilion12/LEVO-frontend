import { Component, OnInit } from '@angular/core';
import { MantenimientoPreventivo } from '../../models/mantenimiento-preventivo';
import { MantenimientoPreventivoImpl } from '../../models/mantenimiento-preventivo-impl';
import { DatosTecnicosInteresService } from '../../service/datos-tecnicos-interes.service';
import { MantenimientoPreventivoService } from '../../service/mantenimiento-preventivo.service';
import { VehiculoService } from '../../service/vehiculo.service';

@Component({
  selector: 'app-mantenimiento-preventivo-form',
  templateUrl: './mantenimiento-preventivo-form.component.html',
  styleUrls: ['./mantenimiento-preventivo-form.component.css']
})
export class MantenimientoPreventivoFormComponent implements OnInit {
  mantenimientoPreventivo: MantenimientoPreventivo = new MantenimientoPreventivoImpl();
  constructor(private vehiculoService: VehiculoService,
    private datosTecnicosInteresService: DatosTecnicosInteresService,
    private mantenimientoPreventivoService: MantenimientoPreventivoService) { }

  ngOnInit(): void {
  }

}
