import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {
  addUserForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.setFormValues();
  }
setFormValues()
{

  this.addUserForm = new FormGroup({
    userId: new FormControl(),
    password: new FormControl(),
    cpassword: new FormControl(),
  });
}
}
