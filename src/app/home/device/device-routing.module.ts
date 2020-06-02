import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceComponent } from './device.component';
import { DeviceGroupComponent } from './device-group/device-group.component';
import { AddDeviceComponent } from './add-device/add-device.component';



const routes: Routes = [{
  path: '',
  component: DeviceComponent,
  children: [
    {
      path: 'device-group',
      component: DeviceGroupComponent,
    },
    {
      path: 'addDevice',
      component: AddDeviceComponent
    },

    // {
    //   path: 'accordion',
    //   component: AccordionComponent,
    // },


  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule { }
