import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', []),
      password: new FormControl('', [])
    });
  }
  onSubmit() {
    if(this.loginForm.valid) {
      this.router.navigateByUrl('/home');
    }
  }
}
