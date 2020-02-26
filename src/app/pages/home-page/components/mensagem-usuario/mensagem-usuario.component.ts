import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'MensagemUsuario',
  templateUrl: './mensagem-usuario.component.html',
  styleUrls: ['./mensagem-usuario.component.css']
})
export class MensagemUsuarioComponent implements OnInit {

  constructor() { }

  @Input() mensagem:String;
  
  ngOnInit() {
  }

}