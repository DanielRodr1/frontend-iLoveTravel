import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntranetComponent } from './intranet.component';
import {LayoutModule} from "../layout/layout.module";
import {RouterOutlet} from "@angular/router";
import {IntranetRoutingModule} from "./intranet-routing.module";
import {FormsModule} from "@angular/forms";
import {CreateComponent} from "./create/create.component";
import {CreateTipComponent} from "./create-tip/create-tip.component";
import {PlaceHomeComponent} from "./place-home/place-home.component";
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  declarations: [
    IntranetComponent,
    CreateComponent,
    CreateTipComponent,
    PlaceHomeComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterOutlet,
    IntranetRoutingModule,
    FormsModule,
    MatTabsModule
  ]
})
export class IntranetModule { }
