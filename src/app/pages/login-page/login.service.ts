import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL_BASE = "http://localhost:5000";

  constructor() { }

 async efetuarLogin(dados:Object) {
    let status='';
    let dadosDoUsuario = {};

    await axios.post(this.URL_BASE +"/usuario/login",dados).then(
      data =>{

        if(data.status !== 200){
          status = "Login ou Senha incorretos"
        }
        else{
          status = "OK";
          dadosDoUsuario = data.data;
        }      
      }
      );
      
      return {status:status,dados:dadosDoUsuario};
  }

  async efetuarRegistro(dados:Object){
    let status = '';

    await axios.post(this.URL_BASE + "/usuario/registrar",dados).then(
      data =>{
        
      }
    );
    
  }
}
