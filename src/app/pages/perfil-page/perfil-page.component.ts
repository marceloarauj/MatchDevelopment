import { Component, OnInit } from '@angular/core';
import {ExpBarComponent} from '../perfil-page/components/exp-bar/exp-bar.component';
@Component({
  selector: 'app-perfil-page',
  templateUrl: './perfil-page.component.html',
  styleUrls: ['./perfil-page.component.css']
})
export class PerfilPageComponent implements OnInit {

  nome:String = "KaisenAlphaPvE";
  level:String  = "50";
  icon:String = "../../../assets/icones-perfil/icons/angularjs/angularjs-original.svg";
  
  constructor() { }
  
  ngOnInit() {
  }

}
