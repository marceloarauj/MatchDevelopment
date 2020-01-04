import { Component } from '@angular/core';
import {RegistraIconesService} from '../app/registra-icones.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private registraIcone:RegistraIconesService){}

  rotaTemCabecalho = function rotaAtualTemCabecalho():Boolean{
    
    const rotaAtual = window.location.pathname;
    
    return rotaAtual === "/login" || rotaAtual === "/inicio";
  }

}
