import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){}

  rotaTemCabecalho = function rotaAtualTemCabecalho():Boolean{
    
    const rotaAtual = window.location.pathname;
    
    return rotaAtual === "/login" || 
           rotaAtual === "/apresentacao" ||
           rotaAtual === "/";
  }

}
