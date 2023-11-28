import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IntranetComponent} from "./intranet.component";
import {CreateComponent} from "./create/create.component";
import {CreateTipComponent} from "./create-tip/create-tip.component";
import {PlaceHomeComponent} from "./place-home/place-home.component";
import {PerfilComponent} from "./perfil/perfil.component";
import {PersonasComponent} from "./personas/personas.component";


const routes: Routes = [
  { path:'', component: IntranetComponent, children: [
      { path:'perfil', component: PerfilComponent },
      { path: 'personas', component: PersonasComponent },
      { path: 'create', component: CreateComponent},
      { path: 'createTip', component: CreateTipComponent },
      { path: 'placeHome', component: PlaceHomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
