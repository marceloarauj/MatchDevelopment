import { Component, OnInit, Input } from '@angular/core';
import {LoginService} from '../login-page/login.service';
import {FormValidationService} from '../login-page/form-validation.service';
import { Router } from '@angular/router';
import { AutenticadoService } from 'src/app/autenticado.service';
@Component({
  selector: 'LoginPage',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent{

  ehTelaRegistro:Boolean = false;

  login:String;
  senha:String;

  nome:String;
  email:String;
  senhaConfirmacao:String;

  constructor(
      private objetoLogin:LoginService, 
      private objetoRoute:Router,
      public formValidate:FormValidationService,
      private autenticar:AutenticadoService
    ) 
    {}

  alternarTelaLoginRegistro(valor){
    this.ehTelaRegistro = valor;
  }

  async efetuarLogin(){
   let retorno = await this.objetoLogin.efetuarLogin({'Login':this.login,'Senha':this.senha});
   
   if(retorno.status === "OK"){
     
    this.autenticar.SetAutenticado(true);
    this.objetoRoute.navigateByUrl('/inicio',{state:{Teste:"Sucesso!"}});

   }else{

    alert("ERRO");
   }
  }

  async efetuarRegistro(){

    if(!this.formularioEhValido())
      return;

    let retorno = await this.objetoLogin.efetuarRegistro({
      'NomeUsuario':this.nome,
      'Senha':this.senha,
      'Login':this.login,
      'Email':this.email
    });
  }

  formularioEhValido(){

    if(this.senha !== this.senhaConfirmacao){
      alert("As senhas não são iguais");
      return false;
    }
    if(this.email == undefined || this.email == null ||
       this.nome  == undefined || this.nome  == null ||
       this.login == undefined || this.login == null ||
       this.senha == undefined || this.senha == null  ){

        alert("dados inválidos");
        return false;
       }

    return true;
  }

  
}
