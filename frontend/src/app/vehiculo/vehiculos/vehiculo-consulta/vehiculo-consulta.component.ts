import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehiculo } from '../../models/vehiculo';
import { VehiculoImpl } from '../../models/vehiculo-impl';
import { VehiculoService } from '../../service/vehiculo.service';


@Component({
  selector: 'app-vehiculo-consulta',
  templateUrl: './vehiculo-consulta.component.html',
  styleUrls: ['./vehiculo-consulta.component.css']
})
export class VehiculoConsultaComponent implements OnInit {

  vehiculo: Vehiculo =new VehiculoImpl();

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
