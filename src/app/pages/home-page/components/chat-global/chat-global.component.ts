import { Component, OnInit, Input } from '@angular/core';
import {ChatWsService} from 'src/app/helpers/chat-ws.service';
import { BehaviorSubject } from 'rxjs';
import {MensagemUsuarioComponent} from '../mensagem-usuario/mensagem-usuario.component';
@Component({
  selector: 'ChatGlobal',
  templateUrl: './chat-global.component.html',
  styleUrls: ['./chat-global.component.css']
})
export class ChatGlobalComponent implements OnInit {

  constructor(private chatWS:ChatWsService) { 
  }

  mensagemEnvio:String = "";
  mensagensAnteriores:String[] = new Array();
  comportamentoMensagem:BehaviorSubject<String>;
  
  enviarMensagem(){
    this.chatWS.enviarMensagemGlobal(this.mensagemEnvio);
  }
  

  ngOnInit() {
    this.chatWS.conectarChatGlobal();
    this.chatWS.receberMensagemGlobal();
    this.comportamentoMensagem = this.chatWS.obterComportamento();
  }

  ngAfterViewInit(): void {
    this.comportamentoMensagem.subscribe(msg =>{
      alert(msg)
      if(msg !== "" && msg !== undefined && msg !== null)
        this.items.push({mensagem:msg});
    });
  }

  items:Array<{mensagem:String}> = [{mensagem:'abc'},{mensagem:'def'},{mensagem:'ghi'}];
}

