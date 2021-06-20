import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcessoBDService } from 'src/app/services/acesso-bd.service';

@Component({
  selector: 'app-criar-arma',
  templateUrl: './criar-arma.component.html',
  styleUrls: ['./criar-arma.component.css']
})
export class CriarArmaComponent implements OnInit {

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
  durabilidade : number =0;
  tipo : string ="";
  vida : number=0;

  resultado : any ;

  criarArma()
  {
    console.log("criar");
    this.acessoService.createArma(this.nome,this.ataque,this.durabilidade,this.tipo,this.vida,this.acessoService.userThatLogged.nome,this.acessoService.userThatLogged.pass,this.acessoService.userCharacter.id_personagem).subscribe(data => {this.resultado=data;console.log(this.resultado);});
  }
}
