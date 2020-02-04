import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticadoService {

  constructor() { }

  private autenticado:boolean = false;

  IsAutenticado(){
    return this.autenticado;
  }

  SetAutenticado(mudaAutenticado:boolean){
    this.autenticado = mudaAutenticado;
  }
}
