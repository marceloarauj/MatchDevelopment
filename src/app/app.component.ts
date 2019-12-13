import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
  }

  //O Cabeçalho só existe se não for a tela de login
  ehRotaLogin = function ehRotaLogin():Boolean{
    
    const rotaAtual = window.location.pathname;
    
    return rotaAtual === "/login";
  }
}
