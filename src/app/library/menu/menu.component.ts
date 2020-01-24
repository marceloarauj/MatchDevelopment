import { Component, OnInit,Input, ViewChild,HostListener } from '@angular/core';
import { BehaviorSubject,Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {MenuIconeService} from 'src/app/library/menu/menu-icone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'Menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild('drawer',{static:false}) public drawer:MatSidenav;
  @Input() ComportamentoDrawer:BehaviorSubject<any>;
  AbrirOuFecharDrawer:boolean = false;

  constructor(private RegistroIcone:MenuIconeService,private router:Router) {}

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

  mensagens(){
    this.router.navigateByUrl("mensagens");
  }
}
