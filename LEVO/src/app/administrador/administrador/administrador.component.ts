import { Component, Input, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/vehiculo/models/vehiculo';
import { VehiculoImpl } from 'src/app/vehiculo/models/vehiculo-impl';
import { VehiculoService } from 'src/app/vehiculo/service/vehiculo.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  @Input() vehiculo: Vehiculo = new VehiculoImpl();
  vehiculos:Vehiculo[]=[];
  vehiculoVerDatos: Vehiculo = new VehiculoImpl();
  matricula!: string;

  constructor(
    private vehiculoService: VehiculoService
  ) { }

  vehiculoBuscado(matricula:string){
    this.vehiculoService.getVehiculoBuscado(matricula).subscribe((response:Vehiculo) => {
      this.vehiculos=this.vehiculoService.extraerVehiculos(response)
    });
  }

  ngOnInit(): void {
  }

}
