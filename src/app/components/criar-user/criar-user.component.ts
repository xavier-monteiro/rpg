import { Component, OnInit } from '@angular/core';
import { AcessoBDService } from 'src/app/services/acesso-bd.service';

@Component({
  selector: 'app-criar-user',
  templateUrl: './criar-user.component.html',
  styleUrls: ['./criar-user.component.css']
})
export class CriarUserComponent implements OnInit {

  constructor(private acessoService: AcessoBDService) { }

  ngOnInit(): void {

  }

  name : string = "";
  pass : string = "";

  resultado : any ;

  criarUser()
  {
    console.log(`Name: ${this.name} \nPass: ${this.pass}`);
    this.acessoService.Signup(this.name,this.pass).subscribe(data => {this.resultado=data;console.log(this.resultado);});

  }

}
