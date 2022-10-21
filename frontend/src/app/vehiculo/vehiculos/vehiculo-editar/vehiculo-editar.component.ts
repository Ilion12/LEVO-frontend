import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Vehiculo } from '../../models/vehiculo';
import { VehiculoImpl } from '../../models/vehiculo-impl';
import { VehiculoService } from '../../service/vehiculo.service';

@Component({
  selector: 'app-vehiculo-editar',
  templateUrl: './vehiculo-editar.component.html',
  styleUrls: ['./vehiculo-editar.component.css']
})
export class VehiculoEditarComponent implements OnInit {

  vehiculo: Vehiculo = new VehiculoImpl();

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}vehiculos`

  constructor(private vehiculoService: VehiculoService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private http: HttpClient) { }

  ngOnInit(): void {
    let id: string = this.cargarVehiculo();
    this.vehiculoService.getVehiculo(id).subscribe(response => 
    this.vehiculo = this.vehiculoService.mapearVehiculo(response));
  }

  onEditarVehiculo(): void {
    this.vehiculoService.updateVehiculo(this.vehiculo).subscribe(); 
    this.router.navigate(['administrador']);
  }

  cargarVehiculo(): string {
    return this.activatedRoute.snapshot.params['id'];
  }


}
