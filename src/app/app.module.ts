import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CriarUserComponent } from './components/criar-user/criar-user.component';
import { LoginComponent } from './components/login/login.component';
import { CriarPersonagemComponent } from './components/criar-personagem/criar-personagem.component';
import { HomeComponent } from './components/home/home.component';
import { CriarArmaComponent } from './components/criar-arma/criar-arma.component';
import { BatalharComponent } from './components/batalhar/batalhar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CriarUserComponent,
    LoginComponent,
    CriarPersonagemComponent,
    HomeComponent,
    CriarArmaComponent,
    BatalharComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
