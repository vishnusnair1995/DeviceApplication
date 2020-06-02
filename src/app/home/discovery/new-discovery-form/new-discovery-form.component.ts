import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-new-discovery-form',
  templateUrl: './new-discovery-form.component.html',
  styleUrls: ['./new-discovery-form.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class NewDiscoveryFormComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

   registrationForm: FormGroup;

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      'generalForm': new FormGroup({
        'name': new FormControl(null, Validators.required),
        'deviceGroup': new FormControl(null),
        'fIp': new FormControl(null, Validators.required),
        'tIp': new FormControl(null, Validators.required),
        'retryCount': new FormControl(null, Validators.required),
        'timeOut': new FormControl(null, Validators.required),
        'conType': new FormControl(null, Validators.required),
      }),
      'snmp': new FormGroup({
        'version': new FormControl(null),
        'readString': new FormControl(null),
        'writeString': new FormControl(null)
      }),
      'credForm': new FormGroup({
        'restUserName': new FormControl(null),
        'restPassword': new FormControl(null),
        'netconfUserName': new FormControl(null),
        'netconfPassword': new FormControl(null),
      }),
      'schedule': new FormGroup({
        'runMode': new FormControl(null)
      })
    });

  }

}
