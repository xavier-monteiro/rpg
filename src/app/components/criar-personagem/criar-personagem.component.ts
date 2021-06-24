import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcessoBDService } from 'src/app/services/acesso-bd.service';

@Component({
  selector: 'app-criar-personagem',
  templateUrl: './criar-personagem.component.html',
  styleUrls: ['./criar-personagem.component.css']
})
export class CriarPersonagemComponent implements OnInit {

  constructor(private acessoService : AcessoBDService, private router : Router) { }

  ngOnInit(): void {
    if(!this.acessoService.userThatLogged)
    {
      console.log("go home");
      this.router.navigate(['/login']);
    }
  }

  nome : string ="";
  ataque : number =0;
  inteligencia : number =0;
  vida : number=0;

  resultado : any;

  criarPersonagem()
  {
    console.log(`Nome: ${this.nome} \nAtaque: ${this.ataque} \nInteligencia: ${this.inteligencia}\nVida: ${this.vida}`);
    console.log(`Username: ${this.acessoService.userThatLogged.nome} \nPassword: ${this.acessoService.userThatLogged.pass}`);

    this.acessoService.createPersonagem(this.nome,this.ataque,this.inteligencia,this.vida,this.acessoService.userThatLogged.nome,this.acessoService.userThatLogged.pass).subscribe(data => {this.resultado=data;console.log(this.resultado); this.router.navigate(['/home']);});


  }
}
