import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControlName, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Router, ActivatedRoute } from '@angular/router';
import { DatosTecnicosInteresService } from '../service/datos-tecnicos-interes.service';
import { MantenimientoPreventivoService } from '../service/mantenimiento-preventivo.service';
import { VehiculoService } from '../service/vehiculo.service';
import { DatosTecnicosInteres } from '../models/datos-tecnicos-interes';
import { DatosTecnicosInteresImpl } from '../models/datos-tecnicos-interes-impl';
import { MantenimientoPreventivoImpl } from '../models/planes-preventivos-impl';
import { Vehiculo } from '../models/vehiculo';
import { VehiculoImpl } from '../models/vehiculo-impl';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class FormularioComponent implements OnInit {
  

  vehiculo: Vehiculo = new VehiculoImpl;
  datosTecnicosInteres: DatosTecnicosInteres =new DatosTecnicosInteresImpl();
  mantenimientoPreventivo: MantenimientoPreventivoImpl = new MantenimientoPreventivoImpl();
  tipoVehiculo;
 

  firstFormGroup = this._formBuilder.group({
    matricula: ['', Validators.required],
    fechaAlta: ['', Validators.required],
    marca: ['', Validators.required],
    modelo: ['', Validators.required],
    tipoVehiculo: ['', Validators.required],
    unidadDestino: ['', Validators.required],
    fechaAdjudicacion:['', Validators.required],

  });
  secondFormGroup = this._formBuilder.group({
    bastidor: ['', Validators.required],
    color:  ['', Validators.required],
    combustible:  ['', Validators.required],
    cambio:  ['', Validators.required],
    capacidadDeposito:  ['', Validators.required],
    lubricanteMotor:  ['', Validators.required],
    capacidadCarter:  ['', Validators.required],
    presionNeumaticosDelanteros:  ['', Validators.required],
    presionNeumaticosTraseros:  ['', Validators.required],
    tipoCubiertas:  ['', Validators.required],
    numeroBaterias:  ['', Validators.required],
    voltajeBaterias: ['', Validators.required],
    amperajeBaterias:  ['', Validators.required],
    amperiosHoraBaterias:  ['', Validators.required],
    clasificacionMedioambiental: ['', Validators.required],
    
  });

  thirdFormGroup = this._formBuilder.group({
    condicionesUso:['', Validators.required],
    observaciones: ['', Validators.required],
  liquidoFrenosKm: ['', Validators.required],
	liquidoFrenosMes: ['', Validators.required],
	operacionesSistematicasKm: ['', Validators.required],
	operacionesSistematicasMes: ['', Validators.required],
	filtroAireKm: ['', Validators.required],
	filtroAireMes: ['', Validators.required],
	filtroAireHabitaculoKm: ['', Validators.required],
	filtroAireHabitaculoMes: ['', Validators.required],
	filtroCombustibleKm:['', Validators.required],
	filtroCombustibleMes:['', Validators.required],
	filtroAntipolenKm:['', Validators.required],
	filtroAntipolenMes:['', Validators.required],
	correaDistribucionKm:['', Validators.required],
	correaDistribucionMes:['', Validators.required],
	kitDistribucionKm:['', Validators.required],
	kitDistribucionMes:['', Validators.required],
	reglajeProyectoresKm:['', Validators.required],
	reglajeProyectoresMes:['', Validators.required],
	pHLiquidoRefrigeracionKm:['', Validators.required],
	pHLiquidoRefrigeracionMes:['', Validators.required],
	liquidoRefrigeracionKm:['', Validators.required],
	liquidoRefrigeracionMes:['', Validators.required],
	correaArrastreAccesoriosKm:['', Validators.required],
	correaArrastreAccesoriosMes:['', Validators.required],
	kitCorreaArrastreAccesoriosKm:['', Validators.required],
	kitCorreaArrastreAccesoriosMes:['', Validators.required],
	anticongelanteKm:['', Validators.required],
	anticongelanteMes:['', Validators.required],
	aceiteTransmisionKm:['', Validators.required],
	aceiteTransmisionMes:['', Validators.required],
	bujiasEncendidoKm:['', Validators.required],
  bujiasEncendidoMes:['', Validators.required],
   });

  constructor(private _formBuilder: FormBuilder,
    private vehiculoService: VehiculoService,
    private datosTecnicosInteresService: DatosTecnicosInteresService,
    private mantenimientoPreventivoService: MantenimientoPreventivoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { 
      this.tipoVehiculo=["Turismo", "Todo Terreno","Motocicleta", "Otros"];
    }

  ngOnInit(): void {
    /*let id: string = this.cargarVehiculo();
    let idDatos: string = this.cargarDatosTecnicosInteres();
    let idMantenimientoPreventivo: string =this.cargarMantenimientoPreventivo();*/
  }

  cargarVehiculo(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

  cargarDatosTecnicosInteres():string{
    return this.activatedRoute.snapshot.params['id'];
  }

  cargarMantenimientoPreventivo():string{
    return this.activatedRoute.snapshot.params['id'];
  }

  create(): void{
    this.vehiculoService.crearVehiculo(this.vehiculo);
    this.datosTecnicosInteresService.creardatosTecnicosInteres(this.datosTecnicosInteres);
    this.mantenimientoPreventivoService.crearMantenimientoPreventivo(this.mantenimientoPreventivo);
  }

  onAddVehiculo(): void {
    this.datosTecnicosInteresService.creardatosTecnicosInteres
    (this.datosTecnicosInteres).subscribe
    (datosTecnicos=>{
      this.vehiculo.datosTecnicosInteres=datosTecnicos._links.datotecnicointeres.href;
    console.log(this.vehiculo);
    this.mantenimientoPreventivoService.crearMantenimientoPreventivo
    (this.mantenimientoPreventivo).subscribe
    (planPreventivo =>{this.vehiculo.planespreventivos=planPreventivo._links.planpreventivo.href; console.log(this.vehiculo);
      this.vehiculoService.crearVehiculo(this.vehiculo).subscribe();});
  });     
    let id: string = this.cargarVehiculo();
    this.router.navigate([`/vehiculos/consultar/${id}`]);
  }

  onAddDatosTecnicosInteres(): void {
    
    let id: string = this.cargarDatosTecnicosInteres();
    this.router.navigate([`/datostecnicosinteres/editar/${id}`]);
  }

  onAddMantenimientoPreventivo(): void {
    
    let id: string = this.cargarMantenimientoPreventivo();
    this.router.navigate([`/planespreventivos/editar/${id}`]);
  }


}
