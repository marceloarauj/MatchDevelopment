import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MapaDeIconesService {

  constructor() { }
  
  urlIcones = "./../assets/icones-perfil/icons";

  public ICONES = {
    angular: this.urlIcones.toString() + "/angularjs/angularjs-original.svg",
    csharp: this.urlIcones.toString() + "/csharp/csharp-original.svg",
    java: this.urlIcones.toString() + "/java/java-original.svg",
    python: this.urlIcones.toString() + "/python/python-original.svg",
    postgresql: this.urlIcones.toString() +"/postgresql/postgresql.svg"
  }
}
