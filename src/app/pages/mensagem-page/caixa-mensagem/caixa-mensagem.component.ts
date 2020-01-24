import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Mensagem',
  templateUrl: './caixa-mensagem.component.html',
  styleUrls: ['./caixa-mensagem.component.css']
})
export class CaixaMensagemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mensagem:String = "mensagem do usuario";
}
