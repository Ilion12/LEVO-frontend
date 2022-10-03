import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-datos-identificativos',
  templateUrl: './datos-identificativos.component.html',
  styleUrls: ['./datos-identificativos.component.css']
})
export class DatosIdentificativosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lupa=faMagnifyingGlass;

}
