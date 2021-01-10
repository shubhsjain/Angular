import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // { path: 'user', component: UsersComponent },
  //  { path: '**', component: PageNotFoundComponent },

  {
    path: 'admin', loadChildren:()=> import('./admin/admin.module').then(mod=>mod.AdminModule)
  },
  {
    path:'user' , loadChildren:()=> import('./user/user.module').then(mod=>mod.UserModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
