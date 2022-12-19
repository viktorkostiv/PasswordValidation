import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  password = '';
  validationLevel = 0;

  onUpdatePassword(event: Event) {
    this.password = (<HTMLInputElement>event.target).value;
  }

  PasswordValidation() {
    if (this.password === '') {
      return this.validationLevel = 0;
    }
    if (this.password.length < 8) {
      return this.validationLevel = 1;
    }
    if (
      this.password.match(/[a-zA-Z]+/g) &&
      this.password.match(/[0-9]/g) &&
      this.password.match(/[^ \w]/g)
    ) {
      return (this.validationLevel = 4);
    }
    if (
      (this.password.match(/[a-zA-Z]+/g) && this.password.match(/[0-9]/g)) ||
      (this.password.match(/[0-9]/g) && this.password.match(/[^ \w]/g)) ||
      (this.password.match(/[a-zA-Z]+/g) && this.password.match(/[^ \w]/g))
    ) {
      return (this.validationLevel = 3);
    }
    if (
      this.password.match(/[a-zA-Z]+/g) ||
      this.password.match(/[0-9]/g) ||
      this.password.match(/[^ \w]/g)
    ) {
      return (this.validationLevel = 2);
    }
  }
}
