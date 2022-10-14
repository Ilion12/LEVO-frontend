import { Component, OnInit } from '@angular/core';
import { MantenimientoPreventivo } from '../../models/mantenimiento-preventivo';
import { MantenimientoPreventivoImpl } from '../../models/mantenimiento-preventivo-impl';

@Component({
  selector: 'app-mantenimiento-preventivo-consulta',
  templateUrl: './mantenimiento-preventivo-consulta.component.html',
  styleUrls: ['./mantenimiento-preventivo-consulta.component.css']
})
export class MantenimientoPreventivoConsultaComponent implements OnInit {
mantenimientoPreventivo: MantenimientoPreventivo = new MantenimientoPreventivoImpl();
  constructor() { }

  ngOnInit(): void {
  }

}
