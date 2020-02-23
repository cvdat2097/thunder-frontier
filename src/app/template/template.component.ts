import { Component } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html'
})
export class TemplateComponent {
  // Reactive Forms
  emailControl = new FormControl('default email');
  applicationGroup = new FormGroup({
    email: this.emailControl,
    username: new FormControl('admin0012'),
    education: new FormGroup({
      highSchool: new FormControl('Le Hong Phong school for the gifted'),
      year: new FormControl(156)
    })
  });

  reactiveFormSubmitHandler() {
    console.log('Submitted value: ', this.applicationGroup.value);
  }
}
