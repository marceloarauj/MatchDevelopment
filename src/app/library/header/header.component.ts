import { Component, OnInit } from '@angular/core';
import {MenuComponent} from '../menu/menu.component';
import {BehaviorSubject} from 'rxjs';
@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit() {}

  constructor() {}

    ComportamentoDrawer = new BehaviorSubject<any>(false);

    AlterarDrawer(){
      //emite um valor para o drawer
      this.ComportamentoDrawer.next(true);
    }
}
