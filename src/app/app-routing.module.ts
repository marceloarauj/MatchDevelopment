import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from 'src/app/pages/login-page/login-page.component';

const routes: Routes = [
  {path:'login',component:LoginPageComponent},
  {path:'*',redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
