import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuariosService } from '../../services/usuarios.service';
import { UsuarioI, UsuarioTokenI } from '../../interfaces/usuarios';
import { environment } from '../../../environments/environment';

declare const gapi: any;

@Component({
  selector: 'userForm',
  // selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['/src/assets/css/pages/login-register-lock.css']
  // styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  //  ---------- PROPIEDADES EL FORMS ---------- //
  createFormGroupo() {
    return new FormGroup({
      email: new FormControl(localStorage.getItem('email') || 'admin@lol.com', [Validators.required, Validators.email]),
      password: new FormControl('admin', [Validators.required]),
      rememberMe: new FormControl(false),
    });
  }

  //  ---------- VARIABLES ---------- //
  userForm: FormGroup;
  auth2;


  ///  ---------- CONSTRUCTOR ---------- //
  constructor(
    private usuariosSvc: UsuariosService, private router: Router) {
    this.userForm = this.createFormGroupo();
  }

  ngOnInit(): void {
    this.renderButton();
  }

//  ---------- MÉTODOS ---------- //
  onResetForm() {
    // Limpiar el formulario
    this.userForm.reset();

    // Cambiamos de pagina
    this.router.navigateByUrl('/dashboard');
  }


  //  ---------- VALIDADORES ---------- //
  validarEmail(email) {
    this.usuariosSvc.getUserEmail(email).subscribe((value: any) => {
      if (value.status) {
        this.usuariosSvc.usuario = value.data.usuario;
        this.router.navigateByUrl('/reset');
      } else {
        // Mensaje de error, preguntar si quiere intentarlo de nuevo
        Swal.fire({
          title: value.msg,
          text: 'Try again?',
          icon: 'error',
          showCancelButton: true,
          cancelButtonText: 'No, thanks!',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, please!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.forgotPassword();
          }
        });

      }
    });
  }


  //  ---------- MÉTODOS SERVICE ---------- //
  // tslint:disable-next-line:typedef
  login() {// inicio metodo login

    // Capturamos el formulario y lo mandamos al metodo login del usuario service
    this.usuariosSvc.login(this.userForm.value).subscribe((authResponse) => { // inicio usuarioSvc

      if (authResponse.status) { // inicio del condiconal para authResponse, Si el status es true
        const usuario: UsuarioI = authResponse.data.usuario;

        if (this.userForm.value.rememberMe) {
          // Almacenar los datos del usuario en cache para el cambio entre paginas
          localStorage.setItem('usuario', JSON.stringify(authResponse.data.usuario));
        } else {
          // Almacenar los datos del usuario para el cambio entre paginas
          this.usuariosSvc.usuario = usuario;
        }

        // ALmacenar el token en cache
        localStorage.setItem('token', authResponse.data.token);

        // Mensaje de loging exitoso
        Swal.fire({
          icon: 'success',
          title: authResponse.msg,
          showConfirmButton: false,
          timer: 700
        });

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
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTddyFAW-XHS45vsHFtsw47IgQutIgPHcWxTQ&usqp=CAU',
      imageAlt: 'Custom image',
      title: 'Oops...',
      text: ' Botón desabilitado por el momento. Gracias por intentarlo ! cx ',
    });
  }


  // Login with FaceBook
  onSignInFaceBook() {
    Swal.fire({
      imageUrl: 'https://st2.depositphotos.com/1144386/7770/v/600/depositphotos_77705004-stock-illustration-original-square-with-round-corners.jpg',
      imageAlt: 'Custom image',
      title: ' Oops... ',
      text: ' Botón desabilitado por el momento. Gracias por intentarlo ! cx ',
    });
  }


  // Recuperar password
  forgotPassword() {
    // Cambiamos de pagina
    // this.router.navigateByUrl('/forgotpassword');
    Swal.fire({ // inicio swal.fire
      title: 'Forgot password?',
      text: ' Ingresa el email... ',
      input: 'email', // Cambiar a email
      inputPlaceholder: 'Enter your email address',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      showLoaderOnConfirm: true,
      preConfirm: (email) => {
        this.validarEmail(email);
      }
    });// fin swal.fire

  }


  // Validar el token de GOOGLE
  attachSignin(element) {
    this.auth2.attachClickHandler(element, {}, (googleUser) => {
      const id_token = googleUser.getAuthResponse().id_token;
      console.log(id_token);
      const email = googleUser.getBasicProfile().du;
      this.usuariosSvc.googleLogin(id_token).subscribe((usutoken: any) => {
        if (usutoken.status) {
          localStorage.setItem('email', email);
          Swal.fire({
            title: 'Exito!',
            text: usutoken.message,
            icon: 'success',
            confirmButtonText: 'Ok',
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigateByUrl('/');
            }
          });
        } else {
          Swal.fire({
            title: 'Error!',
            text: usutoken.message,
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        }
      });


    }, (error) => {
      alert(JSON.stringify(error, undefined, 2));
    });
  }


  // La neta no me acuerdo
  startApp() {
    gapi.load('auth2', () => {
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      this.auth2 = gapi.auth2.init({
        client_id: environment.GOOGLE_CLIENT_ID,
        cookiepolicy: 'single_host_origin',
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });
      this.attachSignin(document.getElementById('my-signin2'));
    });
  };


  // Rendereizar el boton de GOOGLE
  renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
    });
    this.startApp();
  }

  resetPassword() {
    Swal.mixin({
      // input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3']
    }).queue([
      {
        title: 'Question 1',
        text: 'Chaining swal2 modals is easy',
        html: '<input id="email" class="swal2-input">',
      },
      {
        title: 'Question 2',
        text: 'Chaining swal2 modals is easy',
        html: '<input id="password" class="swal2-input">',
      },
      {
        title: 'Question 3',
        text: 'Chaining swal2 modals is easy',
        html: '<input id="password2" class="swal2-input">',
      },
    ]).then((result: any) => {
      if (result.value) {
        const answers = JSON.stringify(result.value);
        Swal.fire({
          title: 'All done!',
          html:
            `
        Your answers:
        <pre><code>${answers}</code></pre>
      `,
          confirmButtonText: 'Lovely!'
        });
      }
    });
  }

}
