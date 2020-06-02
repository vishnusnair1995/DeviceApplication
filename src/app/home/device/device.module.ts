import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { DeviceComponent } from './device.component';
import { DeviceGroupComponent } from './device-group/device-group.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AddDeviceComponent } from './add-device/add-device.component';

@NgModule({
  declarations: [DeviceComponent, DeviceGroupComponent, AddDeviceComponent],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    RouterModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class DeviceModule { }
