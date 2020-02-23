import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormControlName,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html'
})
export class ReactiveComponent {
  // Reactive Forms
  emailControl = new FormControl('default email');
  applicationGroup = new FormGroup({
    email: this.emailControl,
    username: new FormControl('admin0012', [Validators.required]),
    education: new FormGroup({
      highSchool: new FormControl('Le Hong Phong school for the gifted'),
      year: new FormControl(156)
    })
  });

  constructor() {
    window.reactiveForm = this.applicationGroup;
  }

  reactiveFormSubmitHandler() {
    console.log('Submitted value: ', this.applicationGroup.value);
  }
}
