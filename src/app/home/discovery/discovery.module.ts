import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DiscoveryRoutingModule } from './discovery-routing.module';
import { DiscoveryComponent } from './discovery.component';
import { DiscoveryHomeComponent } from './discovery-home/discovery-home.component';
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
import { DiscoveryReportComponent } from './discovery-report/discovery-report.component';
import { NewDiscoveryFormComponent } from './new-discovery-form/new-discovery-form.component';
import {MatStepperModule} from '@angular/material/stepper';
import { NewDiscoveryForm1Component } from './new-discovery-form1/new-discovery-form1.component';
import { NewDiscoveryForm2Component } from './new-discovery-form2/new-discovery-form2.component';
import { NewDiscoveryForm3Component } from './new-discovery-form3/new-discovery-form3.component';
import { NewDiscoveryForm4Component } from './new-discovery-form4/new-discovery-form4.component';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [DiscoveryComponent, DiscoveryHomeComponent, DiscoveryReportComponent, NewDiscoveryFormComponent, NewDiscoveryForm1Component, NewDiscoveryForm2Component, NewDiscoveryForm3Component, NewDiscoveryForm4Component],
  imports: [
    CommonModule,
    DiscoveryRoutingModule,
    RouterModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatRadioModule
  ]
})
export class DiscoveryModule { }
