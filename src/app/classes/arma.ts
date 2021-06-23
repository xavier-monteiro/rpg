export class Arma {

  nome: string;
  ataque: number;
  durabilidade: number;
  tipoArma: string;


  constructor(name, atk, durabilidade, TipoArma) {
    this.nome = name;
    this.ataque = atk;
    this.durabilidade = durabilidade;
    this.tipoArma = TipoArma;

  }
}
