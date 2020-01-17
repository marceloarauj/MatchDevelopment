import { Component, OnInit } from '@angular/core';
import {ExpBarComponent} from '../perfil-page/components/exp-bar/exp-bar.component';
@Component({
  selector: 'app-perfil-page',
  templateUrl: './perfil-page.component.html',
  styleUrls: ['./perfil-page.component.css']
})
export class PerfilPageComponent implements OnInit {

  nome:String = "Marcelo Araújo";
  titulo:String  = "Angular - Desenvolvedor";

  constructor() { }
  
  ngOnInit() {
  }

}
