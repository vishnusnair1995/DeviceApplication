import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule } from '@angular/router';
import { AddUsersComponent } from './add-users/add-users.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { EditdialogComponent } from './editdialog/editdialog.component';
import { UserService } from 'src/app/@core/mock/users.service';
import { DataService } from './data.service';
import { ModifyUserComponent } from './modify-user/modify-user.component';
import {MatSelectModule} from '@angular/material/select';
// import { TimeZoneService } from './service/timezone.service';
@NgModule({
  declarations: [UsersComponent, UserDetailsComponent, AddUsersComponent,EditdialogComponent, ModifyUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    RouterModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatSelectModule

  ],

  providers: [

    DataService
  ]

})
export class UsersModule { }
