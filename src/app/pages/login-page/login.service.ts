import { Injectable } from '@angular/core';
import axios from 'axios';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL_BASE = "http://localhost:5000";
  private BearerToken = 'ksh2g318sgbam1028472873man2uei1qpl321';

  private config = {
    headers:{Authorization: 'Bearer '+ this.BearerToken}
  }

  constructor(private cookies:CookieService) { }

 async efetuarLogin(dados:Object) {
    let status='';
    let dadosDoUsuario = {};

    await axios.post(this.URL_BASE +"/usuario/login",dados,this.config).then(
      data =>{

        if(data.status !== 200){
          status = "Login ou Senha incorretos"
        }
        else{
          status = "OK";         
          this.cookies.set("AUTH_TOKEN",data.data.token);
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
