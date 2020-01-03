import { Component, OnInit, Input } from '@angular/core';
import {LoginService} from '../login-page/login.service';
@Component({
  selector: 'LoginPage',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent{

  login:String;
  senha:String;

  constructor(private objetoLogin:LoginService) {
  }

  efetuarLogin(){
    this.objetoLogin.efetuarLogin({'Login':this.login,'Senha':this.senha});
  }
}
