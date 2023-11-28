import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SitesRoutingModule} from "./sites-routing.module";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SitesRoutingModule,
  ]
})
export class SitesModule { }
