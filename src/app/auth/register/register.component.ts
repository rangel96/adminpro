import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UsuariosService } from '../../services/usuarios.service';
import { MyValidation } from './register.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['/src/assets/css/pages/login-register-lock.css']
  // styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // Propiedades para crear un nuevo usuario
  createFormGroup() {
    return new FormGroup(
      {
        nombre: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email], []),
        password: new FormControl('', Validators.required),
        password2: new FormControl('', Validators.required),
        terms: new FormControl(false, Validators.requiredTrue),
        imagen: new FormControl('https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png', Validators.required),
      },
      {
        validators: MyValidation.ValidarPassword,
        // asyncValidators: MyValidation.ValidarEmail
      }
    );
  }

  newUserForm: FormGroup;

  //  ---------- VALIDADORES ---------- //
  constructor(private usuariosSvc: UsuariosService, private router: Router) {
    this.newUserForm = this.createFormGroup();
  }

  onResetForm() {
    // Borrar el formulario
    this.newUserForm.reset();

    // Cambiar de pagina
    this.router.navigateByUrl('/');
  }

  //  ---------- VALIDADORES ---------- //
  validarPassword(): boolean {
    return this.newUserForm.hasError('noSonIguales') &&
      this.newUserForm.get('password').dirty &&
      this.newUserForm.get('password2').dirty;
  }

  validarEmail() {
    return this.newUserForm.hasError('emailExiste') &&
      this.newUserForm.get('email').dirty;
  }


  addUser() {
    let newUser = this.newUserForm.value;
    this.usuariosSvc.addUser(newUser).subscribe((usuarioAdded) => {
      if (usuarioAdded.status) {
        // Mensaje de loging exitoso
        Swal.fire({
          icon: 'success',
          title: usuarioAdded.msg,
          showConfirmButton: false,
          timer: 900
        });

        // Almacenar los datos del usuario para el cambio entre paginas
        this.usuariosSvc.usuario = usuarioAdded.data.usuario;

        // Limpiar formulario y cambiar de pagina
        this.onResetForm();
      } else {
        // Mensaje de registro fallido
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: usuarioAdded.msg,
          showConfirmButton: false,
          timer: 2000
        });
      }
    });

  }

}

