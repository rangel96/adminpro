import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['/src/assets/css/pages/login-register-lock.css']
  // styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  createFormGroup() {
    return new FormGroup({
      nombre: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      password2: new FormControl(''),
      imagen: new FormControl('https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png', Validators.required),
    });
  }

  userForm: FormGroup;

  constructor(private usuariosSvc: UsuariosService) {
    this.userForm = this.createFormGroup();
  }

  ngOnInit(): void {
    // this.addUser();
  }

  onResetForm() {
    this.userForm.reset();
  }

  addUser() {//createF
    const newUser = this.userForm.value;
    console.log(newUser);
    this.usuariosSvc.addUser(newUser).subscribe((usuario) => {
      console.log('New user added\n' + usuario);
      alert('User added');
    });
  }

  validarPassword(){
    // Get all form
    const newUser = this.userForm.value;

    // Optenemos los valores de los campos de contraseñas
    const pass1 = newUser.password;
    const pass2 = newUser.password2;

    // Verificamos si las constraseñas no coinciden
    if (pass1 != pass2) {

      // Si las constraseñas no coinciden mostramos un mensaje
      document.getElementById("error").classList.add("mostrar");

      return false;
    } else {

      // Si las contraseñas coinciden ocultamos el mensaje de error
      document.getElementById("error").classList.remove("mostrar");

      // Mostramos un mensaje mencionando que las Contraseñas coinciden
      document.getElementById("ok").classList.remove("ocultar");

      console.log(newUser);

      // Refrescamos la página (Simulación de envío del formulario)
      setTimeout(function() {
        location.reload();
      }, 3000);

      return true;
    }


  }

}
