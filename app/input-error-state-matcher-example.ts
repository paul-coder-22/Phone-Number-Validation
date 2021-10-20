import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** @title Input with a custom ErrorStateMatcher */
@Component({
  selector: 'input-error-state-matcher-example',
  templateUrl: './input-error-state-matcher-example.html',
  styleUrls: ['./input-error-state-matcher-example.css'],
})
export class InputErrorStateMatcherExample {
  userAddressValidations: FormGroup;
  userAddressPincodeValidations: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.userAddressValidations = this.formBuilder.group({
      mobileNumber: [
        '',
        [Validators.required, Validators.pattern('[6-9]\\d{9}')],
      ],
    });
    this.userAddressPincodeValidations = this.formBuilder.group({
      pincode: ['', [Validators.required, Validators.pattern('[1-9]\\d{5}')]], //number required to check
    });
  }
  _keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
