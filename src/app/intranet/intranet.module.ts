import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PerfilComponent} from "./perfil/perfil.component";
import {IntranetComponent} from './intranet.component';
import {RouterOutlet} from "@angular/router";
import {IntranetRoutingModule} from "./intranet-routing.module";
import {LayoutModule} from "../layout/layout.module";
import {CreateComponent} from "./create/create.component";
import {CreateTipComponent} from "./create-tip/create-tip.component";
import {PlaceHomeComponent} from "./place-home/place-home.component";
import {PersonasComponent} from "./personas/personas.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import { LugaresComponent } from './lugares/lugares.component';
import { HomelogueadoComponent } from './homelogueado/homelogueado.component';

@NgModule({
  declarations: [
    CreateComponent,
    CreateTipComponent,
    PlaceHomeComponent,
    PerfilComponent,
    IntranetComponent,
    PersonasComponent,
    LugaresComponent,
    HomelogueadoComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterOutlet,
    IntranetRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class IntranetModule { }
