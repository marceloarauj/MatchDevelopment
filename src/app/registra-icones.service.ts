import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
//serviço para registrar ícones do projeto que não são do angular mat-icon
export class RegistraIconesService {

  constructor(private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer) {
    
    //icone do usuario perfil  
    this.matIconRegistry.addSvgIcon('perfil',
          this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/perfil_icone.svg'));
    
    //icone de ajuda 
    this.matIconRegistry.addSvgIcon('ajuda',
          this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/ajuda_icone.svg'));
        
    }
}
