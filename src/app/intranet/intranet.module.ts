import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PerfilComponent} from "./perfil/perfil.component";
import { IntranetComponent } from './intranet.component';
import {LayoutModule} from "../layout/layout.module";
import {RouterOutlet} from "@angular/router";
import {IntranetRoutingModule} from "./intranet-routing.module";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import { PersonasComponent } from './personas/personas.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    PerfilComponent,
    IntranetComponent,
    PersonasComponent,
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
