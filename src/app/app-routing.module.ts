
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateComponent } from './views/authentication/template/template.component';
import { SigninComponent } from './views/authentication/signin/signin.component';
import { NavbarComponent } from './views/shared/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { ShoppingComponent } from './views/shopping/shopping.component';
import { ExchangeComponent } from './views/exchange/exchange.component';


const routes: Routes = [
  // { path: 'authentication', component: TemplateComponent, children: [
  // ]},
  // { path: 'signin', component: SigninComponent },
  {path: '', component: NavbarComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'detalhes-produto', component: ProductDetailComponent},
    {path: 'compra', component: ShoppingComponent},
    {path: 'troca', component: ExchangeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
