import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeaderComponent } from './library/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from "@angular/common/http";
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MenuComponent } from './library/menu/menu.component';
import { PerfilPageComponent } from './pages/perfil-page/perfil-page.component';
import { ApresentacaoPageComponent } from './pages/apresentacao-page/apresentacao-page.component';
import { PerfilGuard } from './guards/perfil.guard';
import { ExpBarComponent } from './pages/perfil-page/components/exp-bar/exp-bar.component';
import { MensagemPageComponent } from './pages/mensagem-page/mensagem-page.component';
import { CaixaMensagemComponent } from './pages/mensagem-page/caixa-mensagem/caixa-mensagem.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BarraLateralComponent } from './pages/home-page/components/barra-lateral/barra-lateral.component';
import { ChatGlobalComponent } from './pages/home-page/components/chat-global/chat-global.component';
import { MensagemUsuarioComponent } from './pages/home-page/components/mensagem-usuario/mensagem-usuario.component';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginPageComponent,
    MenuComponent,
    PerfilPageComponent,
    ApresentacaoPageComponent,
    ExpBarComponent,
    MensagemPageComponent,
    CaixaMensagemComponent,
    HomePageComponent,
    BarraLateralComponent,
    ChatGlobalComponent,
    MensagemUsuarioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PerfilGuard,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
