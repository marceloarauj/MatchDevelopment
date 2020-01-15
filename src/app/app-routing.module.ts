import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from 'src/app/pages/login-page/login-page.component';
import {PerfilPageComponent} from 'src/app/pages/perfil-page/perfil-page.component';
import {ApresentacaoPageComponent} from 'src/app/pages/apresentacao-page/apresentacao-page.component';
import {PerfilGuard} from '../app/guards/perfil.guard';

const routes: Routes = [
  {path:'inicio',component:ApresentacaoPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'perfil',component:PerfilPageComponent, canActivate:[PerfilGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
