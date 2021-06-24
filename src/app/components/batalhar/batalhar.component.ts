import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Arma } from 'src/app/classes/arma';
import { Batalha } from 'src/app/classes/batalha';
import { Personagem } from 'src/app/classes/personagem';
import { AcessoBDService } from 'src/app/services/acesso-bd.service';

@Component({
  selector: 'app-batalhar',
  templateUrl: './batalhar.component.html',
  styleUrls: ['./batalhar.component.css']
})
export class BatalharComponent implements OnInit {

  constructor(private acessoBD : AcessoBDService, private router: Router) { }

  ngOnInit(): void {
    if(!this.acessoBD.userThatLogged)
    {
      this.router.navigate(['/login']);
    } else if(!this.acessoBD.userCharacter)
    {
      this.router.navigate(['/criarPersonagem']);
    }else
    {
      this.myPlayer = this.acessoBD.userCharacter;
       document.body.classList.add('bg-arena');
    this.getEnemy();
    this.getWeapon("me");
    this.getWeapon("him");

    }



  }


 /* teste = ["Miguel ataca primeiro e dá 10 de dano","Ricardo fica com 5 de vida","Ricardo conjura o seu poder e da 15 de dano"]


 teste2()
 {
  setTimeout(()=>{
    this.teste.push("Miguel não aguentou e morreu");
    setTimeout(()=>{
      this.teste.push("Ricardo recupera vida enquanto celebra a vitória");
    },2000);
  },2000);
 }*/

 myPlayer : Personagem;
 myWeapon : Arma;

 myEnemy : Personagem;
 hisWeapon : Arma;

 BattleArena : Batalha;

 getEnemy()
 {
   let result;
    this.acessoBD.getInimigo().subscribe(data =>{result = data;console.log(data);this.myEnemy = new Personagem(result.data.Nome,result.data.Atk,result.data.Int,result.data.Vida);console.log(this.myEnemy)});
 }

getWeapon(who?)
{
  let result;
  let result2;

  if(who == "me")
  {
      this.acessoBD.getWeapon().subscribe(data=>{result = data;console.log(data);this.myWeapon = new Arma(result.data.nome,result.data.Atk,result.data.Durabilidade,result.data.TipoDeArma);console.log(this.myWeapon)});
  }

  if(who=="him")
  {
    this.acessoBD.getWeapon().subscribe(data=>{result2 = data;console.log(data);this.hisWeapon= new Arma(result2.data.nome,result2.data.Atk,result2.data.Durabilidade,result2.data.TipoDeArma);console.log(this.hisWeapon);this.BattleArena = new Batalha(this.myPlayer,this.myEnemy,this.myWeapon,this.hisWeapon);});
  }

}


BattleStarts()
{

  let resposta = this.BattleArena.Attack();

  if(resposta=="continua")
  {
     let rep= this.BattleArena.Attack("again");
     if(rep=="p-win")
     {
        alert(`O nosso querido ${this.myPlayer.nome} ganhou`);
     } else {
      alert(`Olha os cheats ${this.myEnemy.nome}`);
     }
  }
  else if(resposta=="p-win")
  {
    alert(`O nosso querido ${this.myPlayer.nome} ganhou`);
  }else {
    alert(`Olha os cheats ${this.myEnemy.nome}`);
   }


   setTimeout(()=>{
    this.router.navigate(['/home']);
   },7000);

}


}
