import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class MyValidation {

// Validar que los password sean iguales
  static ValidarPassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmarPassword = control.get('password2');

    return password.value === confirmarPassword.value
      ? null
      : { noSonIguales: true };
  }

  // Validar que exista el email - Queda pendiente
  /*static ValidarEmail: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const email = control.get('email');
    let getEmail;

    return email.value === getEmail.value
      ? null
      : { noSonIguales: true };
  }*/

}
