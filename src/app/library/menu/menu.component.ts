import { Component, OnInit,Input, ViewChild,HostListener } from '@angular/core';
import { BehaviorSubject,Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'Menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild('drawer',{static:false}) public drawer:MatSidenav;
  @Input() ComportamentoDrawer:BehaviorSubject<any>;
  AbrirOuFecharDrawer:boolean = false;
  // false = fechar , true = abrir , o true sempre vem do header
  constructor(private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer) {
          
    this.matIconRegistry.addSvgIcon('logo',
          this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/match-logo.svg'));        
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.ComportamentoDrawer.subscribe(valor =>{
      this.AbrirOuFecharDrawer = valor;
      this.drawer.toggle(valor);
    });
  }

  @HostListener('document:click')
  FecharDrawer(){
    
    if(!this.AbrirOuFecharDrawer){
      this.drawer.toggle(false);
    }
    this.AbrirOuFecharDrawer = false;
  }
}
