import { Component, OnInit, Input } from '@angular/core';
import {LoginService} from '../login-page/login-page-services';
@Component({
  selector: 'LoginPage',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  objetoLogin:LoginService;

  constructor() {
    this.objetoLogin = new LoginService();
   }

  ngOnInit() {
  }
  login:String;
  senha: String;

  efetuarLogin(){
    alert(this.login);
    alert(this.senha)
    //this.objetoLogin.efetuarLogin({'login':'marcelo','senha':'abc123'});
  }
}
