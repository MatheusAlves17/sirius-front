
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateComponent } from './views/authentication/template/template.component';
import { SigninComponent } from './views/authentication/signin/signin.component';
import { NavbarComponent } from './views/shared/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';


const routes: Routes = [
  { path: 'authentication', component: TemplateComponent, children: [
  ]},
  // { path: 'signin', component: SigninComponent },
  {path: '', component: NavbarComponent, children: [
    {path: '', component: HomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
