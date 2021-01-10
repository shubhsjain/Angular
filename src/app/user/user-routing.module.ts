import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
  path: 'user', children: [
    { path: 'login', component: LoginComponent },
{ path: 'List', component: ListComponent }
  ]
}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
