import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MenuIconeService {

  constructor(private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer) {
          
    this.matIconRegistry.addSvgIcon('logo',
          this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/match-logo.svg'));        
  }
}
