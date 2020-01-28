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
  idMensagem:Number = 1;
  remetente:String = "remetente da msg";
  mensagem:String  = "título da mensagem";
  dataHora:String = "12/04/2020 13:24";
  removerMensagem(){
    alert("A");
  }
}
