import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // group routing
  // {
  //   path: 'admin', children: [
  //     { path: 'login', component: LoginComponent },
  // { path: 'List', component: ListComponent }
  //   ]
  // }

  { path: 'list', component: ListComponent },
  { path: 'login', component: LoginComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
