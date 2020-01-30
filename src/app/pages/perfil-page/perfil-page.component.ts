import { Component, OnInit } from '@angular/core';
import {ExpBarComponent} from '../perfil-page/components/exp-bar/exp-bar.component';
import {MapaDeIconesService} from '../../helpers/mapa-de-icones.service';
@Component({
  selector: 'app-perfil-page',
  templateUrl: './perfil-page.component.html',
  styleUrls: ['./perfil-page.component.css']
})
export class PerfilPageComponent implements OnInit {

  nome:String = "KaisenAlphaPvE";
  level:String  = "50";
  
  constructor(private icones:MapaDeIconesService) { }

  icon:String = this.icones.ICONES.java;
  
  ngOnInit() {
  }
  
}
