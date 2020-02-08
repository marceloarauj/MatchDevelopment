import { Injectable } from '@angular/core';
import * as signalrChat from "@aspnet/signalr";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatWsService {

  constructor() { }

  private conexao: signalrChat.HubConnection;
  private comportamentoMensagem:BehaviorSubject<String> = new BehaviorSubject<String>("");

  public conectarChatGlobal(){

    this.conexao = new signalrChat.HubConnectionBuilder()
        .withUrl("http://localhost:5000/WSglobal",{skipNegotiation:true,
                  transport: signalrChat.HttpTransportType.WebSockets}).build();

    this.conexao.start().catch(error =>alert("Erro na conexão"));
  }

  public obterComportamento():BehaviorSubject<String>{
    return this.comportamentoMensagem;
  }
  // ao receber 
  public receberMensagemGlobal(){
    this.conexao.on('MensagemGlobal',(data) =>{
      
      if(data != null && data != undefined)
        this.comportamentoMensagem.next(JSON.stringify(data));
    });
  }
  // ao enviar 
  public enviarMensagemGlobal(mensagem){
    this.conexao.invoke('MensagemGlobal',mensagem);
  }

  public enviarMensagemGrupo(mensagem, idGrupo){
    this.conexao.invoke('mensagemGrupo',{Mensagem:mensagem,IdGrupo:idGrupo});
  }
  public enviarMensagemPrivada(mensagem,idUsuario){
    this.conexao.invoke('mensagemPrivada',{Mensagem:mensagem,IdUsuario:idUsuario});
  }
}
