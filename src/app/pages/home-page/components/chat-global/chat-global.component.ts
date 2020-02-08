import { Component, OnInit, Input } from '@angular/core';
import {ChatWsService} from 'src/app/helpers/chat-ws.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'ChatGlobal',
  templateUrl: './chat-global.component.html',
  styleUrls: ['./chat-global.component.css']
})
export class ChatGlobalComponent implements OnInit {

  constructor(private chatWS:ChatWsService) { 
  }

  mensagem:String = "";
  mensagensAnteriores:String[] = new Array();
  comportamentoMensagem:BehaviorSubject<String>;
  
  enviarMensagem(){
    this.chatWS.enviarMensagemGlobal(this.mensagem);
  }
  

  ngOnInit() {
    this.chatWS.conectarChatGlobal();
    this.chatWS.receberMensagemGlobal();
    this.comportamentoMensagem = this.chatWS.obterComportamento();
  }

  ngAfterViewInit(): void {
    this.comportamentoMensagem.subscribe(msg =>{
      if(msg !== "" && msg !== undefined && msg !== null)
        this.mensagensAnteriores.push(msg);
    });
  }
}
