import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-discovery-form1',
  templateUrl: './new-discovery-form1.component.html',
  styleUrls: ['./new-discovery-form1.component.scss']
})
export class NewDiscoveryForm1Component implements OnInit {

  constructor() { }

  @Input() regForm: FormGroup;

  ngOnInit() {
  }

  step1Submitted() {
  console.log(this.regForm.value);
  }

}
