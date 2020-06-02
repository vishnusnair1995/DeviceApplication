import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscoveryComponent } from './discovery.component';
import { DiscoveryHomeComponent } from './discovery-home/discovery-home.component';
import { NewDiscoveryFormComponent } from './new-discovery-form/new-discovery-form.component';
import { DiscoveryReportComponent } from './discovery-report/discovery-report.component';

const routes: Routes = [{ path: 'discovery-home', component: DiscoveryHomeComponent },
{ path: '',redirectTo: 'discovery-home',pathMatch: 'full'},
{ path: 'discovery-report', component: DiscoveryReportComponent},
{ path: 'discovery-form', component: NewDiscoveryFormComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscoveryRoutingModule { }
