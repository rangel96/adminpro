import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioI } from '../../interfaces/usuarios';
import Swal from 'sweetalert2';

@Component({
  selector: 'userForm',
  // selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['/src/assets/css/pages/login-register-lock.css']
  // styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Captutar los campos del formulario
  createFormGroupo() {
    return new FormGroup({
      email: new FormControl(['usuario@example.com'], [Validators.required, Validators.email]),
      password: new FormControl([''], [Validators.required]),
    });
  }

  userForm: FormGroup;

  constructor(private usuariosSvc: UsuariosService, private router: Router) {
    this.userForm = this.createFormGroupo();
  }

  onResetForm() {
    // Limpiar el formulario
    this.userForm.reset();

    // Cambiamos de pagina
    this.router.navigateByUrl('/');
  }

  // tslint:disable-next-line:typedef
  login() {// inicio metodo login

    // Capturamos el formulario y lo mandamos al metodo login del usuario service
    this.usuariosSvc.login(this.userForm.value).subscribe((authResponse) => { // inicio usuarioSvc
      // Si el status es true
      if (authResponse.status) { // inicio del condiconal para authResponse
        const usuario: UsuarioI = authResponse.data.usuario;
        const token: string = authResponse.data.token;

        // console.log('AuthResponse: ' + authResponse);
        console.log('Token: ' + token);
        console.log('Nombre de usuario: ' + usuario.nombre);

        // Mensaje de loging exitoso
        Swal.fire({
          icon: 'success',
          title: authResponse.msg,
          showConfirmButton: false,
          timer: 1500
        });

        //Regresamos el Body completo
        // return authResponse;

        // Limpiar formulario y cambiar de pagina
        this.onResetForm();

      }
      // Si el status es false
      else {
        // Mensaje de login fallido
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: authResponse.msg,
          showCancelButton: true,
          confirmButtonText: 'Forgot pwd?',
          cancelButtonText: 'Try again',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            this.forgotPassword();
          }
        });

      } // fin del condiconal para authResponse
    }); // fin usuarioSvc
  } // fin metodo login

  // Login with GOOGLE
  onSignInGoogle() {
    Swal.fire({
      icon: 'info',
      title: 'Oops...',
      text: ' Botón desabilitado por el momento. Gracias por intentarlo ! cx ',
    });
  }

  // Login with FaceBook
  onSignInFaceBook() {
    Swal.fire({
      icon: 'info',
      title: ' Oops... ',
      text: ' Botón desabilitado por el momento. Gracias por intentarlo ! cx ',
    });
  }

  forgotPassword() {
    // Cambiamos de pagina
    // this.router.navigateByUrl('/forgotpassword');
    Swal.fire({ // inicio swal.fire
      title: 'Forgot password?',
      text: ' Ingresa el email... ',
      input: 'text', // Cambiar a email
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Email invalid: ${error}`
            );
          });
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        });
      }

    });// fin swal.fire

  }

}
