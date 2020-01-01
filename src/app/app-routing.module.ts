import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from 'src/app/pages/login-page/login-page.component';
import {ApresentacaoPageComponent} from 'src/app/pages/apresentacao-page/apresentacao-page.component';

const routes: Routes = [
  {path:'inicio',component:ApresentacaoPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'*',redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
