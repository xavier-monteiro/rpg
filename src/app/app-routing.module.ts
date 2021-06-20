import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatalharComponent } from './components/batalhar/batalhar.component';
import { CriarArmaComponent } from './components/criar-arma/criar-arma.component';
import { CriarPersonagemComponent } from './components/criar-personagem/criar-personagem.component';
import { CriarUserComponent } from './components/criar-user/criar-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: "criarUser", component: CriarUserComponent },
  {path: "login", component: LoginComponent },
  {path: "criarPersonagem", component: CriarPersonagemComponent},
  {path: "criarArma", component: CriarArmaComponent},
  {path: "home", component: HomeComponent},
  {path: "batalhar", component: BatalharComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
