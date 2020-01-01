import { Component, OnInit,Input, ViewChild } from '@angular/core';
import { BehaviorSubject,Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'Menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild('drawer',{static:false}) public drawer:MatSidenav;
  @Input() ComportamentoDrawer:BehaviorSubject<any>;
  
  constructor() {}

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.ComportamentoDrawer.subscribe(valor =>{
      this.drawer.toggle(valor);
    });
  }

}
