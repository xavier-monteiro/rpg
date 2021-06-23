import { Arma } from "./arma";
import { Personagem } from "./personagem";

export class Batalha {


  myPlayer : Personagem;
  myEnemy : Personagem;

  myPlayerWeapon : Arma;
  myEnemyWeapon : Arma;


  messages: Array<string> = [];

  constructor(myPlayer: Personagem, myEnemy: Personagem, myWeapon: Arma, hisWeapon : Arma)
  {

        this.myPlayer = myPlayer;
        this.myEnemy = myEnemy;
        this.myPlayerWeapon = myWeapon;
        this.myEnemyWeapon = hisWeapon;
  }

  Attack(again?)
  {

    if(again)
    {
      this.messages.push(`A batalha continua`);

      let whoAttacksFirst = Math.floor(Math.random() * 11);
      if(whoAttacksFirst<=10)
      {
        let meuAtaque = Math.round(this.myPlayer.ataque*100+this.myPlayer.inteligencia*100+this.myPlayerWeapon.ataque*100);
          this.myEnemy.vida -= meuAtaque;
          this.messages.push(`Ataque especial de ${this.myPlayer.nome} tira  ${meuAtaque} de vida`);

          if(this.myEnemy.vida<=0)
          {
            return this.Morreu("ele");
          }else {
            let meuAtaque = Math.round(this.myEnemy.ataque*0.4+this.myEnemy.inteligencia*0.2+this.myEnemyWeapon.ataque*0.4);
        this.myPlayer.vida -= meuAtaque;
        this.messages.push(`Ataque com hacks de ${this.myEnemy.nome} tira  ${meuAtaque} de vida`);
        if(this.myPlayer.vida<=0)
        {
          return this.Morreu("eu");
        }

          }
      }

      else {




        let meuAtaque = Math.round(this.myEnemy.ataque*0.4+this.myEnemy.inteligencia*0.2+this.myEnemyWeapon.ataque*0.4);
        this.myPlayer.vida -= meuAtaque;
        this.messages.push(`Ataque com hacks de ${this.myEnemy.nome} tira  ${meuAtaque} de vida`);

        if(this.myPlayer.vida<=0)
        {
          return this.Morreu("eu");
        } else {
          let meuAtaque = Math.round(this.myPlayer.ataque*100+this.myPlayer.inteligencia*100+this.myPlayerWeapon.ataque*100);
          this.myEnemy.vida -= meuAtaque;
          this.messages.push(`Ataque especial de ${this.myPlayer.nome} tira  ${meuAtaque} de vida`);

          if(this.myEnemy.vida<=0)
          {
            return this.Morreu("ele");
          }
        }

      }
    }






    else
    {
      this.messages.push(`Uma batalha intensa entre ${this.myPlayer.nome} e o noob do ${this.myEnemy.nome}`);
      this.Bencao();

      let whoAttacksFirst = Math.floor(Math.random() * 11);
      if(whoAttacksFirst<=6)
      {
        let meuAtaque = Math.round(this.myPlayer.ataque*0.3+this.myPlayer.inteligencia*0.6+this.myPlayerWeapon.ataque*0.1);
          this.myEnemy.vida -= meuAtaque;
          this.messages.push(`Incrivel ataque de ${this.myPlayer.nome} tira  ${meuAtaque} de vida`);

          if(this.myEnemy.vida<=0)
          {
            return this.Morreu("ele");
          } else {
            let meuAtaque = Math.round(this.myEnemy.ataque*0.1+this.myEnemy.inteligencia*0.2+this.myEnemyWeapon.ataque*0.7);
        this.myPlayer.vida -= meuAtaque;
        this.messages.push(`Ataque com hacks de ${this.myEnemy.nome} tira  ${meuAtaque} de vida`);

        if(this.myPlayer.vida<=0)
        {
          return this.Morreu("eu");
        }
          }
      }

      else {

        let meuAtaque = Math.round(this.myEnemy.ataque*0.1+this.myEnemy.inteligencia*0.2+this.myEnemyWeapon.ataque*0.7);
        this.myPlayer.vida -= meuAtaque;
        this.messages.push(`Ataque com hacks de ${this.myEnemy.nome} tira  ${meuAtaque} de vida`);

        if(this.myPlayer.vida<=0)
        {
          return this.Morreu("eu");
        }
        else
        {
          let meuAtaque = Math.round(this.myPlayer.ataque*0.3+this.myPlayer.inteligencia*0.6+this.myPlayerWeapon.ataque*0.1);
          this.myEnemy.vida -= meuAtaque;
          this.messages.push(`Incrivel ataque de ${this.myPlayer.nome} tira  ${meuAtaque} de vida`);
          if(this.myEnemy.vida<=0)
          {
            return this.Morreu("ele");
          }
        }

      }

    }


      return "continua";
  }

  Sum(a: number,b:number)
  {
    console.log(a);
    console.log(b);
    return a+b;
  }
  Bencao()
  {
    let qualBencao = Math.floor(Math.random() * 11);

    if(qualBencao<=3)
    {
        let newValor = Number(this.myPlayer.ataque) +30;
      this.myPlayer.AtualizarValor(newValor);
      this.messages.push(`${this.myPlayer.nome} recebe a benção da fogo +30Atk`);
    } else if(qualBencao<=6)
    {
      let newValor = Number(this.myPlayer.inteligencia) +20;
      this.myPlayer.AtualizarValor(undefined,newValor);
      this.messages.push(`${this.myPlayer.nome} recebe a benção da luz +20Int`);
    } else {
      let newValor = Number(this.myPlayer.vida) +23;
      this.myPlayer.AtualizarValor(undefined,undefined,newValor);
      this.messages.push(`${this.myPlayer.nome} recebe a benção da terra +23Vida`);
    }
  }

  Morreu(who)
  {
      if(who=="eu")
      {
        this.messages.push(`Infelizmente ${this.myPlayer.nome} não resistiu aos ferimentos `);
          this.messages.push(`Descansa em paz eterna lenda e digam não aos cheaters`);
          return "p-lose";
      }
      else if(who=="ele") {
        this.messages.push(`Infelizmente ${this.myEnemy.nome} não aguentou o poderoso ${this.myPlayer.nome} `);
        this.messages.push(`Celebremos a vitória facil de ${this.myPlayer.nome}`);
        return "p-win";
      }

  }

}
