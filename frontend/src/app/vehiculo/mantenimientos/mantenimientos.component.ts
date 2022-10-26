import { Component, OnInit } from '@angular/core';
import { Mantenimiento } from '../models/mantenimiento';

@Component({
  selector: 'app-mantenimientos',
  templateUrl: './mantenimientos.component.html',
  styleUrls: ['./mantenimientos.component.css']
})
export class MantenimientosComponent implements OnInit {

  mantenimiento!: Mantenimiento;
  mantenimientos:Mantenimiento[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
