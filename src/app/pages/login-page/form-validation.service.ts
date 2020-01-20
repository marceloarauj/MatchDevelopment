import { Injectable } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  form = new FormControl('',this.validarEmail);

  emailInvalido:Boolean = true;
  loginInvalido:Boolean = false;
  senhaInvalida:Boolean = false;
  senhasIguais:Boolean = true;

  msgEmailInvalido:String = "Email inválido";
  msgLoginInválido:String = "Login inválido";
  msgSenhaInválida:String = "Senha inválida";
  msgSenhaDiferente:String = "As senhas informadas são diferentes";

  validarEmail(f:FormControl){
    let regex = "^[a-z0-9]+@[a-z0-9]+$";
    
    if(regex.match(f.value)){
      this.emailInvalido = false;
      return null;
    }
    return {validarEmail:{valid:false}};

   // return regex.match(f.value)? null:{validarEmail:{valid:false}}
  }

  validarLogin(login:String):Boolean{
  
    return true;
  }

  validarSenha(senha:String):Boolean{
    return true;
  }

  validarSenhaConfirmacao(senha:String,senhaConfirm:String):Boolean{
    return true;
  }
}
