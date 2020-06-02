import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../@theme/theme.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NbMenuModule} from '@nebular/theme';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbMenuModule,
    ThemeModule,
    DashboardModule




  ]
})
export class HomeModule { }
