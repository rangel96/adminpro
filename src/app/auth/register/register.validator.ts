import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';

/*export const ValidarPassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get("password");
  const confirmarPassword = control.get("password2");

  return password.value === confirmarPassword.value
    ? null
    : { noSonIguales: true }
}*/

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
  /*static ValidarEmail(control: AbstractControl) {
    const email = control.value;
    console.log(email);
  }*/
}
