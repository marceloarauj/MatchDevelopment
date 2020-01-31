import { Component, OnInit } from '@angular/core';
import {ChatService} from '../chat-global/chat.service';
@Component({
  selector: 'ChatGlobal',
  templateUrl: './chat-global.component.html',
  styleUrls: ['./chat-global.component.css']
})
export class ChatGlobalComponent implements OnInit {

  constructor(private chatServ:ChatService) { }

  mensagem:String = "";

  enviarMensagem(){
    this.chatServ.enviarMensagem(this.mensagem);
  }

  ngOnInit() {
  }

}
