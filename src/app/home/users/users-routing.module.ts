import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { ModifyUserComponent } from './modify-user/modify-user.component';

const routes: Routes = [{ path: 'user-details', component: UserDetailsComponent },
{ path: '',redirectTo: 'user-details',pathMatch: 'full'},
{ path: 'add-users', component: AddUsersComponent },
{ path: 'modify-user', component: ModifyUserComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
