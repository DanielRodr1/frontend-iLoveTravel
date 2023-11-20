import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PerfilComponent} from "./perfil/perfil.component";
import {IntranetComponent} from "./intranet.component";
import {PersonasComponent} from "./personas/personas.component";

const routes: Routes = [
  { path:'', component: IntranetComponent, children: [
      { path:'perfil', component: PerfilComponent },
      { path: 'personas', component: PersonasComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
