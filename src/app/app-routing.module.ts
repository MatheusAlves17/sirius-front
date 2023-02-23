
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateComponent } from './views/authentication/template/template.component';
import { SigninComponent } from './views/authentication/signin/signin.component';


const routes: Routes = [
  { path: 'authentication', component: TemplateComponent, children: [
      { path: 'signin', component: SigninComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
