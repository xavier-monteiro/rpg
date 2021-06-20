import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personagem } from 'src/app/classes/personagem';
import { AcessoBDService } from 'src/app/services/acesso-bd.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private acessoService: AcessoBDService,private router : Router) { }

  ngOnInit(): void {
    document.body.classList.add('bg-img');

    if(!this.acessoService.userThatLogged)
    {
      this.router.navigate(['/login']);
    } else
    {
        this.getPersonagem();
    }
  }
  nome : string = "";
  ataque : number = 0;
  inteligencia : number = 0;
  vida : number = 0;
  resultado : any;

  getPersonagem()
  {
    this.acessoService.getPersonagem(this.acessoService.userThatLogged.id_user).subscribe(data => {this.resultado=data;console.log(this.resultado);this.acessoService.userCharacter = new Personagem(this.resultado.data.Personagens[0].Nome,this.resultado.data.Personagens[0].Atk,this.resultado.data.Personagens[0].Int,this.resultado.data.Personagens[0].Vida,this.acessoService.userThatLogged,this.resultado.data.Personagens[0].ID);this.changeVars();});

  }

  changeVars()
  {
    this.nome = this.acessoService.userCharacter.nome;
    this.ataque = this.acessoService.userCharacter.ataque;
    this.inteligencia = this.acessoService.userCharacter.inteligencia;
    this.vida = this.acessoService.userCharacter.vida ;
  }


}
