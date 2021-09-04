import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('',[  //sync validators in single array
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpaces
    ],[
      UsernameValidators.shouldBeUnique //async validators in seperate array
    ]
    ),
    password: new FormControl('', Validators.required)
  });

  get user() {
    return this.form.get('username');
  }

  login() {
    this.form.setErrors({
      invalidLogin: true
    })
  }
}