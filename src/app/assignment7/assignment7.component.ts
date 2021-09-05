import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from './password.validators';

@Component({
  selector: 'assignment7',
  templateUrl: './assignment7.component.html',
  styleUrls: ['./assignment7.component.css']
})
export class Assignment7Component implements OnInit {
  resetForm !: FormGroup

  constructor(fb: FormBuilder) {
    this.resetForm = fb.group({
      oldPassword: ['',
        Validators.required, 
        PasswordValidator.validateOldPassword
      ],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    },{
      validator: PasswordValidator.passwordShouldMatch
    })
   }

  ngOnInit(): void {
  }

  get OldPassword() {
    return this.resetForm.get('oldPassword');
  }

  get NewPassword() {
    return this.resetForm.get('newPassword');
  }

  get ConfirmPassword() {
    return this.resetForm.get('confirmPassword');
  }

}
