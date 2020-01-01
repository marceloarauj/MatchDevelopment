import { Component, OnInit, Input } from '@angular/core';
import {LoginService} from '../login-page/login-page-services';
@Component({
  selector: 'LoginPage',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent{

  objetoLogin:LoginService;
  login:String;
  senha:String;

  constructor() {
    this.objetoLogin = new LoginService();
   }

  efetuarLogin(){
    this.objetoLogin.efetuarLogin({'Login':this.login,'Senha':this.senha});
  }
}
