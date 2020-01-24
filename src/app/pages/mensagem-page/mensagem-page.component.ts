import { Component, OnInit } from '@angular/core';
import {CaixaMensagemComponent} from '../mensagem-page/caixa-mensagem/caixa-mensagem.component';

@Component({
  selector: 'app-mensagem-page',
  templateUrl: './mensagem-page.component.html',
  styleUrls: ['./mensagem-page.component.css']
})
export class MensagemPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  mensagens =['Mensagem','Teste','Teste','Abc','DEF'];
}
