import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personagem } from '../classes/personagem';
import { Utilizador } from '../classes/utilizador';

@Injectable({
  providedIn: 'root'
})
export class AcessoBDService {

  constructor(private httpClient : HttpClient) { }

  // vars
  link_Login: string = "http://moreiramoises.pt/server/apis/login.php";
  link_Signup: string = 'http://moreiramoises.pt/server/apis/signup.php';
  link_CriarPersonagem: string = 'http://moreiramoises.pt/server/apis/createChart.php';
  link_CriarArma : string = 'http://moreiramoises.pt/server/apis/createArma.php';
  link_GetId: string = 'http://moreiramoises.pt/server/apis/get/getChar.php?PlayerID=';
  link_GetInimigo: string = 'http://moreiramoises.pt/server/apis/get/getRandomChar.php?';
  linkUpdateChar: string = 'http://moreiramoises.pt/server/apis/updateChart.php';


  userThatLogged : Utilizador;
  userCharacter : Personagem;

  // log in to an account
  LogIn(user, pass) {
    let dataToSend: FormData = new FormData();

    dataToSend.append("username", user);
    dataToSend.append("password", pass);

    return this.httpClient.post(this.link_Login, dataToSend);
  }

  // create an account
  Signup(user, pass) {
    let dataToSend: FormData = new FormData();

    dataToSend.append('username', user);
    dataToSend.append('password', pass);

    return this.httpClient.post(this.link_Signup, dataToSend);
  }

  // create a character
  createPersonagem(name, atk, int, vida, user, pass) {
    let dataToSend: FormData = new FormData();

    dataToSend.append('name', name);
    dataToSend.append('atk', atk);
    dataToSend.append('isMonster', 'false');
    dataToSend.append('int', int);
    dataToSend.append('vida', vida);
    dataToSend.append('username', user);
    dataToSend.append('password', pass);

    return this.httpClient.post(this.link_CriarPersonagem, dataToSend);
  }

  createArma(name,atk,durabilidade,tipoDeArma,vida,username,password,idPersonagem)
  {
    let dataToSend: FormData = new FormData();

    dataToSend.append('name', name);
    dataToSend.append('atk', atk);
    dataToSend.append('durabilidade', durabilidade);
    dataToSend.append('tipoDeArma', tipoDeArma);
    dataToSend.append('vida', vida);
    dataToSend.append('username', username);
    dataToSend.append('password', password);
    dataToSend.append('idPersonagem', idPersonagem);

    return this.httpClient.post(this.link_CriarArma, dataToSend);
  }

  // get a character by account id
  getPersonagem(id) {
    return this.httpClient.get(this.link_GetId + id);
  }

  // get a random character
  getInimigo() {
    return this.httpClient.get(this.link_GetInimigo);
  }

  // update your character character
  atualizarStats(name,atk, int, vida,username,password) {
    let dataToSend: FormData = new FormData();

    dataToSend.append('name', name);
    dataToSend.append('atk', atk);
    dataToSend.append('isMonster', 'false');
    dataToSend.append('int', int);
    dataToSend.append('vida', vida);
    dataToSend.append('username', username);
    dataToSend.append('password', password);

    return this.httpClient.post(this.linkUpdateChar, dataToSend);
  }
}
