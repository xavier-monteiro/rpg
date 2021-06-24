import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilizador } from 'src/app/classes/utilizador';
import { AcessoBDService } from 'src/app/services/acesso-bd.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private acessoService: AcessoBDService,private router : Router) { }

  ngOnInit(): void {
  }

  myUtilizador : Utilizador;

  name : string = "";
  pass : string = "";

  resultado : any ;

  login()
  {
    console.log(`Name: ${this.name} \nPass: ${this.pass}`);
    this.acessoService.LogIn(this.name,this.pass).subscribe(data => {this.resultado=data;console.log(this.resultado); this.myUtilizador = new Utilizador(this.name,this.pass,this.resultado.data);this.acessoService.userThatLogged = this.myUtilizador;console.log(this.acessoService.userThatLogged);this.goHome();});

  }

  goHome()
  {
    this.router.navigate(['/criarPersonagem']);
  }
}
