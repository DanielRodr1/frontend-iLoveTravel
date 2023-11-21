import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { CreateTipComponent } from './create-tip/create-tip.component';
import { PlaceHomeComponent } from './place-home/place-home.component';
import {FormsModule} from "@angular/forms";
import {RouterLink, RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    CreateComponent,
    CreateTipComponent,
    PlaceHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterOutlet
  ]
})
export class PlacesModule { }
