import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DatosTecnicosInteres } from '../../models/datos-tecnicos-interes';
import { Mantenimiento } from '../../models/mantenimiento';
import { MantenimientoImpl } from '../../models/mantenimiento-impl';
import { MantenimientoPreventivo } from '../../models/planes-preventivos';
import { Vehiculo } from '../../models/vehiculo';
import { DatosTecnicosInteresService } from '../../service/datos-tecnicos-interes.service';
import { MantenimientoPreventivoService } from '../../service/mantenimiento-preventivo.service';
import { MantenimientoService } from '../../service/mantenimiento.service';
import { VehiculoService } from '../../service/vehiculo.service';

@Component({
  selector: 'app-mantenimiento-form',
  templateUrl: './mantenimiento-form.component.html',
  styleUrls: ['./mantenimiento-form.component.css']
})
export class MantenimientoFormComponent implements OnInit {

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}vehiculos`;

  mantenimiento :Mantenimiento=new MantenimientoImpl();
  vehiculo!: Vehiculo;
  datosTecnicosInteres!: DatosTecnicosInteres;
  mantenimientoPreventivo!: MantenimientoPreventivo;

  constructor(private _formBuilder: FormBuilder,
    private vehiculoService: VehiculoService,
    private datosTecnicosInteresService:DatosTecnicosInteresService,
    private mantenimientoPreventivoService: MantenimientoPreventivoService,
    private mantenimientoService: MantenimientoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { 
    }

  ngOnInit(): void {
    let id: string = this.cargarVehiculo();
    console.log(id)
    this.vehiculoService.getVehiculo(id).subscribe(response =>{ 
      this.vehiculo = this.vehiculoService.mapearVehiculo(response); console.log(this.vehiculo);});
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

  onAddMantenimiento(): void{
    this.mantenimiento.vehiculo=`${this.urlEndPoint}/${this.vehiculo.id}`;
    this.mantenimientoService.crearMantenimiento(this.mantenimiento).subscribe();

  }

}
