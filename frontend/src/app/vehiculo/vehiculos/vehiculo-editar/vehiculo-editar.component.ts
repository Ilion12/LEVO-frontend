import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { DatosTecnicosInteres } from '../../models/datos-tecnicos-interes';
import { DatosTecnicosInteresImpl } from '../../models/datos-tecnicos-interes-impl';
import { MantenimientoPreventivo } from '../../models/planes-preventivos';
import { MantenimientoPreventivoImpl } from '../../models/planes-preventivos-impl';
import { Vehiculo } from '../../models/vehiculo';
import { VehiculoImpl } from '../../models/vehiculo-impl';
import { DatosTecnicosInteresService } from '../../service/datos-tecnicos-interes.service';
import { MantenimientoPreventivoService } from '../../service/mantenimiento-preventivo.service';
import { VehiculoService } from '../../service/vehiculo.service';

@Component({
  selector: 'app-vehiculo-editar',
  templateUrl: './vehiculo-editar.component.html',
  styleUrls: ['./vehiculo-editar.component.css']
})
export class VehiculoEditarComponent implements OnInit {


  urlEndpoint=environment.host;

  vehiculo: Vehiculo =new VehiculoImpl();
  datosTecnicosInteres: DatosTecnicosInteres = new DatosTecnicosInteresImpl();
  mantenimientoPreventivo: MantenimientoPreventivo = new MantenimientoPreventivoImpl();
  mantenimientoPreventivoVerDatos: MantenimientoPreventivoImpl = new MantenimientoPreventivoImpl();
  datosTecnicosInteresVerDatos: DatosTecnicosInteresImpl = new DatosTecnicosInteresImpl();

  firstFormGroup = this._formBuilder.group({
    matricula: ['', ],
    fechaAlta: ['', ],
    marca: ['', ],
    modelo: ['', ],
    tipoVehiculo: ['', ],
    unidadDestino: ['', ],
    fechaAdjudicacion:['', ],

  });
  secondFormGroup = this._formBuilder.group({
    bastidor: [''],
    color:  [''],
    combustible:  ['', ],
    cambio:  ['', ],
    capacidadDeposito:  ['', ],
    lubricanteMotor:  ['', ],
    capacidadCarter:  ['', ],
    presionNeumaticosDelanteros:  ['', ],
    presionNeumaticosTraseros:  ['', ],
    tipoCubiertas:  ['', ],
    numeroBaterias:  ['', ],
    voltajeBaterias: ['', ],
    amperajeBaterias:  ['', ],
    amperiosHoraBaterias:  ['', ],
    clasificacionMedioambiental: ['', ],
    
  });

  thirdFormGroup = this._formBuilder.group({
    condicionesUso:['', ],
    observaciones: ['', ],
  liquidoFrenosKm: ['', ],
	liquidoFrenosMes: ['', ],
	operacionesSistematicasKm: ['', ],
	operacionesSistematicasMes: ['', ],
	filtroAireKm: ['', ],
	filtroAireMes: ['', ],
	filtroAireHabitaculoKm: ['', ],
	filtroAireHabitaculoMes: ['', ],
	filtroCombustibleKm:['', ],
	filtroCombustibleMes:['', ],
	filtroAntipolenKm:['', ],
	filtroAntipolenMes:['', ],
	correaDistribucionKm:['', ],
	correaDistribucionMes:['', ],
	kitDistribucionKm:['', ],
	kitDistribucionMes:['', ],
	reglajeProyectoresKm:['', ],
	reglajeProyectoresMes:['', ],
	pHLiquidoRefrigeracionKm:['', ],
	pHLiquidoRefrigeracionMes:['', ],
	liquidoRefrigeracionKm:['', ],
	liquidoRefrigeracionMes:['', ],
	correaArrastreAccesoriosKm:['', ],
	correaArrastreAccesoriosMes:[''],
	kitCorreaArrastreAccesoriosKm:[''],
	kitCorreaArrastreAccesoriosMes:[''],
	anticongelanteKm:[''],
	anticongelanteMes:[''],
	aceiteTransmisionKm:[''],
	aceiteTransmisionMes:[''],
	bujiasEncendidoKm:[''],
  bujiasEncendidoMes:[''],
   });
  constructor(private vehiculoService: VehiculoService,
    private datosTecnicosInteresService: DatosTecnicosInteresService, 
    private mantenimientoPreventivoService: MantenimientoPreventivoService,
    private router : Router,
    private activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    let id: string = this.cargarVehiculo();
    this.vehiculoService.getVehiculo(id).subscribe(response => 
      this.vehiculo = this.vehiculoService.mapearVehiculo(response));
      this.datosTecnicosInteresService.getDatosTecnicosInteresVehiculo(id).subscribe(response=>
        this.datosTecnicosInteres=this.datosTecnicosInteresService.mapearDatosTecnicosInteres(response));
      this.mantenimientoPreventivoService.getPP(id).subscribe(response =>
        this.mantenimientoPreventivo = this.mantenimientoPreventivoService.mapearMantenimientoPreventivo(response))
      }

  cargarVehiculo(): string {
    return this.activatedRoute.snapshot.params['id'];
  }
  onEditarVehiculo(): void {
    this.vehiculo.datosTecnicosInteres=`${this.urlEndpoint}datostecnicosinteres/${this.datosTecnicosInteres.id}`;
    this.vehiculo.planespreventivos=`${this.urlEndpoint}planespreventivos/${this.mantenimientoPreventivo.id}`;
    this.vehiculoService.updateVehiculo(this.vehiculo).subscribe(); 
    this.datosTecnicosInteresService.updateDatosTecnicosInteres(this.datosTecnicosInteres).subscribe();
    this.mantenimientoPreventivoService.updateMantenimmientoPreventivo(this.mantenimientoPreventivo).subscribe();
    this.router.navigate(['administrador']);
  }

  verDatosVehiculo(vehiculo: Vehiculo): void {
    this.vehiculo = vehiculo;
  }


}
