import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '../services/translate.service';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  login: boolean;

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.login = true;
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      verifyPassword: ['', Validators.compose([Validators.required])]
    }, {
      validator: ValidationService.matchFields('password', 'verifyPassword')
    });
  }

  registerPortfolio() {
    this.loginForm.reset();
    this.login = false;
  }

  loginPortfolio() {
    this.loginForm.reset();
    this.login = true;
  }
}
