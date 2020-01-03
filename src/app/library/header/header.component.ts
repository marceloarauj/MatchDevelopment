import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {MenuComponent} from '../menu/menu.component';
import {BehaviorSubject} from 'rxjs';
@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit() {}

  constructor(private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer) {
    //icone do usuario perfil  
    this.matIconRegistry.addSvgIcon('perfil',
          this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/perfil_icone.svg'));
    
    //icone de ajuda 
    this.matIconRegistry.addSvgIcon('ajuda',
          this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/ajuda_icone.svg'));
    }

    ComportamentoDrawer = new BehaviorSubject<any>(false);

    AlterarDrawer(){
      //emite um valor para o drawer
      this.ComportamentoDrawer.next(true);
    }
}
