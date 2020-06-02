import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-discovery-form3',
  templateUrl: './new-discovery-form3.component.html',
  styleUrls: ['./new-discovery-form3.component.scss']
})
export class NewDiscoveryForm3Component implements OnInit {

  constructor() { }

  @Input() regForm: FormGroup;
  formSubmitted: boolean = false;

  ngOnInit() {
  }

  step3Submitted() {
    console.log(this.regForm.value);
    // this.regForm.get('contactDetails').get('email').markAsTouched();
    // this.regForm.get('contactDetails').get('email').updateValueAndValidity();
  }
  }