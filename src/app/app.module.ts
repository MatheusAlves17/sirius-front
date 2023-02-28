import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './views/authentication/signin/signin.component';
import { TemplateComponent } from './views/authentication/template/template.component';
import { NavbarComponent } from './views/shared/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { ShoppingComponent } from './views/shopping/shopping.component';
import { ExchangeComponent } from './views/exchange/exchange.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    TemplateComponent,
    NavbarComponent,
    HomeComponent,
    ProductDetailComponent,
    ShoppingComponent,
    ExchangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
