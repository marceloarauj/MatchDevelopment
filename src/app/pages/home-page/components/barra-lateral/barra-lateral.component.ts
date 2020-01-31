import { Component, OnInit } from '@angular/core';
import {MapaDeIconesService} from '../../../../helpers/mapa-de-icones.service';
@Component({
  selector: 'BarraLateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css']
})
export class BarraLateralComponent implements OnInit {

  constructor(private icones:MapaDeIconesService) { }

  ngOnInit() {}


}
