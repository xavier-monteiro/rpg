import { Utilizador } from "./utilizador";

export class Personagem {
  nome: string;
  ataque: number;
  inteligencia: number;
  vida : number;
  id_personagem: number;

  dono_personagem : Utilizador;

  constructor(name, atk, int, vida, dono?,id?) {
    this.nome = name;
    this.ataque = atk;
    this.inteligencia = int;
    this.vida = vida;

    if(dono)
    {
      this.dono_personagem = dono;
      this.id_personagem = id;
    }


  }

  AtualizarValor(atk?,int?,vida?)
  {
    if(atk)
    {
      console.log("Ataque default: " +this.ataque);
      this.ataque = atk;
      console.log("novo: "+this.ataque);
    }if(int)
    {
      console.log("Int default: " +this.inteligencia);
      this.inteligencia = int;
      console.log("novo: "+this.inteligencia);
    }if(vida)
    {
      console.log("Vida default: " +this.vida);
      this.vida = vida;
      console.log("novo: "+this.vida);
    }

  }
}
