import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CriarUserComponent } from './components/criar-user/criar-user.component';
import { LoginComponent } from './components/login/login.component';
import { CriarPersonagemComponent } from './components/criar-personagem/criar-personagem.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CriarUserComponent,
    LoginComponent,
    CriarPersonagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
