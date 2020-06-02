import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AlarmComponent } from './alarm/alarm.component'
import {MatCardModule} from '@angular/material/card';
import { LocationComponent } from './location/location.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { DevicesComponent } from './devices/devices.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CloudConnectorComponent } from './cloud-connector/cloud-connector.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorIntlCro } from './device-list/mat-paginator-intl-cro';
import {MatSortModule} from '@angular/material/sort';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [DashboardComponent, AlarmComponent, LocationComponent,
    DeviceListComponent, DevicesComponent, ScheduleComponent, CloudConnectorComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    RouterModule

  ],
  providers: [
    {
      provide: MatPaginatorIntl,

      useClass: MatPaginatorIntlCro
    }
  ]

})
export class DashboardModule { }
