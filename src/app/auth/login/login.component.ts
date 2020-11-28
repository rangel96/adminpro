import { Component, OnInit, Input } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'userForm',
  // selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['/src/assets/css/pages/login-register-lock.css']
  // styleUrls: ['./login.component.css']
})
export class LoginComponent {

  createFormGroupo() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  userForm: FormGroup;

  public getError(controlName: string): string {
    let error = '';
    const control = this.createFormGroupo().get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }

  constructor(private usuariosSvc: UsuariosService) {
    this.userForm = this.createFormGroupo();
  }

  onResetForm() {
    this.userForm.reset();
  }

  // tslint:disable-next-line:typedef
  login() {
      const userLogin = this.userForm.value;
      this.usuariosSvc.login(userLogin).subscribe((authResponse) => {

        /*if (!authResponse.status ==false) {
          // Si las constraseñas no coinciden mostramos un mensaje
          document.getElementById('error').classList.add('mostrar');
          console.log('logged no successfully! \n' + authResponse);
          return false;
        }*/

        // Si las contraseñas coinciden ocultamos el mensaje de error
        document.getElementById('error').classList.remove('mostrar');

        // Mostramos un mensaje mencionando que las Contraseñas coinciden
        document.getElementById('ok').classList.remove('ocultar');

        // Refrescamos la página (Simulación de envío del formulario)
        /*setTimeout(function() {
          location.reload();
        }, 3000);*/

        // Mostramos un mensaje mencionando que las Contraseñas coinciden
      /*  alert('Logged in successfully! \nWelcome ' + authResponse);*/
        // console.log('logged in successfully! \nWelcome ' + authResponse.data.usuario.nombre);
        // this.onResetForm();
        return true;
      });

  }

  // tslint:disable-next-line:typedef
  public googleLogin(userToken) {
    this.usuariosSvc.googleLogin(userToken).subscribe((usuario) => {
      console.log(usuario);
    });
  }

  onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    var id_token = googleUser.getAuthResponse().id_token;
    console.log('Token: ' + id_token);
    this.googleLogin(id_token);
  }

  /* signOut() {
     var auth2 = gapi.auth2.getAuthInstance();
     auth2.signOut().then(function() {
       console.log('User signed out.');
     });
   }*/

  onSignInFb() {
    alert('Botón desabilitado por el momento\nGracias por intentarlo\ncx');
  }

}
