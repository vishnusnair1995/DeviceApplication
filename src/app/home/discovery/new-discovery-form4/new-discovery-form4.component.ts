import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-discovery-form4',
  templateUrl: './new-discovery-form4.component.html',
  styleUrls: ['./new-discovery-form4.component.scss']
})
export class NewDiscoveryForm4Component implements OnInit {

  constructor() { }


  @Input() regForm: FormGroup;
  formSubmitted: boolean = false;

  ngOnInit() {
  }

  submit() {
    console.log('submitted');
    console.log(this.regForm.value);
    this.formSubmitted = true;

  }
  }