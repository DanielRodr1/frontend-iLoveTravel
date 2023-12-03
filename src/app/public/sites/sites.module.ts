import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SitesRoutingModule} from "./sites-routing.module";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {UserService} from "../../services/user.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [UserService],
  imports: [
    CommonModule,
    SitesRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class SitesModule { }
