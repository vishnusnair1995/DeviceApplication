import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-discovery-form2',
  templateUrl: './new-discovery-form2.component.html',
  styleUrls: ['./new-discovery-form2.component.scss']
})
export class NewDiscoveryForm2Component implements OnInit {

  constructor() { }

  @Input() regForm: FormGroup;

  ngOnInit() {
  }

  step2Submitted() {
    console.log(this.regForm.value);
    // this.regForm.get('contactDetails').get('email').markAsTouched();
    // this.regForm.get('contactDetails').get('email').updateValueAndValidity();
  }

}
