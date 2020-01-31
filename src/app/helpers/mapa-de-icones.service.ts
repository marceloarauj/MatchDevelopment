import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MapaDeIconesService {

  constructor() { }
  
  urlIcones = "./../assets/icones-perfil/icons";

  public ICONES = {
    angular: this.urlIcones + "/angularjs/angularjs-original.svg",
    csharp: this.urlIcones + "/csharp/csharp-original.svg",
    java: this.urlIcones + "/java/java-original.svg",
    python: this.urlIcones + "/python/python-original.svg",
    postgresql: this.urlIcones +"/postgresql/postgresql-original.svg",
    ruby: this.urlIcones + "/ruby/ruby-original.svg"
  }
}
