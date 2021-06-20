export class Utilizador {

  nome : string;
  pass: string;
  id_user : number;

  constructor(nome, pass, id) {
    this.nome = nome;
    this.pass = pass;
    this.id_user = id;
  }
}
