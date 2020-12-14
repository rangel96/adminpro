import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidation } from '../../auth/register/register.validator';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
import { UsuarioI } from '../../interfaces/usuarios';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  ///  ---------- VARIABLES ---------- //
  editUserForm: FormGroup;

  //  ---------- PROPIEDADES EL FORMS ---------- //
  createFormGroup() {
    return new FormGroup(
      {
        nombre: new FormControl('Johnathan Doe', Validators.required),
        email: new FormControl('johnathan@admin.com', [Validators.required, Validators.email], []),
        password: new FormControl('', Validators.required),
        password2: new FormControl('', Validators.required),
        imagen: new FormControl('https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png', Validators.required),
      },
      {
        validators: MyValidation.ValidarPassword,
        // asyncValidators: MyValidation.ValidarEmail
      }
    );
  }

  constructor(private usuarioSvc: UsuariosService, private router: Router) {
    this.editUserForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  //  ---------- VALIDADORES ---------- //
  validarPassword(){
    return this.editUserForm.hasError('noSonIguales') &&
      this.editUserForm.get('password').dirty &&
      this.editUserForm.get('password2').dirty;
  }

  validarCorreo(){
    return this.editUserForm.hasError('emailExiste') &&
      this.editUserForm.get('email').dirty;
  }

  //  ---------- MÉTODOS ---------- //
  editarUsuario(){
    let usuario = this.editUserForm.value;
    console.log(usuario);
  }

  eliminarUsuario(){
    let usuario = this.editUserForm.value;
    console.log(usuario);
  }

}
