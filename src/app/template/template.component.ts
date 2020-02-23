import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html'
})
export class TemplateComponent {
  // Template driven Forms
  application = {
    email: 'admin@gmail.com',
    username: 'admin',
    education: {
      highSchool: 'Le Hong Phong school for the gifted',
      year: 2005
    }
  };

  constructor() {
    window.templateForm = this.application;
  }

  submitHandler() {
    console.log('Submitted value: ', this.application);
  }
}
