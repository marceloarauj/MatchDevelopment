import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 LOGADO_DESLOGADO:String = 'sair';
}
