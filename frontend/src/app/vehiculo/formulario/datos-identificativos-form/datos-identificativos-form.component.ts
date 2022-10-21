import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatosTecnicosInteres } from '../../models/datos-tecnicos-interes';
import { DatosTecnicosInteresImpl } from '../../models/datos-tecnicos-interes-impl';
import { MantenimientoPreventivoImpl } from '../../models/planes-preventivos-impl';
import { Vehiculo } from '../../models/vehiculo';
import { VehiculoImpl } from '../../models/vehiculo-impl';
import { DatosTecnicosInteresService } from '../../service/datos-tecnicos-interes.service';
import { MantenimientoPreventivoService } from '../../service/mantenimiento-preventivo.service';
import { VehiculoService } from '../../service/vehiculo.service';

@Component({
  selector: 'app-datos-identificativos-form',
  templateUrl: './datos-identificativos-form.component.html',
  styleUrls: ['./datos-identificativos-form.component.css']
})
export class DatosIdentificativosFormComponent implements OnInit {

  vehiculo: Vehiculo = new VehiculoImpl;
  datosTecnicosInteres: DatosTecnicosInteres =new DatosTecnicosInteresImpl();
  mantenimientoPreventivo: MantenimientoPreventivoImpl = new MantenimientoPreventivoImpl();
  tipoVehiculo;
  opcionSeleccionada: string = '0'
  verSeleccion: string = '';
  
  @Input()
  firstformgroup = this._formBuilder.group({
    matriculatCtrl: ['', Validators.required],
    fechaAltaCtrl: ['', Validators.required],
    marcaCtrl: ['', Validators.required],
    modeloCtrl: ['', Validators.required],
    tipoCtrl: ['', Validators.required],
    unidadDestinoCtrl: ['', Validators.required],
    fechaAdjudicacionCtrl:['', Validators.required]

  });

  constructor( private _formBuilder: FormBuilder,
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
