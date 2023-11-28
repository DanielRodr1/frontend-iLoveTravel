import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./public/sites/login/login.component";

const routes: Routes = [
  { path: '', loadChildren: () => import('./public/sites/sites.module').then((m) => m.SitesModule)},
  { path: '', loadChildren: () => import('./intranet/intranet.module').then((m) => m.IntranetModule)},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
