import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPersonagemComponent } from './components/criar-personagem/criar-personagem.component';
import { CriarUserComponent } from './components/criar-user/criar-user.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: "criarUser", component: CriarUserComponent },
  {path: "login", component: LoginComponent },
  {path: "criarPersonagem", component: CriarPersonagemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
