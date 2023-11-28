import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SitesRoutingModule} from "./sites-routing.module";
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [


    HomeComponent,
          RegisterComponent
  ],
  imports: [
    CommonModule,
    SitesRoutingModule,
  ]
})
export class SitesModule { }
