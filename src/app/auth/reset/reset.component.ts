import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
import { MyValidation } from '../register/register.validator';
import { UsuarioI } from '../../interfaces/usuarios';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
/*

  //  ---------- PROPIEDADES EL FORMS ---------- //
  createFormGroupo() {
    return new FormGroup({
        password: new FormControl('', Validators.required),
        password2: new FormControl('', Validators.required),
      },
      {
        validators: MyValidation.ValidarPassword,
        // asyncValidators: MyValidation.ValidarEmail
      }
    );
  }


  ///  ---------- VARIABLES ---------- //
  editPasswordForm: FormGroup;
  usuario: UsuarioI = this.usuariosSvc.usuario;

*/

  ///  ---------- CONSTRUCTOR ---------- //
  constructor(
    private usuariosSvc: UsuariosService, private router: Router) {
    // this.editPasswordForm = this.createFormGroupo();
  }

  ngOnInit(): void {
  }

/*
  //  ---------- MÉTODOS ---------- //
  onResetForm() {
    // Limpiar el formulario
    this.editPasswordForm.reset();

    // Cambiamos de pagina
    this.router.navigateByUrl('/login');
  }


  //  ---------- VALIDADORES ---------- //
  validarPassword(): boolean {
    return this.editPasswordForm.hasError('noSonIguales') &&
      this.editPasswordForm.get('password').dirty &&
      this.editPasswordForm.get('password2').dirty;
  }

  //  ---------- MÉTODOS SERVICE ---------- //
  resetPassword(){
    let password = this.editPasswordForm.get('password').value;
    console.log(password);
    console.log(this.usuario);
  }
*/

}
