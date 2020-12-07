import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
        nombre: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        imagen: new FormControl('https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png', Validators.required),
        password2: new FormControl('', [Validators.required]),
        terms: new FormControl(false, [Validators.requiredTrue]),
      }
    );
  }

  newUserForm: FormGroup;

  constructor(private usuariosSvc: UsuariosService, private router: Router) {
    this.newUserForm = this.createFormGroup();
  }

  onResetForm() {
    // Borrar el formulario
    this.newUserForm.reset();

    // Cambiar de pagina
    this.router.navigateByUrl('/');
  }

  addUser(newUser) {
    this.usuariosSvc.addUser(newUser).subscribe((usuario) => {
      if (usuario.status) {
        // Mensaje de loging exitoso
        Swal.fire({
          icon: 'success',
          title: usuario.msg,
          showConfirmButton: false,
          timer: 1500
        });

        // Limpiar formulario y cambiar de pagina
        this.onResetForm();
      } else{
        // Mensaje de registro fallido
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: usuario.msg,
          showConfirmButton: false,
          timer: 2000
        });
      }
    });

  }

  validarPassword() {
    // Get all form
    const newUser = this.newUserForm.value;

    // Optenemos los valores de los campos de contraseñas
    const pass1 = newUser.password;
    const pass2 = newUser.password2;

    // Verificamos si las constraseñas no coinciden
    if (pass1 != pass2) {

      // Si las constraseñas no coinciden mostramos un mensaje
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Las contraseñas no coinciden',
        showConfirmButton: false,
        timer: 2000
      });

    } else {
      this.addUser(newUser);
    }


  }

}

/*
validarPassword() {
  // Get all form
  const newUser = this.userForm.value;

  // Optenemos los valores de los campos de contraseñas
  const pass1 = newUser.password;
  const pass2 = newUser.password2;

  // Verificamos si las constraseñas no coinciden
  if (pass1 != pass2) {

    // Si las constraseñas no coinciden mostramos un mensaje
    document.getElementById('error').classList.add('mostrar');

    return false;
  } else {

    // Si las contraseñas coinciden ocultamos el mensaje de error
    document.getElementById('error').classList.remove('mostrar');

    // Mostramos un mensaje mencionando que las Contraseñas coinciden
    document.getElementById('ok').classList.remove('ocultar');

    console.log(newUser);

    // Refrescamos la página (Simulación de envío del formulario)
    setTimeout(function() {
      location.reload();
    }, 3000);

    return true;
  }
}
*/

