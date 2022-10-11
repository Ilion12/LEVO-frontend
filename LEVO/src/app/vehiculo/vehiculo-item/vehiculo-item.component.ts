import { Component, Input, OnInit } from '@angular/core';
import { Vehiculo } from '../models/vehiculo';

@Component({
  selector: 'app-vehiculo-item',
  templateUrl: './vehiculo-item.component.html',
  styleUrls: ['./vehiculo-item.component.css']
})
export class VehiculoItemComponent implements OnInit {

  @Input()
  vehiculo!: Vehiculo;
  constructor() { }

  ngOnInit(): void {
  }

}
