import axios from 'axios';

export class LoginService {

    URL_LOGIN = "http://localhost:4200/usuario/login";

    constructor() {}

    efetuarLogin(dados:Object) {
        axios.post(this.URL_LOGIN,dados);
    }
}