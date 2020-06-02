import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
// import { TimeZoneService } from '../service/timezone.service'
import { Moment } from 'moment';
import moment from 'moment-timezone';

@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.scss']
})
export class ModifyUserComponent implements OnInit {

  modifyUserForm: FormGroup;
  public tzNames: string[];
  public selectedTz: string;
  availableRoles: any[];
  currentRoles: any[];
  constructor() {

    this.tzNames = moment.tz.names();
  }

  ngOnInit(): void {
    this.availableRoles = ['ROLE_USER','ROLE_CLOUD_CONNECTOR','ROLE_ADMIN']
    this.currentRoles =[];
    this.setFormValues();
  }
setFormValues()
{

  this.modifyUserForm = new FormGroup({
    fullName: new FormControl(),
    email: new FormControl(),
    wPhone: new FormControl(),
    timeZone: new FormControl(),
    availableRole: new FormControl(),
    CurrentRole: new FormControl(),

  });
}
addRoles()
{
  var indexArray = [];

console.log(this.modifyUserForm.value.availableRole);
for(var i =0 ;i<this.modifyUserForm.value.availableRole.length;i++)
{
indexArray.push(this.availableRoles.indexOf(this.modifyUserForm.value.availableRole[i]));
this.currentRoles.push(this.modifyUserForm.value.availableRole[i])
}
console.log(indexArray);
for(var j=0;j<indexArray.length;j++)
{
  // this.availableRoles.splice(indexArray[j],1);
  this.availableRoles[indexArray[j]] = null;
}
console.log(this.availableRoles)
}

removeRoles()
{
  var indexArray2 = [];
 this
console.log(this.modifyUserForm.value.availableRole);
for(var i =0 ;i<this.modifyUserForm.value.CurrentRole.length;i++)
{
indexArray2.push(this.currentRoles.indexOf(this.modifyUserForm.value.CurrentRole[i]));
this.availableRoles.push(this.modifyUserForm.value.CurrentRole[i]);
}
console.log(indexArray2);
for(var j=0;j<indexArray2.length;j++)
{
  // this.currentRoles.splice(indexArray2[j],1);
  this.currentRoles[indexArray2[j]] = null
}
console.log(this.currentRoles)
}
}