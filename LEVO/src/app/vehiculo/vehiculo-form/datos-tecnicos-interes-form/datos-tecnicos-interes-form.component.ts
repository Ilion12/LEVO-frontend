import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatosTecnicosInteres } from '../../models/datos-tecnicos-interes';
import { DatosTecnicosInteresImpl } from '../../models/datos-tecnicos-interes-impl';
import { DatosTecnicosInteresService } from '../../service/datos-tecnicos-interes.service';
import { MantenimientoPreventivoService } from '../../service/mantenimiento-preventivo.service';
import { VehiculoService } from '../../service/vehiculo.service';

@Component({
  selector: 'app-datos-tecnicos-interes-form',
  templateUrl: './datos-tecnicos-interes-form.component.html',
  styleUrls: ['./datos-tecnicos-interes-form.component.css']
})
export class DatosTecnicosInteresFormComponent implements OnInit {
  calificacionMA;
  cambio;
  combustible;
  datosTecnicosInteres: DatosTecnicosInteres = new DatosTecnicosInteresImpl();
  opcionSeleccionada: string = '0'
  verSeleccion: string = '';

  constructor(private vehiculoService: VehiculoService,
    private datosTecnicosInteresService: DatosTecnicosInteresService,
    private mantenimientoPreventivoService: MantenimientoPreventivoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
      this.calificacionMA=['A', 'B', 'C', 'ECO', 'CERO'];
      this.cambio=['Manual', 'Automatico'];
      this.combustible=['Gasolina', 'Diesel', 'Electrico', 'Hidbrido Autonomo', 'Hibrido Enchufable']
     }

  ngOnInit(): void {
  }

  create():void{
    this.datosTecnicosInteresService.creardatosTecnicosInteres(this.datosTecnicosInteres)
  }

  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionada;
}


}
