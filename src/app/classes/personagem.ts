import { Utilizador } from "./utilizador";

export class Personagem {
  nome: string;
  ataque: number;
  inteligencia: number;
  vida : number;
  id_personagem: number;

  dono_personagem : Utilizador;

  constructor(name, atk, int, vida, dono,id) {
    this.nome = name;
    this.ataque = atk;
    this.inteligencia = int;
    this.vida = vida;
    this.dono_personagem = dono;
    this.id_personagem = id;

  }
}
